import type { Request, Response } from "express";
import { AuthServices } from "../services/auth.service.js";

const jwtSecret = process.env.JWT_SECRET || "Default#$%Pass"
const authServices = new AuthServices()

export class AuthController{
    async login(req:Request,res:Response){
        try{
            const {email, password} = req.body
            const dados = await authServices.authenticate(jwtSecret, email, password)

            return res.status(200).json(dados)
        } catch(err){
            const status = err.status || 500
            return res.status(status).json({ error: err.mensage || "erro interno"})
        }
    }
}