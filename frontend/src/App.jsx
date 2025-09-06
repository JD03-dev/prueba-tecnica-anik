import { useState, useMemo } from "react"
import ProductList from "./components/ProductList"
import SearchBar from "./components/SearchBar"
import SortSelect from "./components/SortSelect"
import ProductForm from "./components/ProductForm"

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Shampoo", price: 1200 },
    { id: 2, name: "Base", price: 25 },
    { id: 3, name: "Agua", price: 80 },
  ])
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("asc")

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) =>
        sort === "asc" ? a.price - b.price : b.price - a.price
      )
  }, [products, search, sort])

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

        <div className="controls">
          <SearchBar search={search} setSearch={setSearch} />
          <SortSelect sort={sort} setSort={setSort} />
        </div>

        <ProductList
          products={filteredProducts}
        />
      </div>
    </div>
  )
}

export default App
