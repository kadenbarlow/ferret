import parseJson from "#library/json/parse-json"
import styles from "./request.module.css"

export default function Request(props) {
  const { request } = props
  const jsonRequestBody = parseJson(request.postData)

  return (
    <div className={styles.request}>
      <div>
        {request.method}: {request.url}
      </div>
      <pre className={styles.body}>{jsonRequestBody ? JSON.stringify(jsonRequestBody, null, 2) : request.postData}</pre>
    </div>
  )
}
