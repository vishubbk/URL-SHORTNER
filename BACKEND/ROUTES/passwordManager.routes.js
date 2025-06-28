
import express from "express";
const router = express.Router();
import {authMiddleware} from "../MIDDLEWARES/routeProtection.middlewares.js";

import { createPasswordEntry } from "../CONTROLLERS/passwordManager.controller.js";



router.post("/",authMiddleware, createPasswordEntry);

export default router;
