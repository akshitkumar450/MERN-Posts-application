import express from "express";
const router = express.Router();
import {
  createPost,
  deletePost,
  getPosts,
  likePost,
  updatePost,
} from "../controllers/postControllers.js";
import { auth } from "../middleware/auth.js";

router.get("/", getPosts);
// auth is a middleware which will protect
router.use(auth);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likepost", likePost);

export default router;
