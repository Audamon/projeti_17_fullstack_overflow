import { Request, Response } from 'express';
import * as updateQuestionsVotesService from '../Services/updateQuestionsVotes';

async function upVoteQuestion(req: Request, res: Response) {
    const idQuestion = Number(req.params.id);
    const operator: string = '+';
    try {
        const question = await updateQuestionsVotesService.updateQuestionsVotes(idQuestion, operator);
        if(!question){
          return res.sendStatus(400);
        }
        return res.status(200).send(question);
    } catch (error) {
        console.log(error);
      return res.sendStatus(500);
    }
  }
  
  export { upVoteQuestion };