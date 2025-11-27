import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import { connectToSocket } from "./controllers/socketManager.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();

const server = createServer(app);
const io = connectToSocket(server);

app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  return res.json({ message: "hello from get server" });
});

const port = app.get("port");

// Start Server
const start = async () => {
  try {
    const connectionDB = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB connected: ${connectionDB.connection.host}`);

    server.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Mongo connection error:", error);
    process.exit(1);
  }
};

start();
