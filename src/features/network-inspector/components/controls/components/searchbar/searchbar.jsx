import "./searchbar.css"

export default function Searchbar(props) {
  const { placeholder } = props

  return (
    <div>
      <input className="searchbar-input" type="text" placeholder={placeholder} />
    </div>
  )
}
