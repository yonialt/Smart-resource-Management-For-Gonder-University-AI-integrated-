import express from "express";
import {
  createResource,
  getResources
} from "../controllers/resource.controller.js";

import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

router.post("/", authMiddleware, createResource);
router.get("/", authMiddleware, getResources);

export default router;
