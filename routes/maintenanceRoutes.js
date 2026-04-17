import express from "express";
const router = express.Router();

// assign technician
router.post("/assign", (req, res) => {});

// get all tasks
router.get("/", (req, res) => {});

// get single task
router.get("/:id", (req, res) => {});

// update task status
router.patch("/:id/status", (req, res) => {});

// delete task
router.delete("/:id", (req, res) => {});

export default router;
