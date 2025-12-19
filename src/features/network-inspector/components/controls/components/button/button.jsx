import styles from "./button.module.css"

export default function Button(props) {
  const { icon: Icon, onClick } = props

  return (
    <div className={styles.button} onClick={onClick}>
      <Icon height={20} width={20} />
    </div>
  )
}
