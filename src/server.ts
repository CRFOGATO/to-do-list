import express from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const server = express();

server.use(express.static(path.join(__dirname, "../public")));

//rotas

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

server.listen(process.env.PORT);
