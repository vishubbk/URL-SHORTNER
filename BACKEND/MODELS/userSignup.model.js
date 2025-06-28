import mongoose from "mongoose";

const SignUpUserSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  contact: { type: Number, required: true, unique: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const SignUpUser = mongoose.model("SignUpUser", SignUpUserSchema);

export default SignUpUser;
