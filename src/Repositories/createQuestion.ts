import connection from '../database';
import { Question } from '../Interfaces/questionInterface';

async function createQuestion(question: string, student:string, clas: string, tags: string):Promise<Question[]> {
  const answered: boolean = false;
  const quest = await connection.query('INSERT INTO questions (student, class, tags, question, answered, "submitAt", votes) VALUES($1, $2, $3, $4, $5, now(), 0) RETURNING id',[student, clas, tags, question, answered]);
  return quest.rows;
}
export { createQuestion };