import { useState, useMemo, useEffect } from "react"
import ProductList from "./components/ProductList"
import SearchBar from "./components/SearchBar"
import SortSelect from "./components/SortSelect"
import ProductForm from "./components/ProductForm"

function App() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("asc")

  // Cargar productos desde backend
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error cargando productos:", err));
  }, []);

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
