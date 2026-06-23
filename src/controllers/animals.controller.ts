import type { Request, Response } from "express";
import { AnimalsService } from "../services/animals.service.js";

const animalsService = new AnimalsService()


export class AnimalsController {
    async getAll(req: Request, res: Response) {
        const animals = await animalsService.getAll()
        res.json(animals)
    }
}