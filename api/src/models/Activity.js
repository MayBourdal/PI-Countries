const { DataTypes, sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey:true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    physicalDifficulty: {
      type: DataTypes.ENUM("1","2","3","4","5"),
      allowNull: false,
    },
  
    technicalDifficulty: {
      type: DataTypes.ENUM("1","2","3","4","5"),
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    season: {
      type: DataTypes.ENUM("Spring", "Summer", "Fall", "Winter"),
    },
    
  },{
    freezeTableName: true
    });
};