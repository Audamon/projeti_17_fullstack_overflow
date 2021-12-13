import connection from '../database';
import { Users } from '../Interfaces/usersInterface';

async function getUser(token: string): Promise<Users>{
    const user = await connection.query('SELECT name FROM sessions JOIN users ON sessions."idUser" = users.id WHERE sessions.token = $1;', [token]);
    await connection.query('UPDATE users SET answers = answers + 1;')
    return user.rows[0];
}
export { getUser };