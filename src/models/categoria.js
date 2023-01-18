import { sequelize } from "../database/db.js";
import { DataTypes } from "sequelize";

export const Categoria = sequelize.define(
  "categoria",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: true }
);
