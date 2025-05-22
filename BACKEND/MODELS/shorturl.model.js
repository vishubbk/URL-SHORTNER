import mongoose from "mongoose";


// Define the User Schema
const shortUrlSchema = new mongoose.Schema({
  full_url: { type: String, required: true,index:true, unique: true  },

  short_url: { type: String, required: true,index:true, unique: true },

  clicks: { type: Number, required: true,default:0 },

  users: { type: mongoose.Schema.Types.ObjectId, ref: "User" },


});




// Export the User model
const shortUrl = mongoose.model("shortUrl", shortUrlSchema);

export default shortUrl;