import express from "express";
const router = express.Router();
import {
  createPost,
  getPosts,
  updatePost,
} from "../controllers/postControllers.js";

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);

export default router;
