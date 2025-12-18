import "./checkbox.css"

export default function Checkbox(props) {
  const { label, name, onChange, value } = props
  const id = `checkbox-${name}`

  return (
    <div className="checkbox-container">
      <input
        id={id}
        className="checkbox-input"
        defaultChecked={value}
        name={name}
        onChange={(e) => onChange(e.target.checked)}
        type="checkbox"
      />
      <label className="checkbox-label" for={id}>
        {label}
      </label>
    </div>
  )
}
