export default function copyRequestAsFetch(request) {
  const headers = request.requestHeaders
    .filter(({ name }) => !name.startsWith(":") && name.toLowerCase() !== "content-length")
    .map(({ name, value }) => `    '${name}': '${value.replace(/'/g, "\\'")}'`)
    .join(",\n")

  const responseMethod = request.contentType.includes("json") ? "json" : "text"

  const fetchRequest = [
    `fetch('${request.url}', {`,
    `  method: '${request.method}',`,
    ...(headers ? [`  headers: {\n${headers}\n  },`] : []),
    ...(request.postData ? [`  body: ${JSON.stringify(request.postData)},`] : []),
    `})`,
    `  .then(response => response.${responseMethod}())`,
    `  .then(console.log)`,
  ].join("\n")

  const textarea = document.createElement("textarea")
  textarea.value = fetchRequest
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand("copy")
  document.body.removeChild(textarea)
}
