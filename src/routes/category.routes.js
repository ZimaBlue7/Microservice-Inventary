import { Router } from "express";
import { getProductsCategory } from "../controllers/category.controller";

const router = Router();

router.get("/product/:id/products", getProductsCategory);

export default router;
