import { prisma } from "../lib/prisma.js"
import bcrypt from "bcrypt"
import type { Role } from "../../generated/prisma/enums.js"


export class UserService {
    async getAll() {
        return prisma.users.findMany({
            orderBy: { id: "asc" }
        })
    }

    async getById(id: number) {
        return prisma.users.findUnique({
            where: { id }
        })
    }

    async getByEmail(email: string) {
        return prisma.users.findUnique({
            where: { email }
        })
    }

    async create(name: string, email: string, password: string, role: Role) {
        const passwordHash = await bcrypt.hash(password, 10)

        return await prisma.users.create({
            data: { name, email, password: passwordHash, role }
        })
    }
}