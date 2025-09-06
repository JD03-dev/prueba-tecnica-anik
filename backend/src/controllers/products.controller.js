let products = require("../data")

// Obtener lista de productos
const getProducts = (req, res) => {
  res.json(products)
}

const createProduct = (req, res) => {
  try {
    const { name, price } = req.body

    // Validaciones
    if (!name || typeof name !== "string") {
      return res.status(400).json({ error: "El nombre es obligatorio y debe ser texto" })
    }

    if (isNaN(price) || Number(price) <= 0) {
      return res.status(400).json({ error: "El precio debe ser un número mayor a 0" })
    }

    const newProduct = {
      id: products.length + 1,
      name,
      price: Number(price),
    }

    products.push(newProduct)
    res.status(201).json(newProduct)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Error en el servidor" })
  }
}

module.exports = { getProducts, createProduct }
