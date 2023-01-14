import { sequelize } from "../database/db.js";
import { DataTypes } from "sequelize";

export const Categoria = sequelize.define(
  "categoria",
  {
    id: {
      types: DataTypes.INTEGER,
      primaryKey: true,
    },
    id_producto: {
      types: DataTypes.INTEGER,
    },
    nombre: {
      types: DataTypes.STRING,
    },
  },
  { timestamps: true }
);
