import { Router } from "express"
import { AnimalsController } from "../controllers/animals.controller.js"
const animalsRouter = Router()
const animalsController = new AnimalsController
//getAll
animalsRouter.get("/", animalsController.getAll)

export default animalsRouter