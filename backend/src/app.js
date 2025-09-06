const express = require("express")
const productRoutes = require("./routes/products.routes")
const cors = require("cors");

const app = express()
const PORT = 3000

// Middleware para JSON y habilitacion de CORS
app.use(cors())
app.use(express.json())

// Rutas
app.use("/", productRoutes)

// Middleware de error genérico
app.use((err, req, res, next) => {
  console.error("Error:", err.stack)
  res.status(500).json({ error: "Error interno del servidor" })
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
