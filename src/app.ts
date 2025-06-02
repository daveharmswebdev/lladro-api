import express, { Express } from 'express';
import helloRoutes from './routes/helloRoutes';
import todoRoutes from './routes/todoRoutes';

const app: Express = express();

app.use(express.json());
app.use('/hello', helloRoutes);
app.use('/todos', todoRoutes);

export default app;
