import { PrismaClient } from "@prisma/client";

export interface Todo {
  id: string;
  title: string;
  done: boolean;
}

const prisma = new PrismaClient();

export const todoList = {
  findMany: async (): Promise<Todo[]> => {
    const todos = await prisma.todos.findMany();
    return todos.map((todo) => ({
      id: String(todo.id),
      title: todo.title ?? "",
      done: todo.done ?? false,
    }));
  },

  findUnique: async (id: string): Promise<Todo | null> => {
    const todo = await prisma.todos.findUnique({
      where: { id: Number(id) },
    });

    if (!todo) return null;

    return {
      id: String(todo.id),
      title: todo.title ?? "",
      done: todo.done ?? false,
    };
  },
  create: async (data: { title: string; done?: boolean }): Promise<Todo> => {
    const todo = await prisma.todos.create({
      data: {
        title: data.title,
        done: data.done ?? false,
      },
    });
    return {
      id: String(todo.id),
      title: todo.title ?? "",
      done: todo.done ?? false,
    };
  },
  update: async (
    id: string,
    data: Partial<Omit<Todo, "id">>
  ): Promise<Todo | null> => {
    const todo = await prisma.todos.update({
      where: { id: Number(id) },
      data,
    });
    return todo
      ? {
          id: String(todo.id),
          title: todo.title ?? "",
          done: todo.done ?? false,
        }
      : null;
  },
  delete: async (id: string): Promise<boolean> => {
    await prisma.todos.delete({ where: { id: Number(id) } });
    return true;
  },
};
