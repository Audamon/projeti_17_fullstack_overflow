import express from 'express';
import cors from 'cors';
import * as createQuestionController from './Controllers/createQuestion';
import * as getQuestionByIdController from './Controllers/getQuestionById';
import * as createUserController from './Controllers/createUser';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/questions', createQuestionController.createQuestion);
app.get('/questions/:id', getQuestionByIdController.getQuestionById);

app.post('/users', createUserController.createUser);

export default app;
