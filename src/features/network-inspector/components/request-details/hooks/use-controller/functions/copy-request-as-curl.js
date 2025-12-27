export default function copyRequestAsCurl(request) {
  const curlRequest = [
    "curl",
    ...(request.method !== "GET" ? [`-X ${request.method}`] : []),
    `'${request.url}'`,
    ...request.requestHeaders
      .filter(({ name }) => !name.startsWith(":") && name.toLowerCase() !== "content-length")
      .map(({ name, value }) => {
        const escapedValue = value.replace(/'/g, "'\\''")
        return `-H '${name}: ${escapedValue}'`
      }),
    ...(request.postData ? [`-d '${request.postData.replace(/'/g, "'\\''")}'`] : []),
  ].join(" \\\n  ")

  const textarea = document.createElement("textarea")
  textarea.value = curlRequest
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand("copy")
  document.body.removeChild(textarea)
}
