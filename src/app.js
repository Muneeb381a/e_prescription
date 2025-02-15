import express from "express";
import dotenv from "dotenv";
import { ApiError } from "./utils/ApiError.js";

dotenv.config({
  path: "./.env",
});

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json({ message: "Locslly its working" });
});

// Routes


// 404 middleware for unknown routes

app.use((req, res, next) => {
  next(new ApiError(404, "Route not found"));
});

// global error handler

app.use((err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      errors: err.errors || [],
    });
  }
  res.status(500).json({
    success: false,
    message: "Internal server error occured",
    error: err.message || "Unknown error",
  });
});

export default app;
