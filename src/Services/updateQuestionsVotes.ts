import * as updateQuestionsVotesRepository from '../Repositories/updateQuestionsVotes';

async  function updateQuestionsVotes(idQuestion: number, operator: string){
    const question = await updateQuestionsVotesRepository.updateQuestionsVotes(idQuestion, operator);
    if(!question.question){
        return null;
    }
    return question;
}
export { updateQuestionsVotes }