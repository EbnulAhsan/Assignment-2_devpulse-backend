import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import authRoutes from './auth/auth.route';
import issuesRoutes from './modules/issues/issues.route';
import requestLogger from './middleware/logger';
import gloalErrorHandelar from './middleware/globalErrorHandelar';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.get('/', (req: Request, res: Response) => {
    res.send('DevPulse API is running');
});

app.use('/api/auth', authRoutes);
app.use('/api/issues', issuesRoutes);

app.use(gloalErrorHandelar);

app.use((req: Request, res: Response) => {
    res.status(404).json({
        success: false,
        message: 'API route not found',
    });
});

export default app;