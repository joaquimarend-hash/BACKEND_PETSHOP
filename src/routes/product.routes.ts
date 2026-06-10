import { Router } from "express"
import { authMiddleware } from "../middleware/auth.middleware.js"
import { ProductController } from "../controllers/product.controller.js"
import { adminMiddleware } from "../middleware/admin.middleware.js"

const productRouter = Router()
const productController = new ProductController()

productRouter.get("/", productController.getAll)

// TODAS as rotas abaixo deate ponto ///
productRouter.use(authMiddleware, adminMiddleware)
//create
productRouter.post("/", productController.create)
//Update
productRouter.put("/:id", productController.update)
//delete
productRouter.delete("/:id", productController.delete)


export default productRouter