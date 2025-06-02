import express, { Router } from 'express';
import { hello } from '../controllers/helloController';

const router = express.Router();

router.get('/', hello);

export default router;
