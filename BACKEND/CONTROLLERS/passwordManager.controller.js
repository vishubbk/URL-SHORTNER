import passwordSchema from "../MODELS/password.manager.js";

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const createPasswordEntry = async (req, res) => {
  try {


    const { website, password } = req.body;

    if (!website || !password) {
      return res.status(400).json({ message: "Website and Password are required" });
    }

    // ✅ Get token from Authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: "Unauthorized, no token provided" });
    }

    const token = authHeader.split(' ')[1];

    // ✅ Verify token
    const decoded = jwt.verify(token, "your_secret_key");

    const userId = decoded.id;



    // ✅ Save to database
    const newEntry = await passwordSchema.create({ userId, website, password});

    res.status(201).json({ message: "Password entry created successfully", entry: newEntry });
  } catch (error) {
    console.error(error);
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

export const editPasswordEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const { website, password } = req.body;

    if (!website || !password) {
      return res.status(400).json({ message: "Website and Password are required" });
    }

    const updatedPassword = await passwordSchema.findByIdAndUpdate(
      id,
      { website, password },
      { new: true }
    );

    if (!updatedPassword) {
      return res.status(404).json({ message: "Password entry not found" });
    }

    res.status(200).json({ message: "Password updated successfully", updatedPassword });

  } catch (error) {
    console.error("Error updating password:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};


export const deletePasswordEntry = async (req, res) => {
  try {
    console.log(`hit the delete api ${req.params.id}`);

    const deleted = await passwordSchema.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Password not found" });
    res.status(200).json({ message: "Password deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
