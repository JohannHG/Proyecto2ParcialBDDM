const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');  // Importar multer para manejar la subida de archivos
const { conectarBase } = require('./models/database');  // Verifica que la ruta sea correcta

// Importar modelos
const Usuario = require('./models/usuarios');
const Curso = require('./models/cursos');
const UsuarioCurso = require('./models/inscripciones');
const ArchivoPDF = require('./models/ruta_archivo');  // Asegúrate de importar el modelo de archivos

// Importar las rutas de usuario
const usuarioRoutes = require('./routes/usuarios');  // Ruta donde tienes las rutas de registro y login

// Crear instancia de express
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// Configuración de Multer para almacenar archivos en la carpeta 'uploads'
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Los archivos se guardarán en la carpeta 'uploads'
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Nombre único para evitar sobrescrituras
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // Limitar a 10MB
    fileFilter: (req, file, cb) => {
        if (file.mimetype !== 'application/pdf') {
            return cb(new Error('Solo se permiten archivos PDF'));
        }
        cb(null, true);
    }
});

// Conectar con la base de datos
conectarBase();

// Sincronizar los modelos con la base de datos
require('./models/usuarios');  // Asegúrate de que se importen los modelos correctamente

// Usar las rutas de usuarios para registro y login
app.use('/api/usuarios', usuarioRoutes);

// Ruta para registrar un usuario en un curso
app.post('/api/registro-curso', async (req, res) => {
    const { nombre, correo, telefono, curso, comentarios } = req.body;

    try {
        let usuario = await Usuario.findOne({ where: { correo: correo } });

        if (!usuario) {
            usuario = await Usuario.create({
                nombre: nombre,
                correo: correo,
                telefono: telefono,  // El teléfono sigue siendo necesario aquí
            });
        }

        const cursoExistente = await Curso.findOne({ where: { nombre_curso: curso } });

        if (!cursoExistente) {
            return res.status(404).json({ message: 'Curso no encontrado' });
        }

        await UsuarioCurso.create({
            usuario_id: usuario.id,
            curso_id: cursoExistente.id,
            telefono: telefono,
            comentarios: comentarios,
            correo_electronico: correo,
            fecha_inscripcion: new Date(),
        });

        res.status(201).json({ message: 'Usuario registrado en el curso exitosamente' });
    } catch (error) {
        console.error('Error al registrar al usuario en el curso:', error);
        res.status(500).json({ message: 'Error al registrar al usuario en el curso' });
    }
});

// Ruta para subir un archivo PDF
app.post('/api/subir-pdf', upload.single('pdf'), async (req, res) => {
    // Verificar si no se ha subido un archivo
    if (!req.file) {
        return res.status(400).json({ message: 'No se ha subido ningún archivo' });
    }

    const { usuario_id } = req.body;
    const nombre_archivo = req.file.originalname;  // Usar el nombre del archivo subido
    const ruta_archivo = req.file.path;

    // Verificar si el usuario_id está presente en la solicitud
    if (!usuario_id) {
        return res.status(400).json({ message: 'El usuario_id es requerido.' });
    }

    try {
        // Verificar si el usuario con ese id existe
        const usuarioExistente = await Usuario.findByPk(usuario_id);
        if (!usuarioExistente) {
            return res.status(404).json({ message: 'El usuario no existe' });
        }

        // Guardar el archivo en la base de datos con el nombre y la ruta
        const archivo = await ArchivoPDF.create({
            usuario_id: usuario_id,
            nombre_archivo: nombre_archivo,  // Nombre del archivo
            ruta_archivo: ruta_archivo  // Ruta donde está guardado el archivo
        });

        console.log('Archivo guardado en la base de datos:', archivo); // Log para verificar

        res.status(201).json({
            message: 'Archivo subido exitosamente',
            archivo
        });
    } catch (error) {
        console.error('Error al subir el archivo:', error);
        res.status(500).json({ message: 'Error al subir el archivo', error: error.message });
    }
});

// Ruta para descargar un archivo PDF
app.get('/api/archivos/:id', async (req, res) => {
    const { id } = req.params;

    try {
        // Buscar el archivo en la base de datos
        const archivo = await ArchivoPDF.findByPk(id);

        if (!archivo) {
            return res.status(404).json({ message: 'Archivo no encontrado' });
        }

        // Servir el archivo para su descarga
        res.download(archivo.ruta_archivo, archivo.nombre_archivo, (err) => {
            if (err) {
                res.status(500).json({ message: 'Error al descargar el archivo' });
            }
        });
    } catch (error) {
        console.error('Error al descargar el archivo:', error);
        res.status(500).json({ message: 'Error al descargar el archivo' });
    }
});

// Servir archivos estáticos desde la carpeta 'uploads'
app.use('/uploads', express.static('uploads'));  // Esto hará que los archivos sean accesibles desde http://localhost:3000/uploads/

// Definir rutas de ejemplo
app.get('/', (req, res) => {
    res.send('API funcionando correctamente');
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
