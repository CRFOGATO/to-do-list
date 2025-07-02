import express from "express";
import dotenv from "dotenv";
import path from "path";
import { router } from "./routes/main";

dotenv.config();

const server = express();

server.use(express.json());

server.use(express.urlencoded({ extended: true }));

server.use(express.static(path.join(__dirname, "../public")));

server.use(router);
//rotas

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
