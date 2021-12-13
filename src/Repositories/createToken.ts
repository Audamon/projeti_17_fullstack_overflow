import connection from '../database';

async function createToken(id: number, token: string) {
  await connection.query('INSERT INTO sessions("idUser", token) VALUES($1, $2);', [
    id,
    token,
  ]);
}
export { createToken };
