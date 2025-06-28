import passwordSchema from "../MODELS/password.manager.js";
import bcrypt from "bcrypt"

// Create Password Entry
export const createPasswordEntry = async (req, res) => {
  try {
    const { website, password, userId, } = req.body;

    if (!website || !password) {
      return res.status(400).json({ message: "Website and Password are required" });
    }
 // Hash password
 const hashedPassword = await bcrypt.hash(password, 10);
    const newEntry = await passwordSchema.create({ userId, website, password:hashedPassword });
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Get All Password Entries
// export const getAllPasswordEntries = async (req, res) => {
//   try {
//     const entries = await passwordSchema.find();
//     res.status(200).json(entries);
//   } catch (error) {
//     res.status(500).json({ message: "Server Error", error });
//   }
// };
