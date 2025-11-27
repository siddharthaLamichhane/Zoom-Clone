import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.get("/", (req, res) => {
  return res.json({
    message: "hello from get server",
  });
});
app.listen(3000, () => {
  console.log("server is running");
});
