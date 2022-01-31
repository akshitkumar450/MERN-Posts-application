import express from "express";
const router = express.Router();
import {
  createPost,
  deletePost,
  getPosts,
  updatePost,
} from "../controllers/postControllers.js";

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
