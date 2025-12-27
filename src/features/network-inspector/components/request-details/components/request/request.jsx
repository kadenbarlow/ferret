import HighlightedText from "#library/components/highlighted-text/highlighted-text"
import styles from "./request.module.css"

export default function Request(props) {
  const { match, request } = props

  return (
    <div className={styles.request}>
      <div>
        <HighlightedText
          content={request.url}
          enabled={match?.key === "method"}
          end={match?.end}
          start={match?.start}
        />
        :{" "}
        <HighlightedText
          content={request.url}
          enabled={match?.key === "url"}
          end={match?.end}
          start={match?.start}
        />
      </div>
      <pre className={styles.body}>
        <HighlightedText
          content={request.postData}
          enabled={match?.key === "postData"}
          end={match?.end}
          start={match?.start}
        />
      </pre>
    </div>
  )
}
