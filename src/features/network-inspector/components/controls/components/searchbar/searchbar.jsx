import debounce from "#library/functions/debounce"
import "./searchbar.css"

export default function Searchbar(props) {
  const { filterRequests, placeholder } = props

  return (
    <div>
      <input
        className="searchbar-input"
        onChange={debounce((e) => filterRequests(e.target.value), 300)}
        placeholder={placeholder}
        type="text"
      />
    </div>
  )
}
