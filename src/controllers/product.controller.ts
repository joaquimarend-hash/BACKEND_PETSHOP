import type { Request, Response } from "express";
import { ProductService } from "../services/product.service.js";

const productService = new ProductService()


export class ProductController {
    async getAll(req: Request, res: Response) {
        try {
            const posts = await productService.getAll()
            res.json(posts)
        } catch (err) {
            res.status(500).json({ error: 'Erro ao buscar produto' });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const {label, price, description, image, animal, categoria} = req.body;
            const newPost = await productService.create({label, price, description, image, categoria, animal});
            return res.status(201).json(newPost);
        } catch (err:any) {
            res.status(500).json({ error: err.message });
            return console.log(err)
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const {label, price, description, image, animal, categoria} = req.body
            const post = await productService.update(label, price, description, image, id, categoria, animal)
            res.json(post)
        } catch (err) {
            res.status(500).json({ error: 'Erro ao buscar produto' });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const post = await productService.delete(id)
            res.json(post)
        } catch (err) {
            res.status(500).json({ error: 'Erro ao buscar produto' });
        }
    }
}