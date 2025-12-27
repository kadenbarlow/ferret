import styles from "./highlighted-text.module.css"

export default function HighlightedText(props) {
  const { content, enabled, end, start } = props

  if (!enabled) return <span>{content}</span>

  return (
    <span>
      {content.slice(0, start)}
      <span className={styles.highlighted}>{content.slice(start, end + 1)}</span>
      {content.slice(end + 1)}
    </span>
  )
}
