const { DataTypes } = require ('sequelize');
const {sequelize} = require ('../database/db.js');


const Product = sequelize.define("product",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        
    },
    nombre: {
        type: DataTypes.STRING

    },
    marca: {
        type: DataTypes.STRING
    },
    precio: {
        type: DataTypes.INTEGER,
          
    },
    cantidad: {
        type: DataTypes.INTEGER,
        
    },
},
    {timestamps: true}
);

module.exports = Product;