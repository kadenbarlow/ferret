import classnames from "#library/css/classnames"
import styles from "./button.module.css"

export default function Button(props) {
  const { className, icon: Icon, onClick } = props

  return (
    <div
      className={classnames([styles.button, className])}
      onClick={onClick}
    >
      <Icon
        height={20}
        width={20}
      />
    </div>
  )
}
