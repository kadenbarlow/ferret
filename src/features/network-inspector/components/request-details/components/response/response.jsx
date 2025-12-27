import HighlightedText from "#library/components/highlighted-text/highlighted-text"
import styles from "./response.module.css"

export default function Response(props) {
  const { match, request } = props

  return (
    <pre className={styles.response}>
      <HighlightedText
        content={request.responseBody}
        enabled={match?.key === "responseBody"}
        end={match?.end}
        start={match?.start}
      />
    </pre>
  )
}
