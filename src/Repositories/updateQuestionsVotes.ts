import connection from '../database';
import { Question } from '../Interfaces/questionInterface';

async function updateQuestionsVotes(idQuestion: number, operator: string ): Promise<Question> {
  const question = await connection.query(
    `UPDATE questions SET votes = votes ${operator} 1 WHERE id = $1 RETURNING *;`,
    [idQuestion],
  );
  return question.rows[0];
}
export { updateQuestionsVotes };