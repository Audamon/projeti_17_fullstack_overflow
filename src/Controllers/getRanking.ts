import { Request, Response } from 'express';
import * as getRankingService from '../Services/getRanking';

async function getRanking(req: Request, res: Response) {
  try {
      const users = await getRankingService.getRanking();
      return res.status(200).send(users);
  } catch (error) {
      console.log(error);
      return res.sendStatus(500);
  }
}
export { getRanking };
