import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postsRouter from "./routes/postsRoutes.js";
const app = express();
dotenv.config({
  path: "./config.env",
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/posts", postsRouter);

const connectionURL = process.env.MONGODB_CONNECTION.replace(
  "<PASSWORD>",
  process.env.MONGODB_PASSWORD
);

mongoose
  .connect(connectionURL)
  .then((db) => {
    app.listen(5000, () => {
      console.log("server running");
      console.log("db connection success");
    });
  })
  .catch((err) => console.log(err.message));
