import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { UserService } from "./user.service.js"

const userService = new UserService()

export class AuthServices {
    async authenticate(jwtSecret: string, email: string, password: string) {
        const user = await userService.getByEmail(email)

        if (!user) {
            const err = new Error("credenciais invalidas")
            err.status = 401
            throw err
        }

        const validPassword = await bcrypt.compare(password, user.password)

        if (!validPassword) {
            const err = new Error("credenciais invalidas")
            err.status = 401
            throw err
        }

        const token = jwt.sign({ sub: user.id, email: user.email }, jwtSecret, {
            expiresIn: "1h",
        })

        return {
            token,
            user: { id: user.id, name: user.name, email: user.email }
        }
    }
}