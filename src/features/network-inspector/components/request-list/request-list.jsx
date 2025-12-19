import classnames from "#library/css/classnames"
import styles from "./request-list.module.css"

export default function RequestList(props) {
  const { collapsed, requests, setSelectedRequest } = props

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
            className={classnames({ [index % 2 !== 0]: styles.darken, [true]: styles.row })}
            onClick={() => setSelectedRequest(request)}
          >
            <td className={classnames({ [collapsed]: styles.collapsed, [true]: styles.column })}>{request.url}</td>
            {!collapsed && <td className={styles.column}>{request.status}</td>}
            {!collapsed && <td className={styles.column}>{request.method}</td>}
            {!collapsed && <td className={styles.column}>{request.size}</td>}
            {!collapsed && <td className={styles.column}>{request.time}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
