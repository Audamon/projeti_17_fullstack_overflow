import { Question } from '../Interfaces/questionInterface';
import * as getNotAnsweredQuestionsRepository from '../Repositories/getNotAnsweredQuestions';

async function getNotAnsweredQuestions():Promise<Question[]>{
    const questions = await getNotAnsweredQuestionsRepository.getNotAnsweredQuestions();
    return questions;
}

export { getNotAnsweredQuestions };