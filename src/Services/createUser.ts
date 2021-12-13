import { v4 as uuid } from 'uuid';
import { Token } from '../Interfaces/usersInterface';
import * as createUserRepository from '../Repositories/createUser';
import * as createTokenRepository from '../Repositories/createToken';

async function createUser(name: string, clas: string): Promise<Token> {
  const user = await createUserRepository.createUser(name, clas);
  if (!user.id) {
    return null;
  }
  const token = uuid();
  await createTokenRepository.createToken(user.id, token);
  return token as unknown as Token;
}
export { createUser };
