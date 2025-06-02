import * as express from 'express';
import { Router } from 'express';
import {
  getAllTodosHandler,
  getTodoByIdHandler,
  createTodoHandler,
  updateTodoHandler,
  deleteTodoHandler,
} from '../controllers/todoController';

const router = Router();

router.get('/', getAllTodosHandler as express.RequestHandler);
router.get('/:id', getTodoByIdHandler as express.RequestHandler);
router.post('/', createTodoHandler as express.RequestHandler);
router.put('/:id', updateTodoHandler as express.RequestHandler);
router.delete('/:id', deleteTodoHandler as express.RequestHandler);

export default router;
