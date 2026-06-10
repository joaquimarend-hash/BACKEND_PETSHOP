import type { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"
import { UserService } from "../services/user.service.js"

const userServices = new UserService()

export const authMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const token = req.header("Authorization")?.replace("Bearer ", "")

    if (!token) return res.status(403).send("No token provided.")

    try {
        const secret = process.env.JWT_SECRET;
        if (!secret) {throw new Error("A variável de ambiente JWT_SECRET não foi definida!")}
        const decoded = jwt.verify(token, secret);

        if (!decoded || !decoded.sub) {return res.status(401).send("Invalid token payload.")}

        req.user = Number(decoded.sub);

        const userInfo = await userServices.getById(req.user)
        req.userRole = String(userInfo?.role)

        console.log(req.user)
        next()
    } catch (err) {
        console.log(err)
        res.status(401).send("Invalid token.")
    }
}

