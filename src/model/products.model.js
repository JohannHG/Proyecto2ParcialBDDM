const { Sequelize } = require('sequelize');

// Crear una nueva instancia de Sequelize con las opciones adecuadas en SQLServer
const sequelize = new Sequelize("RegistroAsistentes", "CloudSA22b6120b@db2parcial", "Rackoku22#", {
    host: "db2parcial.database.windows.net",
    dialect: "mssql",
    dialectOptions: {
        options: {
            encrypt: true,
            enableArithAbort: true,
        },
        port: 1433,  
    },
});

// Autenticar la conexión
sequelize.authenticate()
    .then(() => console.log('Conexión a SQL Server establecida correctamente'))
    .catch(err => console.error('No se pudo conectar a SQL Server:', err));

// Exportar la instancia de sequelize para usarla en otras partes de la aplicación
module.exports = sequelize;


// Conexion MySQLServer

/* async function testConnection() {
try {
    await sequelize.authenticate()
    console.log("All Good!!")
}  catch(err) {
    console.error("All Bad!!", err)
}
  }  

  testConnection(); */