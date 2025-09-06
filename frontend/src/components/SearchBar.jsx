function SearchBar({ search, setSearch }) {
    return (
      <input
        type="text"
        placeholder="Buscar producto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    )
  }
  
  export default SearchBar
  