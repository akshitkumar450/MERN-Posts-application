import Users from "../models/userModel.js";

export const add = async (req, res) => {
  const user = await Users.create({
    name: "asd",
    email: "asd",
    password: "asd",
  });
  res.json(user);
};
