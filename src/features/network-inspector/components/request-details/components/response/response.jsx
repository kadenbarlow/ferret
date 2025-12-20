import parseJson from "#library/json/parse-json"
import styles from "./response.module.css"

export default function Response(props) {
  const { request } = props
  const jsonResponse = parseJson(request.responseBody)

  if (!jsonResponse) return <pre className={styles.response}>{request.responseBody}</pre>
  else return <pre className={styles.response}>{JSON.stringify(jsonResponse, null, 2)}</pre>
}
