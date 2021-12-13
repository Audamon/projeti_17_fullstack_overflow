import express from 'express';
import cors from 'cors';
import * as createQuestionController from './Controllers/createQuestion';
import * as getQuestionByIdController from './Controllers/getQuestionById';
import * as createUserController from './Controllers/createUser';
import * as getNotAnsweredQuestionsController from './Controllers/getNotAnsweredQuestions';
import * as answerQuestionController from './Controllers/answerQuestion';
import * as upVoteQuestionController from './Controllers/upVoteQuestion';
import * as downVoteQuestionController from './Controllers/downVoteQuestion';
import * as getRankingController from './Controllers/getRanking';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/questions', createQuestionController.createQuestion);
app.get('/questions/:id', getQuestionByIdController.getQuestionById);
app.get('/questions', getNotAnsweredQuestionsController.getNotAnsweredQuestions);
app.post('/questions/:id', answerQuestionController.answerQuestion);
app.put('/questions/:id/upvote', upVoteQuestionController.upVoteQuestion);
app.put('/questions/:id/downvote', downVoteQuestionController.downVoteQuestion);
app.post('/users', createUserController.createUser);
app.get('/ranking', getRankingController.getRanking);


export default app;
