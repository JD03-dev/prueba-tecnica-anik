let products = require("../data")

// Obtener lista de productos
const getProducts = (req, res) => {
  res.json(products)
}

module.exports = { getProducts }
