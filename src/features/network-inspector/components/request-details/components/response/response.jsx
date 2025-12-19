import parseJson from "#library/json/parse-json"
import styles from "./response.module.css"

export default function Response(props) {
  const { request } = props
  const response = parseJson(request.responseBody)

  if (!response) return <div className={styles.response}>Response body could not be parsed as JSON</div>
  else return <pre className={styles.response}>{JSON.stringify(response, null, 2)}</pre>
}
