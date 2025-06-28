import mongoose from "mongoose";

const PasswordManagerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'SignUpUser', required: true },
  website: { type: String, required: true },
  password: { type: String, required: true }
}, { timestamps: true });

const PasswordManager = mongoose.model("PasswordManager", PasswordManagerSchema);

export default PasswordManager;
