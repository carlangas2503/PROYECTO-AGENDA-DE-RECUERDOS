const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Usuario', {
      ID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull:false,
      },
      Nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Apellido:{
        type:DataTypes.STRING,
        allowNull:false
      },
      Correo: {
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
      },
      Apodo:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
      },
      Contraseña:{
        type:DataTypes.STRING,
        allowNull:false
      },
      FotoPerfil:{
        type:DataTypes.STRING,
      },
      isAdmin:{
        type:DataTypes.BOOLEAN,
        allowNull:false
      }
    },{
      timestamps:false,
    });
  };