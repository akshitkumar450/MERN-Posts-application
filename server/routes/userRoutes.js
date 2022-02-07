import express from "express";
const router = express.Router();
import { add } from "../controllers/UserControllers.js";

router.get("/", add);
export default router;
