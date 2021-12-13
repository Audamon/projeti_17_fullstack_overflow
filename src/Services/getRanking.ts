import { Users } from '../Interfaces/usersInterface';
import * as getRankingRepository from '../Repositories/getRanking';

async function getRanking():Promise<Users[]>{
    const users = await getRankingRepository.getRanking();
    return users;
}
export { getRanking };
