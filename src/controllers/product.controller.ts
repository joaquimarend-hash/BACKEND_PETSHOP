import type { Request, Response } from "express";
import { ProductService } from "../services/product.service.js";

const productService = new ProductService()


export class ProductController {
    async getAll(req: Request, res: Response) {
        try {
            const produtos = await productService.getAll()
            res.json(produtos)
        } catch (err) {
            res.status(500).json({ error: 'Erro ao buscar produto', err });
            
        }
    }

    async create(req: Request, res: Response) {
        try {
            const {label, price, description, image, animal, categoria} = req.body;
            const newProduct = await productService.create({label, price, description, image, categoria, animal});
            return res.status(201).json(newProduct);
        } catch (err:any) {
            res.status(500).json({ error: err.message });
            return console.log(err)
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const {label, price, description, image, animal, categoria} = req.body
            const product = await productService.update(label, price, description, image, id, categoria, animal)
            res.json(product)
        } catch (err) {
            res.status(500).json({ error: 'Erro ao buscar produto' });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const product = await productService.delete(id)
            res.json(product)
        } catch (err) {
            res.status(500).json({ error: 'Erro ao buscar produto' });
        }
    }
}