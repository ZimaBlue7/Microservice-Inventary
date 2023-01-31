import { Router } from "express";
import {
  getProduct,
  getProducts,
  deleteProduct,
  updateProduct,
  createProduct,
} from "../controllers/product.controller.js";
import { verifyToken, isAdmin } from "../middlewares/auth.js";
const router = Router();

router.get("/products", getProducts);
router.get("/product/:id", getProduct);
router.post("/products", createProduct);
router.delete("/product/:id", deleteProduct);
router.put("/product/:id", updateProduct);

export default router;
