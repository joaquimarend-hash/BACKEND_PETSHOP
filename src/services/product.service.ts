import { prisma } from "../lib/prisma.js"
// import bcrypt from "bcrypt"

export class ProductService {
    async getAll() {
        return prisma.products.findMany({
            orderBy: { id: "asc" }
        })
    }

    async create(data: {label:string, price:number, description:string,image:string}) {
        return await prisma.products.create({
            data: {
                label: data.label,
                price: data.price,
                description: data.description,
                image:data.image
            }
        });
    }

    async update(label:string, price:number, description:string,image:string, id:number) {
        return prisma.products.update({
            where: { id },
            data: { label, price, description, image, id }
        })
    }

    async delete(id: number) {
        return prisma.products.delete({
            where: { id }
        })
    }
}