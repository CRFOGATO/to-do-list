import { Router } from "express";
import * as todoController from "../controllers/TodoController";

export const router = Router();

router.get("/todo", todoController.all);

router.post("/todo", todoController.create);

router.put("/todo/:id", todoController.update);

router.delete("/todo/:id", todoController.remove);
