import { Request, Response } from 'express';
import { Question } from '../Interfaces/questionInterface';
import * as getQuestionByIdService from '../Services/getQuestionsById';

async function getQuestionById(req: Request, res: Response) {
    const id = Number(req.params.id);
  try {
      const question = await getQuestionByIdService.getQuestionById(id);
      return res.status(200).send(question);
  } catch (error) {
      return res.sendStatus(500);
  }
}
export {getQuestionById }