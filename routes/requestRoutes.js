import express from "express";
import {
  createRequest,
  getRequests,
  updateRequestStatus
} from "../controllers/request.controller.js";

import { authMiddleware } from "../middleware/auth.js";
import { authorize } from "../middleware/role.js";

const router = express.Router();

// create request → any logged user
router.post("/", authMiddleware, createRequest);

// view requests → admin / manager
router.get("/", authMiddleware, authorize(["ADMIN", "MANAGER"]), getRequests);

// approve/reject → dept head / dean
router.patch(
  "/:id/status",
  authMiddleware,
  authorize(["DEPARTMENT_HEAD", "DEAN"]),
  updateRequestStatus
);

export default router;
