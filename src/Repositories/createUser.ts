import connection from '../database';
import { Users } from '../Interfaces/usersInterface';

async function createUser(name:string, clas:string): Promise<Users> {
    const user = await connection.query('INSERT INTO users(name, class, answers) VALUES($1, $2, 0) RETURNING id;', [name, clas])
    return user.rows[0];
}
export { createUser };
