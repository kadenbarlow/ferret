import "./request-list.css"

export default function RequestList(props) {
  const { collapsed, requests, setSelectedRequest } = props

  if (!requests.length) return <></>

  return (
    <table className="request-list">
      <thead className="request">
        <th className="request-list-header">URL</th>
        {!collapsed && <th className="request-list-header">Status</th>}
        {!collapsed && <th className="request-list-header">Method</th>}
        {!collapsed && <th className="request-list-header">Size</th>}
        {!collapsed && <th className="request-list-header">Time</th>}
      </thead>
      <tbody className="requests">
        {requests.map((request, index) => (
          <tr
            className={`request ${index % 2 === 0 ? "request-even" : "request-odd"}`}
            onClick={() => setSelectedRequest(request)}
          >
            <td className={`request-list-column ${collapsed ? "request-list-column-collapsed" : ""}`}>{request.url}</td>
            {!collapsed && <td className="request-list-column">{request.status}</td>}
            {!collapsed && <td className="request-list-column">{request.method}</td>}
            {!collapsed && <td className="request-list-column">{request.size}</td>}
            {!collapsed && <td className="request-list-column">{request.time}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
