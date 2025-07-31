import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import setupSocketHandlers from "./web3/socketHandlers.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

server.listen(8080, () =>
  console.log("✅ Backend ready on http://localhost:8080")
);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    "<h1>Backend is running and ready to accept socket connections!</h1>"
  );
});

setupSocketHandlers(io);
