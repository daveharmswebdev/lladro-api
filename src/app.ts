import express, { Express } from 'express';
import helloRoutes from './routes/helloRoutes';
import todoRoutes from './routes/todoRoutes';
import doerRoutes from './routes/doerRoutes';

const app: Express = express();

app.use(express.json());
app.use('/hello', helloRoutes);
app.use('/todos', todoRoutes);
app.use('/doers', doerRoutes);

export default app;
