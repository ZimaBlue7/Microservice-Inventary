import { Router } from "express";
import {
  getCantidadProduct,
  getCantidadTotal,
} from "../controllers/inventary.controller.js";

const router = Router();

router.get("/invetary", getCantidadProduct);
router.get("/inventary", getCantidadTotal);

export default router;
