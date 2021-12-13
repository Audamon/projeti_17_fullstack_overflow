import connection from '../database';
import { Users } from '../Interfaces/usersInterface';

async function getRanking():Promise<Users[]> {
  const users = await connection.query('SELECT name, answers FROM users ORDER BY answers DESC LIMIT 10;');
  return users.rows;
}
export { getRanking };
