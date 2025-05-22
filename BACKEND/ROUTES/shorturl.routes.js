// ROUTES/shorturl.routes.js
import express from "express";
const router = express.Router();

import { createShortUrl } from "../CONTROLLERS/shorturl.controller.js";



router.post("/", createShortUrl);

export default router;
