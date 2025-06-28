
import express from "express";
const router = express.Router();

import { createPasswordEntry } from "../CONTROLLERS/passwordManager.controller.js";



router.post("/", createPasswordEntry);

export default router;
