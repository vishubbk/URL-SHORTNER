// ROUTES/shorturl.routes.js
import express from "express";
const router = express.Router();

import { createUser } from "../CONTROLLERS/signup.controller.js";



router.post("/", createUser);

export default router;
