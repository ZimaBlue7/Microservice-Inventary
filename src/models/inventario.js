import { sequelize } from "../database/db.js";
import { DataTypes } from "sequelize";
import { Product } from "./Product.js";

export const Inventario = sequelize.define(
  "inventario",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    idProducto: {
      type: DataTypes.INTEGER,
    },
    cantidad: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: true }
);

Inventario.hasMany(Product, {
  foreignKey: "idProducto",
  
});

Product.belongsTo(Inventario, {
  foreignKey: "idProducto",
  
});
