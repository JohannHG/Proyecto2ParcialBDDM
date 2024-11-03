const sql = require('mssql');
const { DefaultAzureCredential } = require('@azure/identity');

const config = {
    server: 'db2parcial.database.windows.net',
    database: 'RegistroAsistentes',
    authentication: {
        type: 'azure-active-directory-msi-app-service', // Esto indica que usará Microsoft Entra
        options: {
            clientId: '394542c5-e173-4c60-b7cc-0a2d2a1d8fb4' // Coloca el Id. de Objeto/Aplicación
        }
    },
    options: {
        encrypt: true,
        enableArithAbort: true,
        trustServerCertificate: false,
    },
    port: 1433,
};

let pool;

async function connectToDB() {
    if (!pool) {
        try {
            pool = await sql.connect(config);
            console.log('Conexión exitosa a la base de datos');
        } catch (err) {
            console.error('Error al conectar con la base de datos:', err);
            throw err;
        }
    }
    return pool;
}

module.exports = { sql, connectToDB };
