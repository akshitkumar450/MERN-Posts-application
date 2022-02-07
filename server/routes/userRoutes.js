import express from "express";
const router = express.Router();
import { signInUser, signUpUser } from "../controllers/UserControllers.js";

router.post("/signin", signInUser);
router.post("/signup", signUpUser);
export default router;
