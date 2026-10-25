
import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(helmet());
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "LG-Ref backend is running",
    database: mongoose.connection.readyState === 1
      ? "connected"
      : "disconnected",
    timestamp: new Date().toISOString(),
  });
});

async function startServer() {
  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is missing from the .env file");
  }

  await mongoose.connect(MONGODB_URI, {
    serverSelectionTimeoutMS: 5000,
  });

  console.log("MongoDB connected successfully");

  app.listen(PORT, () => {
    console.log(`LG-Ref API running at http://localhost:${PORT}`);
  });
}

startServer().catch((error) => {
  console.error("Failed to start LG-Ref backend:", error.message);
  process.exit(1);
});
