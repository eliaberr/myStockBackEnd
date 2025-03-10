import { Request, Response } from 'express';
import UsersRepositories from '../repositories/usersRepositories';

export default new class ProductController {
    async index(req: Request, res: Response) {
            const result = await UsersRepositories.findAll()
            res.json(result)
    }
    async show(req: Request, res: Response) {
        const userEmail = req.params.userEmail
        const result = await UsersRepositories.findByEmail(userEmail)
        res.json(result)
    }
    async store(req: Request, res: Response) {
        const body = req.body
        const result = await UsersRepositories.create(body)
        res.json(result)
    }
}