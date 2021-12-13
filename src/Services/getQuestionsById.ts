import { Question  } from '../Interfaces/questionInterface';
import * as getQuestionByIdRepository from '../Repositories/getQuestionById';

async function getQuestionById(id: number): Promise<Question>{
    const question = await getQuestionByIdRepository.getQuestionById(id);
    if(!question.answered){
        delete  question.id;
        delete question.answeredAt;
        delete question.answeredBy;
        delete question.answer;
    }
    return question;
}
export { getQuestionById };