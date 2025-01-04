const { DataTypes, Model, Sequelize } = require('sequelize');
const { sequelize } = require('./database');  // Asegúrate de que la ruta al archivo de base de datos sea correcta

class ArchivoPDF extends Model {}

ArchivoPDF.init({
    id: { 
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true 
    },
    usuario_id: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
    nombre_archivo: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    ruta_archivo: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    fecha_subida: { 
        type: DataTypes.DATE,  // Fecha del archivo subido
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')  // Usando literal para asegurar que la fecha sea la correcta
    }
}, {
    sequelize,
    modelName: 'ArchivoPDF',
    tableName: 'archivos_pdf',  // Asegúrate de que el nombre de la tabla sea correcto
    timestamps: false,  // No necesitas 'createdAt' ni 'updatedAt'
});

module.exports = ArchivoPDF;