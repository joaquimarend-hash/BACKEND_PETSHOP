import { Router } from "express"
import { UserController } from "../controllers/user.controller.js"
import { authMiddleware } from "../middleware/auth.middleware.js"

const userRouter = Router()
const userController = new UserController()

//create
userRouter.post("/", userController.create)



// TODAS as rotas abaixo deate ponto ///
userRouter.use(authMiddleware)

//getAll
userRouter.get("/", userController.getAll)
//getById
userRouter.get("/:id", userController.getById)


export default userRouter