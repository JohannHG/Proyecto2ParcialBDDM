const { Sequelize } = require('sequelize');

// Configura la conexión con la base de datos
const sequelize = new Sequelize('mi_proyecto', 'root', 'rackoku22', {
    host: 'localhost',
    dialect: 'mysql',
});

// Función para verificar la conexión
const conectarBase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conectado a la base de datos');
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
};

module.exports = { sequelize, conectarBase };