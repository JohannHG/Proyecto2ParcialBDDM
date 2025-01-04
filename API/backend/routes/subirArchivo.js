const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const ArchivoPDF = require('../models/ruta_archivo'); // Modelo para manejar los archivos
const Usuario = require('../models/usuarios'); // Modelo de usuarios

const router = express.Router();

// Configuración de multer para subir archivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Utiliza ruta absoluta para evitar problemas con la carpeta 'uploads'
        const uploadPath = path.join(__dirname, '..', 'uploads');
        cb(null, uploadPath); // Carpeta donde se guardarán los archivos
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Nombre único para evitar sobrescrituras
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

// Ruta para subir un archivo PDF
router.post('/subir', upload.single('pdf'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No se ha subido ningún archivo' });
    }

    const { usuario_id } = req.body; // Suponiendo que se pasa el ID del usuario en el body

    try {
        // Verificar si el usuario existe
        const usuario = await Usuario.findByPk(usuario_id);
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Guardar la información del archivo en la base de datos
        const archivo = await ArchivoPDF.create({
            usuario_id: usuario.id,
            nombre_archivo: req.file.originalname,
            ruta_archivo: `uploads/${req.file.filename}`, // Guardamos la ruta relativa al servidor
        });

        res.status(201).json({
            message: 'Archivo subido y registrado exitosamente',
            archivo: archivo,
        });
    } catch (error) {
        console.error('Error al subir el archivo:', error);
        res.status(500).json({ message: 'Error al subir el archivo' });
    }
});

// NUEVA RUTA: Descargar un archivo PDF por su ID
router.get('/api/archivos/:id', async (req, res) => {
    const { id } = req.params;

    try {
        // Buscar el archivo en la base de datos
        const archivo = await ArchivoPDF.findByPk(id);

        if (!archivo) {
            return res.status(404).json({ message: 'Archivo no encontrado' });
        }

        // Obtener la ruta absoluta del archivo
        const rutaArchivo = path.join(__dirname, '..', archivo.ruta_archivo);

        // Verificar si el archivo existe físicamente
        if (!fs.existsSync(rutaArchivo)) {
            return res.status(404).json({ message: 'El archivo no existe en el servidor' });
        }

        // Descargar el archivo
        res.download(rutaArchivo, archivo.nombre_archivo, (err) => {
            if (err) {
                console.error('Error al descargar el archivo:', err);
                res.status(500).json({ message: 'Error al descargar el archivo' });
            }
        });
    } catch (error) {
        console.error('Error al procesar la solicitud de descarga:', error);
        res.status(500).json({ message: 'Error al descargar el archivo' });
    }
});

module.exports = router;