import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import apiRoutes from "./apiRoutes.js";
import * as dotenv from 'dotenv';
dotenv.config();
const PORT = 3001;
const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
await mongoose.connect(
  `mongodb+srv://admin-ankur:${process.env.password}@cluster0.4zksoll.mongodb.net/managerDB`
);

// Import and use API routes
app.use("/api", apiRoutes);

app.listen(PORT, function () {
  console.log(`🚀 Server is running at ${PORT}`);
});
