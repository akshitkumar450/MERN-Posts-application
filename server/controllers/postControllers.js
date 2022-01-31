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
  console.log(req.body);
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
