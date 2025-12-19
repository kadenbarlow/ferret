import styles from "./checkbox.module.css"

export default function Checkbox(props) {
  const { label, name, onChange, value } = props
  const id = `checkbox-${name}`

  return (
    <div className={styles.container}>
      <input
        id={id}
        className={styles.input}
        defaultChecked={value}
        name={name}
        onChange={(e) => onChange(e.target.checked)}
        type="checkbox"
      />
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
    </div>
  )
}
