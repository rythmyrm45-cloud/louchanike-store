import productRoutes from "./routes/productRoutes.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
dotenv.config();

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://louchanike-store.vercel.app"
  ]
}));

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "ROYAL BLOOM Backend is running!",
    brand: "LOUCHANIKE"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    status: "Backend is healthy"
  });
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`ROYAL BLOOM Backend running on port ${PORT}`);
  });
};

startServer();

