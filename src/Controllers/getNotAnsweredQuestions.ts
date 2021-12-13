import { Request, Response } from 'express';
import * as getNotAnsweredQuestionsService from '../Services/getNotAnsweredQuestions';

async function getNotAnsweredQuestions(req: Request, res: Response) {
  try {
      const questions = await getNotAnsweredQuestionsService.getNotAnsweredQuestions();
      return res.status(200).send(questions);
  } catch (error) {
      console.log(error);
      return res.sendStatus(500);
  }
}
export { getNotAnsweredQuestions };
