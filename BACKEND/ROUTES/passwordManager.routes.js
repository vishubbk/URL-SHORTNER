import express from "express";
const router = express.Router();
import { authMiddleware } from "../MIDDLEWARES/authMiddleware.js";
import { createPasswordEntry, getAllPasswordEntries ,deletePasswordEntry ,editPasswordEntry} from "../CONTROLLERS/passwordManager.controller.js";

// Route to create password
router.post("/",authMiddleware, createPasswordEntry);
router.put("/update/:id",authMiddleware, editPasswordEntry);
router.delete("/delete/:id",authMiddleware, deletePasswordEntry);



// Route to get all passwords
router.get("/", authMiddleware, getAllPasswordEntries); // ✅ Change this

export default router;
