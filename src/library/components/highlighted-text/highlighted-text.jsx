import { useEffect, useRef } from "react"
import styles from "./highlighted-text.module.css"

export default function HighlightedText({ content, enabled, end, start }) {
  const highlight = useRef(null)

  useEffect(() => {
    if (enabled) {
      highlight.current.scrollIntoView({
        behavior: "instant",
        block: "center",
      })
    }
  }, [enabled, start, end])

  return (
    <span>
      {content?.slice(0, enabled ? start : -1)}
      <span
        ref={highlight}
        className={styles.highlighted}
      >
        {enabled ? content?.slice(start, end + 1) : ""}
      </span>
      {enabled ? content?.slice(end + 1) : ""}
    </span>
  )
}
