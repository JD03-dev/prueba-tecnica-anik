function SortSelect({ sort, setSort }) {
    return (
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="asc">Precio Ascendente</option>
        <option value="desc">Precio Descendente</option>
      </select>
    )
  }
  
  export default SortSelect
  