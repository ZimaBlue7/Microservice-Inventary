import { Router } from "express";
import {
  getProductsCategory,
  createCategoria,
  getCategorias,
  getCategoria,
  deleteCategoria,
  updateCategoria,
} from "../controllers/category.controller.js";

const router = Router();

router.get("/category/:id/products", getProductsCategory);
router.post("/category", createCategoria);
router.get("/categorys", getCategorias);
router.get("/category/:id", getCategoria);
router.delete("/category/:id", deleteCategoria);
router.put("/category/:id", updateCategoria);

export default router;
