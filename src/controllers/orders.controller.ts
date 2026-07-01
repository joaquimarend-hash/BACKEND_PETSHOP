import type { Request, Response } from "express";
import { OrdersService } from "../services/orders.service.js";

const ordersServices = new OrdersService()


export class OrderController {
    async getAll(req: Request, res: Response) {
        try {
            const order = await ordersServices.getAll()
            res.json(order)
        } catch (err) {
            res.status(500).json({ error: 'Erro ao buscar order' });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const { userId, customerEmail, items, total, isDelivery } = req.body
            const order = await ordersServices.create(userId, customerEmail, items, total, isDelivery)
            res.json(order)
        } catch (err) {
            console.log(err)
            res.status(400).json({ error: 'Erro ao cadastrar order' });
        }

    }

    async update(req: Request, res: Response) {
        try {
            const { id, status } = req.body
            const order = await ordersServices.update(id, status)
            res.json(order)
        } catch (err) {
            console.log(err)
            res.status(400).json({ error: 'Erro ao update order' });
        }

    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.body
            const oreder = await ordersServices.delete(id)
            res.json(oreder)
        } catch (err) {
            res.status(500).json({ error: 'Erro ao delete oreder' });
        }
    }


}