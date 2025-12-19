import "./request-details.css"

export default function RequestDetails(props) {
  const { request } = props

  return <div>{JSON.stringify(request, null, 2)}</div>
}
