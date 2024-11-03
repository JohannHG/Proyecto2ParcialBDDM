// index.js
const { sql, connectToDB } = require('./db');

async function insertarAsistente(nombre, apellido, email, actividad) {
    try {
        const pool = await connectToDB();
        const request = pool.request();
        request.input('Nombre', sql.NVarChar, nombre);
        request.input('Apellido', sql.NVarChar, apellido);
        request.input('Email', sql.NVarChar, email);
        request.input('Actividad', sql.NVarChar, actividad);

        await request.query(`
            INSERT INTO Asistentes (Nombre, Apellido, Email, Actividad) 
            VALUES (@Nombre, @Apellido, @Email, @Actividad)
        `);
        console.log("Asistente registrado exitosamente.");
    } catch (err) {
        console.error("Error al insertar asistente:", err);
    }
}

async function consultarAsistentes() {
    try {
        const pool = await connectToDB();
        const request = pool.request();
        const result = await request.query('SELECT * FROM Asistentes');
        console.log("Lista de Asistentes:", result.recordset);
    } catch (err) {
        console.error("Error al consultar asistentes:", err);
    }
}

// Llama a las funciones
insertarAsistente("Juan", "Perez", "juan.perez@example.com", "Conferencia de IA");
consultarAsistentes();
