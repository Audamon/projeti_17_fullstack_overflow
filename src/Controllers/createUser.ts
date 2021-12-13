import { Request, Response } from 'express';
import { Users } from '../Interfaces/usersInterface';
import * as createUserService from '../Services/createUser';

async function createUser(req: Request, res: Response){
    const { name, clas}:Users = req.body;
    try {
        const token = await createUserService.createUser(name, clas);
        if(!token){
            return res.sendStatus(403);
        }
        return res.status(201).send(token);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500)
    }
}
export { createUser };