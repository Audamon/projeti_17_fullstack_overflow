import { Question } from '../Interfaces/questionInterface';
import * as createQuestionRepository from '../Repositories/createQuestion';

async function createQuestion(question: string, student:string, clas: string, tags: string): Promise<Question[]> {
    const quest = await createQuestionRepository.createQuestion(question, student, clas, tags);
    return quest;
}

export { createQuestion };
