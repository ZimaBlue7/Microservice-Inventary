import { Router } from "express";
import {
  getProductsCategory,
  createCategoria,
  getCategorias,
  getCategoria,
  deleteCategoria,
  updateCategoria,
} from "../controllers/category.controller.js";
import { verifyToken, isAdmin } from "../middlewares/auth.js";
const router = Router();

router.get("/category/:id/products", getProductsCategory);
router.post("/category", [verifyToken, isAdmin], createCategoria);
router.get("/categorys", getCategorias);
router.get("/category/:id", getCategoria);
router.delete("/category/:id", [verifyToken, isAdmin], deleteCategoria);
router.put("/category/:id", [verifyToken, isAdmin], updateCategoria);

export default router;
