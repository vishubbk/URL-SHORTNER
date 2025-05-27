import { shortUrlService, getUrlService } from "../SERVICES/shorturl.service.js";
import urlSchema from "../MODELS/shorturl.model.js";

// Create short URL
export const createShortUrl = async (req, res) => {
  try {
    const { url } = req.body;


    const result = await shortUrlService(url);

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message || "Internal server error" });
  }
};

// Redirect from short URL
export const redirectFromShortUrl = async (req, res) => {
  try {
    const { id } = req.params;

    const urlDoc = await getUrlService(id);

    if (!urlDoc) {
      return res.status(404).send("Short URL not found");
    }

    res.redirect(urlDoc.full_url);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
