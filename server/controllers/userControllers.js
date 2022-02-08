import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Users from "../models/userModel.js";

export const signInUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await Users.findOne({ email });
    if (!existingUser) throw new Error("no user found");

    // to verify the given password and hashed password
    const isCorrectPassword = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isCorrectPassword) throw new Error("email or password do not match");

    // creating a token
    const token = jwt.sign({ user: existingUser }, "super-secret-string", {
      expiresIn: "2h",
    });
    res.status(200).json({
      status: "success",
      token,
      user: existingUser,
    });
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

export const signUpUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await Users.findOne({ email });
    if (existingUser) throw new Error("email already in use");

    // hashing the password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await Users.create({
      name,
      email,
      password: hashedPassword,
    });

    // creating a token
    const token = jwt.sign({ user }, "super-secret-string", {
      expiresIn: "2h",
    });

    res.status(200).json({
      status: "success",
      token,
      user,
    });
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
