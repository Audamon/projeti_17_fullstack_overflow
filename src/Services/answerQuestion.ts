import * as answerQuestionRepository from '../Repositories/answerQuestion';
import * as getUserRepository from '../Repositories/getUser';

async function answerQuestion(id: number, token: string, answer: string){
    const answeredBy = await getUserRepository.getUser(token);
    await answerQuestionRepository.answerQuestion(id, answeredBy.name, answer);
}
export {answerQuestion };