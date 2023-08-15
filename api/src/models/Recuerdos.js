const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Recuerdo', {
      ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true,
      },
      Fecha:{
        type:DataTypes.DATEONLY,
        allowNull:false
      },
      Lugar:{
        type:DataTypes.STRING,
        allowNull:false
      },
      Descripcion:{
        type:DataTypes.TEXT,
        allowNull:false
      }
    });
  };