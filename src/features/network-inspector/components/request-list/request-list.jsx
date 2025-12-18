import "./request-list.css"

export default function RequestList(props) {
  const { requests } = props

  return (
    <table className="request-list">
      <thead className="request">
        <th className="request-list-header">Method</th>
        <th className="request-list-header">Status</th>
        <th className="request-list-header">Size</th>
        <th className="request-list-header">Time</th>
        <th className="request-list-header">URL</th>
      </thead>
      <tbody className="requests">
        {requests.map((request, index) => (
          <tr className={`request ${index % 2 === 0 ? "request-even" : "request-odd"}`}>
            <td className="request-list-column">{request.method}</td>
            <td className="request-list-column">{request.status}</td>
            <td className="request-list-column">{request.size}</td>
            <td className="request-list-column">{request.time}</td>
            <td className="request-list-column">{request.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
