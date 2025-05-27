import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();


import connectDB from "./CONFIG/mongo.config.js";
import shortUrlRoutes from "./ROUTES/shorturl.routes.js";
import { redirectFromShortUrl } from "./CONTROLLERS/shorturl.controller.js";
import urlSchema from "./MODELS/shorturl.model.js";


const app = express();
connectDB();
app.use(cors({
  origin: [
    "http://localhost:5173", "https://url-short-p5mg.onrender.com","https://shorty0.netlify.app/"],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello world");
});


app.use("/api/create", shortUrlRoutes);
app.get("/:id", redirectFromShortUrl);




const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
