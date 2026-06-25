import { Router } from "express"
import { authMiddleware } from "../middleware/auth.middleware.js"
import { OrderController } from "../controllers/orders.controller.js"
import { adminMiddleware } from "../middleware/admin.middleware.js"

const ordersRouter = Router()
const ordersController = new OrderController()


ordersRouter.use(authMiddleware)
//getAll
ordersRouter.get("/", ordersController.getAll)
//create
ordersRouter.post("/", ordersController.create)

ordersRouter.use(adminMiddleware)
//create
ordersRouter.put("/", ordersController.update)
//getAll
ordersRouter.delete("/", ordersController.delete)

export default ordersRouter