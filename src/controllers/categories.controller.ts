import type { Request, Response } from "express";
import { CategoriesService } from "../services/categories.services.js";

const categoriesService = new CategoriesService()


export class CategoriesController {
    async getAll(req: Request, res: Response) {
        const categories = await categoriesService.getAll()
        res.json(categories)
    }
}