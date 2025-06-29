import passwordSchema from "../MODELS/password.manager.js";

import bcrypt from "bcrypt";

// Create Password Entry
export const createPasswordEntry = async (req, res) => {
  try {
    const { website, password } = req.body;

    if (!website || !password) {
      return res.status(400).json({ message: "Website and Password are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = req.user.id;

    const newEntry = await passwordSchema.create({ userId, website, password: hashedPassword });
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Get All Passwords for Current User
export const getAllPasswordEntries = async (req, res) => {
  try {
    const userId = req.user.id;
    const entries = await passwordSchema.find({ userId });
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
