import parseJson from "#library/json/parse-json"

export default function Response(props) {
  const { request } = props
  const response = parseJson(request.responseBody)

  if (!response) return <div>Response body could not be parsed as JSON</div>
  else return <pre>{JSON.stringify(response, null, 2)}</pre>
}
