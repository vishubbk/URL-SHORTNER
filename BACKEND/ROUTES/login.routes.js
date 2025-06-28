// ROUTES/shorturl.routes.js
import express from "express";
const router = express.Router();

import { loginUser } from "../CONTROLLERS/login.controller.js";

// Route: POST /login
router.post("/", loginUser);

export default router;
