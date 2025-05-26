import urlSchema from "../MODELS/shorturl.model.js";
import { generateNanoId } from "../UTILES/helper.js";

// Create short URL
export const shortUrlService = async (url) => {
  console.log("fetch done", url);

  if (!url) {
    throw new Error("URL is required");
  }
  const find = await urlSchema.findOne({
    full_url:url
  })
  if(find){
    return find
  }

  // ✅ If URL doesn't start with http, add it
  let normalizedUrl = url;
  if (!/^https?:\/\//i.test(url)) {
    normalizedUrl = `https://${url}`;
  }

  const shortCode = generateNanoId(7);

  const newUrl = new urlSchema({
    full_url: normalizedUrl,
    short_url: shortCode
  });

  await newUrl.save();

  return {
    message: "Short URL created successfully",
    full_url: normalizedUrl,
    short_url: `${process.env.APP_URL}/${shortCode}`
  };
};


// Get and redirect
export const getUrlService = async (id) => {
  const url = await urlSchema.findOneAndUpdate(
    { short_url: id },
    { $inc: { clicks: 1 } },
    { new: true }
  );

  return url; // this will be null if not found
};
