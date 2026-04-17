import express from "express";
import { createRequest, getRequests, updateStatus } from "../controllers/request.controller.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

router.post("/", authMiddleware, createRequest);
router.get("/", authMiddleware, getRequests);
router.patch("/:id/status", authMiddleware, updateStatus);

export default router;
