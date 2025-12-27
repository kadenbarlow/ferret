function parseJson(jsonString) {
  try {
    return JSON.parse(jsonString)
  } catch {
    return null
  }
}

chrome.devtools.panels.create("Ferret", null, "index.html", (panel) => {
  panel.onShown.addListener((window) => {
    chrome.devtools.network.onRequestFinished.addListener((request) => {
      const isFetch = request._resourceType === "fetch" || request._resourceType === "xhr"
      const contentType = request.response.content.mimeType
      const isValidContent = ["json", "xml", "graphql"].some((type) => contentType.includes(type))

      if (isFetch && isValidContent) {
        request.getContent((body) => {
          const postData = request.request.postData?.text || null
          const jsonPostData = parseJson(postData)
          const jsonBody = parseJson(body)

          window.postMessage({
            payload: {
              contentType,
              id: crypto.randomUUID(),
              method: request.request.method,
              postData: jsonPostData ? JSON.stringify(jsonPostData, null, 2) : postData,
              requestHeaders: request.request.headers || {},
              responseBody: jsonBody ? JSON.stringify(jsonBody, null, 2) : body,
              responseHeaders: request.response.headers || {},
              size: request.response._transferSize,
              status: request.response.status,
              time: request.time,
              url: request.request.url,
            },
            type: "REQUEST",
          })
        })
      }
    })

    chrome.devtools.network.onNavigated.addListener((url) => {
      window.postMessage({ payload: { url }, type: "NAVIGATION" })
    })
  })
})
