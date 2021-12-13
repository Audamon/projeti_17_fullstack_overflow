import connection from '../database';
import { Question } from '../Interfaces/questionInterface';

async function getQuestionById(id: number): Promise<Question> {
    const question = await connection.query('SELECT * FROM questions WHERE id = $1', [id]);
    return question.rows[0];
}
export { getQuestionById };
