import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import apiRoutes from "./routes/api";
import { error } from "console";

dotenv.config();

const server = express();

server.use(cors());

server.use(express.static(path.join(__dirname, "../public")));
server.use(express.urlencoded({ extended: true }));

server.use(apiRoutes);

server.use((req, res) => {
  res.status(404);
  res.json({ error: "Pagina não encontrada" });
});

server.listen(process.env.PORT);
