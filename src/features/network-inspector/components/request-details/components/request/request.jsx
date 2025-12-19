import parseJson from "#library/json/parse-json"

export default function Request(props) {
  const { request } = props
  const jsonRequestBody = parseJson(request.postData)

  return (
    <div>
      <div>
        {request.method}: {request.url}
      </div>
      <pre>{jsonRequestBody ? JSON.stringify(jsonRequestBody, null, 2) : request.postData}</pre>
    </div>
  )
}
