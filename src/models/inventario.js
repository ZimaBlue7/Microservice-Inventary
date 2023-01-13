const { DataTypes } = require ('sequelize');
const {sequelize} = require ('../database/database.js');


const Inventario = sequelize.define("inventario",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        
    },
    idProducto: {
        type: DataTypes.INTEGER,

    },
    cantidad: {
        type: DataTypes.INTEGER,
    }
    
},
    {timestamps: true}
);




module.exports = Inventario;
