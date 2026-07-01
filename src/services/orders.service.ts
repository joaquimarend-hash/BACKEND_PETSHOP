import { prisma } from "../lib/prisma.js"
import type { Status } from "../../generated/prisma/enums.js"

export interface CartItem {
    id: number;
    label: string;
    price: number;
    image: string;
    quantity: number;
    categoria: string
    animal: string
}

export class OrdersService {
    async getAll() {
        return prisma.order.findMany({
            orderBy: { id: "asc" },
            include: {
                items: true,
            },
        })
    }

    async create(
        userId: number,
        customerEmail: string,
        items: CartItem[],
        total: number,
        isDelivery: boolean
    ) {
        return await prisma.order.create({
            data: {
                userId,
                customerEmail,
                total,
                isDelivery,
                items: {
                    createMany: {
                        data: items.map((item) => ({
                            productId: item.id,
                            label: item.label,
                            price: item.price,
                            image: item.image,
                            quantity: item.quantity,
                            categoria: item.categoria,
                            animal: item.animal,
                        })),
                    },
                },
            },
            include: {
                items: true,
            },
        });
    }

    async update(id: number, status: Status) {
        return await prisma.order.update({
            where: {id},
            data: {status}
        });
    }

    async delete(id: number) {
        return prisma.order.delete({
            where: { id }
        })
    }
}