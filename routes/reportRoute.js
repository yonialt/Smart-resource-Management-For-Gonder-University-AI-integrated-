import express from "express";
const router = express.Router();

// general report
router.get("/", (req, res) => {});

// resource report
router.get("/resources", (req, res) => {});

// request report
router.get("/requests", (req, res) => {});

// maintenance report
router.get("/maintenance", (req, res) => {});

export default router;
