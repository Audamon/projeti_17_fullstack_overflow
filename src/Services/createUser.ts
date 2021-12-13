import { v4 as uuid } from 'uuid';
import { Token } from "../Interfaces/usersInterface";
import * as  createUserRepository from '../Repositories/createUser';

async function createUser(name: string, clas: string):Promise<Token>{
  const user = await createUserRepository.createUser(name, clas);
  if(!user){
    return null;
  }
  const token = uuid();
  return token as unknown as Token;
}
export { createUser };