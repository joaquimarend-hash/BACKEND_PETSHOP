import { Router } from "express"
import { CategoriesController } from "../controllers/categories.controller.js"
const categoriesRouter = Router()
const categoriesController = new CategoriesController
//getAll
categoriesRouter.get("/", categoriesController.getAll)

export default categoriesRouter