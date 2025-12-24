import classnames from "#library/css/classnames"
import styles from "./button.module.css"

export default function Button(props) {
  const { className, disabled, icon: Icon, onClick } = props

  return (
    <div
      className={classnames({
        [className]: true,
        [styles.button]: true,
        [styles.disabled]: disabled,
      })}
      onClick={onClick}
    >
      <Icon
        height={20}
        width={20}
      />
    </div>
  )
}
