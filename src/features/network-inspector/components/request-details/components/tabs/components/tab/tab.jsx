import classnames from "#library/css/classnames"
import styles from "./tab.module.css"

export default function Tab(props) {
  const { active, label, onClick } = props

  return (
    <div className={classnames({ [styles.active]: active, [styles.tab]: true })} onClick={onClick}>
      {label}
    </div>
  )
}
