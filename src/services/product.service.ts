import { prisma } from "../lib/prisma.js"

export class ProductService {
    async getAll() {
        return prisma.products.findMany({
            orderBy: { id: "asc" }
        })
    }

    async create(data: { label: string, price: number, description: string, image: string, categoria: string, animal: string }) {
        return await prisma.products.create({
            data: {
                label: data.label,
                price: data.price,
                description: data.description,
                image: data.image,
                categoria: data.categoria,
                animal: data.animal
            }
        });
    }

    async update(label: string, price: number, description: string, image: string, id: number, categoria: string, animal: string) {
        return prisma.products.update({
            where: { id },
            data: { label, price, description, image, categoria, animal }
        })
    }

    async delete(id: number) {
        return prisma.products.delete({
            where: { id }
        })
    }
}