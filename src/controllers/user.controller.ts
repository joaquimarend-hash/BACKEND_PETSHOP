import type { Request, Response } from "express";
import { UserService } from "../services/user.service.js";

const userServices = new UserService()


export class UserController {
    async getAll(req: Request, res: Response) {
        try {
            const users = await userServices.getAll()
            res.json(users)
        } catch (err) {
            res.status(500).json({ error: 'Erro ao buscar usuários' });
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const user = await userServices.getById(id)
            res.json(user)
        } catch (err) {
            res.status(500).json({ error: 'Erro ao buscar usuários' });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const { name, email, password, role } = req.body
            const user = await userServices.create(name, email, password, role)
            res.json(user)
        } catch (err) {
            console.log(err)
            res.status(400).json({ error: 'Erro ao cadastrar usuários' });
        }

    }


}