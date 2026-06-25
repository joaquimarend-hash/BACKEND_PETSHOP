import "dotenv/config"
import express from "express"
import userRouter from "./routes/user.route.js"
import productRouter from "./routes/product.routes.js"
import authRouter from "./routes/auth.router.js"
import cors from 'cors'
import categoriesRouter from "./routes/categories.route.js"
import animalsRouter from "./routes/animals.router.js"
import ordersRouter from "./routes/orders.router.js"

const app = express()

app.use(cors({
  origin: 'http://localhost:3000', // Libera especificamente o seu frontend Next.js
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json())

const port = process.env.PORT || 6767

//ROTAS
app.get("/health", (req, res) => {
    res.json({ mensagem: "ok" })
})

app.use("/user", userRouter)
app.use("/auth", authRouter)
app.use("/products", productRouter)
app.use("/categories", categoriesRouter)
app.use("/animals", animalsRouter)
app.use("/orders", ordersRouter)


app.listen(port, () => {
    console.log("API rodando em http://localhost:" + port)
})