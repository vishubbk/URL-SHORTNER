import express from "express";
const router = express.Router();
import { authMiddleware } from "../MIDDLEWARES/authMiddleware.js";
import { createPasswordEntry, getAllPasswordEntries } from "../CONTROLLERS/passwordManager.controller.js";

// Route to create password
router.post("/",authMiddleware, createPasswordEntry);

// Route to get all passwords
router.get("/", authMiddleware, getAllPasswordEntries); // ✅ Change this

export default router;
