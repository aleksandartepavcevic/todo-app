import type { Request, Response } from "express";

const asyncHandler = require("express-async-handler");

const getTodos = asyncHandler(async (req: Request, res: Response) => {
  res.json({ message: "Get todos from server" });
});

const createTodo = asyncHandler(async (req: Request, res: Response) => {
  res.json({ message: "Create todo from server" });
});

const updateTodo = asyncHandler(async (req: Request, res: Response) => {
  res.json({ message: "Update todo from server" });
});

const deleteTodo = asyncHandler(async (req: Request, res: Response) => {
  res.json({ message: "Delete todo from server" });
});

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
