import userSignupSchema from "../MODELS/userSignup.model.js";
import bcrypt from "bcrypt";
import validator from "validator";

export const createUser = async (req, res) => {
  try {
    const { fullname, contact, email, password } = req.body;

    // Input validation
    if (!fullname || !contact || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Please enter a valid email address" });
    }

    // Check if user already exists (optional but recommended)
    const existingUser = await userSignupSchema.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists with this email Plz login..." });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save new user
    const newUser = await userSignupSchema.create({
      fullname,
      contact,
      email,
      password: hashedPassword
    });

    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
