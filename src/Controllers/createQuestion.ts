import { Request, Response } from 'express';
import * as createQuestionService from '../Services/createQuestion';
async function createQuestion( req: Request, res: Response) {
    const question: string = req.body.question;
    const student: string = req.body.student;
    const clas: string = req.body.class;
    const tags:string = req.body.tags as string;
    console.log({question, student, tags, clas});

    try {
        const quest = await createQuestionService.createQuestion(question, student, clas, tags);
        return res.status(201).send(quest);
    } catch (error) {
        return res.sendStatus(500);
    }
}
export { createQuestion };
