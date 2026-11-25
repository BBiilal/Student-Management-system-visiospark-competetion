import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT | 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
};

startServer();
