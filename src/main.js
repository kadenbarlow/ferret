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
      const contentType = request.response.content.mimeType
      if (contentType?.includes("application/json")) {
        request.getContent((body) => {
          const postData = request.request.postData?.text || null
          const jsonPostData = parseJson(postData)
          const jsonBody = parseJson(body)

          window.postMessage({
            payload: {
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
