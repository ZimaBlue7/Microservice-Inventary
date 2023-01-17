import { sequelize } from "../database/db.js";
import { DataTypes } from "sequelize";

export const Categoria = sequelize.define(
  "categoria",
  {
    id: {
      types: DataTypes.INTEGER,
      primaryKey: true,
    },
    nombre: {
      types: DataTypes.STRING,
    },
  },
  { timestamps: true }
);
