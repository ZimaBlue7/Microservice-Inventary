import { Categoria } from "../models/Categoria.js";
import { Product } from "../models/Product.js";

export const getProductsCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const products = await Product.findOne({
      where: {
        id_categoria: id,
      },
    });
    res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCategoria = async (res, req) => {
  const { nombre } = req.body;
  try {
    const newCategory = await Categoria.create({
      nombre,
    });
    res.json(newCategory);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
