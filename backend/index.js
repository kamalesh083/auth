import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3500;

app.use("/api/auth", authRoutes);
app.use(express.json()); // to parse incoming requests with JSON payloads

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on port 3500");
});
