import { Request, Response } from 'express';
import { Question } from '../Interfaces/questionInterface';
import * as answerQuestionService from '../Services/answerQuestion';

async function answerQuestion(req: Request, res: Response) {
    const id = Number(req.params.id);
    const answer: Question = req.body; 
    const authorization = req.headers['authorization'] || "";
    const token = authorization.split("Bearer ")[1];
    try {
        await answerQuestionService.answerQuestion(id, token, answer.answer);
        return res.sendStatus(201);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}
export { answerQuestion };