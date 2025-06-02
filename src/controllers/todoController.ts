import { Request, Response } from 'express';
import {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
} from '../services/todoService';
import { Todo } from '../models/todo.model';

export {
  getAllTodosHandler,
  getTodoByIdHandler,
  createTodoHandler,
  updateTodoHandler,
  deleteTodoHandler,
};

const getAllTodosHandler = (req: Request, res: Response) => {
  const todos = getAllTodos();
  res.json(todos);
};

const getTodoByIdHandler = (req: Request, res: Response) => {
  const { id } = req.params;
  const todo = getTodoById(id);

  if (!todo) {
    return res.status(404).json({ message: 'Todo not found' });
  }

  res.status(200).json(todo);
};

const createTodoHandler = (req: Request, res: Response) => {
  const todo: Todo = req.body;
  const createdTodo = createTodo(todo);
  res.status(201).json(createdTodo);
};

const updateTodoHandler = (req: Request, res: Response) => {
  const { id } = req.params;
  const todo: Todo = req.body;
  const updatedTodo = updateTodo(id, todo);

  if (!updatedTodo) {
    return res.status(404).json({ message: 'Todo not found' });
  }

  res.status(200).json(updatedTodo);
};

const deleteTodoHandler = (req: Request, res: Response) => {
  const { id } = req.params;
  const deleted = deleteTodo(id);

  if (!deleted) {
    return res.status(404).json({ message: 'Todo not found' });
  }

  res.status(204).send();
};
