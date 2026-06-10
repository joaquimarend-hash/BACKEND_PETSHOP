import "dotenv/config"
import express from "express"
import userRouter from "./routes/user.route.js"
import productRouter from "./routes/product.routes.js"
import authRouter from "./routes/auth.router.js"

const app = express()
app.use(express.json())

const port = process.env.PORT || 3000

//ROTAS
app.get("/health", (req, res) => {
    res.json({ mensagem: "ok" })
})

app.use("/user", userRouter)
app.use("/auth", authRouter)
app.use("/products", productRouter)


app.listen(port, () => {
    console.log("API rodando em http://localhost:" + port)
})