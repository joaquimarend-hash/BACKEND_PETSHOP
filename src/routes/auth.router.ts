import { Router } from "express";
import { AuthController } from "../controllers/auth.controller.js";

const authRouter = Router()
const authControler = new AuthController()

authRouter.post("/login", authControler.login)

export default authRouter