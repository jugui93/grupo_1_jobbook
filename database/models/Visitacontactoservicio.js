module.exports = function(sequelize, dataTypes){

    let alias = 'Visitacontactoservicio'; 

    let cols = {
        id:{
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey:true,
            allowNull:false,
            autoIncrement: true,
            unique:true
        },

        idServicio:{
            type: dataTypes.INTEGER.UNSIGNED
        },

        idUsuario:{
            type: dataTypes.INTEGER.UNSIGNED
        },

        fecha: {
            type: dataTypes.DATEONLY
        }
    }

    let config = {
        tableName: 'visitacontactoservicios',
        timestamps: false
    }

   let Visitacontactoservicio = sequelize.define(alias, cols, config); 

}