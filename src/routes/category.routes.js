import { Router } from "express";
import {
  getProductsCategory,
  createCategoria,
} from "../controllers/category.controller.js";

const router = Router();

router.get("/category/:id/products", getProductsCategory);
router.post("/category", createCategoria);

export default router;
