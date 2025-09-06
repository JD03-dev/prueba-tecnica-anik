const express = require("express")
const { getProducts, createProduct  } = require("../controllers/products.controller")

const router = express.Router()

// Endpoints
router.get("/products", getProducts)
router.post("/products", createProduct)

module.exports = router
