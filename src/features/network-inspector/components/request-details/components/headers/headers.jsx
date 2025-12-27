import HeaderList from "./components/header-list/header-list"
import styles from "./headers.module.css"

export default function Headers(props) {
  const { match, request } = props

  return (
    <div>
      <div className={styles.subtitle}>Request Headers</div>
      <HeaderList
        headers={request.requestHeaders}
        match={match}
        type="requestHeaders"
      />

      <div className={styles.subtitle}>Response Headers</div>
      <HeaderList
        headers={request.responseHeaders}
        match={match}
        type="responseHeaders"
      />
    </div>
  )
}
