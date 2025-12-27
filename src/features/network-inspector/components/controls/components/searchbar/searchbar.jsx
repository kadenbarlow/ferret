import "./searchbar.css"

export default function Searchbar(props) {
  const { filter, placeholder, setFilter } = props

  return (
    <div>
      <input
        className="searchbar-input"
        placeholder={placeholder}
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  )
}
