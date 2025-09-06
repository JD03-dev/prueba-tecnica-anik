import { useState } from "react"
import ProductList from "./components/ProductList"
import ProductForm from "./components/ProductForm"

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Shampoo", price: 1200 },
    { id: 2, name: "Base", price: 25 },
    { id: 3, name: "Agua", price: 80 },
  ])

  const addProduct = (newProduct) => {
    setProducts([...products, { id: products.length + 1, ...newProduct }])
  }

  return (
    <div className="container">
      <h1>Product Quick View</h1>

      {/* Sección 1: Agregar producto */}
      <div className="section">
        <h2>Agregar Producto</h2>
        <ProductForm addProduct={addProduct} />
      </div>

      {/* Sección 2: Lista de productos */}
      <div className="section">
        <h2>Lista de Productos</h2>

        <ProductList
          products={products}
        />
      </div>
    </div>
  )
}

export default App

