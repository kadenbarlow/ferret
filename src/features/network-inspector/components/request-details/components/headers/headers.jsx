import styles from "./headers.module.css"

export default function Headers(props) {
  const { request } = props

  return (
    <div>
      <div className={styles.subtitle}>Request Headers</div>
      {request.requestHeaders && (
        <div>
          {request.requestHeaders.map(({ name, value }, index) => (
            <div
              key={index}
              className={styles.header}
            >
              <span className={styles.headerName}>{name}</span>: {value}
            </div>
          ))}
        </div>
      )}
      <div className={styles.subtitle}>Response Headers</div>
      {request.responseHeaders && (
        <div>
          {request.responseHeaders.map(({ name, value }, index) => (
            <div
              key={index}
              className={styles.header}
            >
              <span className={styles.headerName}>{name}</span>: {value}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
