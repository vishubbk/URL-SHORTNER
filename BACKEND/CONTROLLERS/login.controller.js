import userSignupSchema from "../MODELS/userSignup.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Find user
    const user = await userSignupSchema.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Create token
    const token = jwt.sign({ id: user._id }, "your_secret_key", { expiresIn: "1d" }); // Secret key should be in env file

    // Send token via cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // true if using https
      maxAge: 24 * 60 * 60 * 1000 // 1 day
    });

    res.status(200).json({ message: "Login successful", user,token });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
