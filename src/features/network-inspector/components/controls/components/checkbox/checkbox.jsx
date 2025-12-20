import styles from "./checkbox.module.css"

export default function Checkbox(props) {
  const { label, name, onChange, value } = props
  const id = `checkbox-${name}`

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        defaultChecked={value}
        id={id}
        name={name}
        type="checkbox"
        onChange={(e) => onChange(e.target.checked)}
      />
      <label
        className={styles.label}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  )
}
