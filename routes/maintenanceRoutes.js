import express from "express";
import {
  assignTask,
  updateTaskStatus
} from "../controllers/maintenance.controller.js";

import { authMiddleware } from "../middleware/auth.js";
import { authorize } from "../middleware/role.js";

const router = express.Router();

// assign → admin only
router.post(
  "/assign",
  authMiddleware,
  authorize(["ADMIN"]),
  assignTask
);

// update → technician
router.patch(
  "/:id/status",
  authMiddleware,
  authorize(["TECHNICIAN"]),
  updateTaskStatus
);

export default router;
