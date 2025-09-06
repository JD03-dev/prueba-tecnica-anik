import { useState } from "react"

function ProductForm({ addProduct }) {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name.trim()) {
      alert("El nombre es obligatorio")
      return
    }
    if (isNaN(price) || Number(price) <= 0) {
      alert("El precio debe ser un número mayor a 0")
      return
    }

    addProduct({ name, price: Number(price) })
    setName("")
    setPrice("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del producto"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  )
}

export default ProductForm
