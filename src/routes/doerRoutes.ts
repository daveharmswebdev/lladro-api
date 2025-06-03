import { Router } from 'express';
import * as doerController from '../controllers/doerController';

const router = Router();

// GET all doers
router.get('/', doerController.getAllDoers);

// GET a single doer by ID
router.get('/:id', doerController.getDoerById);

// GET a single doer by ID and all their todos
router.get('/:id/todos', doerController.getDoerAndAllTodos);

// POST (create) a new doer
router.post('/', doerController.createDoer);

// PUT (update) a doer by ID
router.put('/:id', doerController.updateDoer);

// DELETE a doer by ID
router.delete('/:id', doerController.deleteDoer);

export default router;
