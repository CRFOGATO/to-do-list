import { Request, Response } from "express";
import { Todo, todoList } from "../models/todo";

export const all = async (req: Request, res: Response) => {
  const list = await todoList.findMany();
  res.status(200).json(list);
};

export const create = async (req: Request, res: Response) => {
  if (req.body.title) {
    let newTodo = await todoList.create({
      title: req.body.title,
      done: req.body.done ? true : false,
    });
    res.status(201).json(newTodo);
  } else {
    res.status(400).json({ error: "Title is required" });
  }
};

export const update = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  let todo = await todoList.findUnique(id);

  if (todo) {
    if (req.body.title) {
      todo.title = req.body.title;
    }

    if (req.body.done !== undefined) {
      switch (req.body.done.toString().toLowerCase()) {
        case "true":
        case "1":
          todo.done = true;
          break;
        case "false":
        case "0":
          todo.done = false;
          break;
      }
    }

    await todoList.update(id, {
      title: todo.title,
      done: todo.done,
    });

    res.status(200).json(todo);
  } else {
    res.json({ error: "Item não encontrado." });
  }
};
export const remove = async (req: Request, res: Response) => {
  let id: string = req.params.id;

  let todo = await todoList.findUnique(id);

  if (todo) {
    await todoList.delete(id);
    res.status(200).json({ message: "Item removido com sucesso." });
  } else {
    res.status(404).json({ error: "Item não encontrado." });
  }
};
