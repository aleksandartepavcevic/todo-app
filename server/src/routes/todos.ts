import type { NextFunction, Request, Response, Router } from "express";

const express = require("express");
const todosController = require("../controllers/todosController");

const router: Router = express.Router();

router.get("/todos", todosController.getTodos);
router.post("/todos", todosController.createTodo);
router.put("/todos/:id", todosController.updateTodo);
router.delete("/todos/:id", todosController.deleteTodo);

module.exports = router;
