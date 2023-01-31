import { Product } from "../models/Product.js";
import { uploadFile } from "../aws/s3.js";

export const getProducts = async (req, res) => {
  try {
    const product = await Product.findAll();
    res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findOne({
      where: {
        id,
      },
    });
    res.json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  const {
    nombre,
    marca,
    precio,
    imagen,
    id_categoria,
    cantidad,
    descripcion,
    promocion,
  } = req.body;
  try {
    const newProduct = await Product.create({
      nombre,
      marca,
      precio,
      imagen,
      id_categoria,
      cantidad,
      descripcion,
      promocion,
    });
    res.json(newProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findOne({
      where: {
        id,
      },
    });
    product.set(req.body);
    await product.save();
    return res.json();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Product.destroy({
      where: {
        id,
      },
    });
    res.json(result);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
