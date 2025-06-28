import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from 'cookie-parser';



import connectDB from "./CONFIG/mongo.config.js";
import shortUrlRoutes from "./ROUTES/shorturl.routes.js";

import passwordManagerRoutes from "./ROUTES/passwordManager.routes.js";
import signUpRoutes from "./ROUTES/signUp.routes.js";
import loginRoutes from "./ROUTES/login.routes.js";
import { redirectFromShortUrl } from "./CONTROLLERS/shorturl.controller.js";
import urlSchema from "./MODELS/shorturl.model.js";


const app = express();
connectDB();
app.use(cors({
  origin: [
    "http://localhost:5173", "https://url-short-p5mg.onrender.com"],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.get("/", (req, res) => {
  res.send("hello world");
});


app.use("/api/create", shortUrlRoutes);
app.use("/api/signUp", signUpRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/passwordManager", passwordManagerRoutes);
app.get("/:id", redirectFromShortUrl);




const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
