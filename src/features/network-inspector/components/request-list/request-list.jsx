import classnames from "#library/css/classnames"
import styles from "./request-list.module.css"

export default function RequestList(props) {
  const { collapsed, requests, selectedRequest, setSelectedRequest } = props

  if (!requests.length) return <></>

  return (
    <table className={styles.table}>
      <thead className={styles.row}>
        <tr>
          <th className={styles.header}>URL</th>
          {!collapsed && <th className={styles.header}>Status</th>}
          {!collapsed && <th className={styles.header}>Method</th>}
          {!collapsed && <th className={styles.header}>Size</th>}
          {!collapsed && <th className={styles.header}>Time</th>}
        </tr>
      </thead>
      <tbody>
        {requests.map((request, index) => (
          <tr
            key={index}
            className={classnames({ [styles.darken]: index % 2 === 0, [styles.row]: true })}
            onClick={() => setSelectedRequest(request)}
          >
            <td
              className={classnames({
                [styles.collapsed]: collapsed,
                [styles.column]: true,
                [styles.expanded]: !collapsed,
                [styles.selected]: request.id === selectedRequest?.id,
              })}
            >
              {request.url}
            </td>
            {!collapsed && <td className={styles.column}>{request.status}</td>}
            {!collapsed && <td className={styles.column}>{request.method}</td>}
            {!collapsed && <td className={styles.column}>{(request.size / 1024).toFixed(2)} kb</td>}
            {!collapsed && <td className={styles.column}>{request.time.toFixed(2)} ms</td>}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
