import connection from '../database';
import { Question } from '../Interfaces/questionInterface';

async function getNotAnsweredQuestions():Promise<Question[]>{
    const questions = await connection.query('SELECT id, question, student, class, "submitAt", tags votes FROM questions WHERE answered = false');
   return questions.rows;
}
export { getNotAnsweredQuestions };
