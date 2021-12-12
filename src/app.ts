import express from 'express';
import cors from 'cors';
import * as createQuestionController from './Controllers/createQuestion';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/questions', createQuestionController.createQuestion);

export default app;
