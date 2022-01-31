import mongoose from "mongoose";
import Posts from "../models/postModel.js";

export const getPosts = async (req, res) => {
  try {
    const allPosts = await Posts.find();
    res.status(200).json({
      status: "success",
      allPosts,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

export const createPost = async (req, res) => {
  // console.log(req.body);
  try {
    const newPost = await Posts.create(req.body);
    // console.log("newpost", newPost);
    res.status(201).json({
      status: "success",
      newPost,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

export const updatePost = async (req, res) => {
  // get the id
  const { id } = req.params;
  try {
    // to check whether the id is a valid mongoose id or not
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).send("no post with that id");
      return;
    }
    const updatedPost = await Posts.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });

    res.status(201).json({
      status: "success",
      updatedPost,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

export const deletePost = async (req, res) => {
  // get the id
  const { id } = req.params;

  try {
    // to check whether the id is a valid mongoose id or not
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).send("no post with that id");
      return;
    }
    const deletedPost = await Posts.findByIdAndDelete(id);
    // console.log(data);
    res.status(201).json({
      status: "success",
      deletedPost,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
