import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: [
         "http://localhost:5173",
        "https://client-gamma-six-74.vercel.app"
    ]
}));

app.use(express.json());

// Health Check API
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "MyNotes backend is running successfully!",
  });
});

// Start Server
const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

startServer();