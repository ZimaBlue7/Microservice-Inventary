import { Router } from "express";
import {
  getCantidadProduct,
  getCantidadTotal,
  createInventary,
} from "../controllers/inventary.controller.js";

const router = Router();

router.get("/invetary", getCantidadProduct);
router.get("/inventary", getCantidadTotal);
router.post("/newInventary", createInventary);

export default router;
