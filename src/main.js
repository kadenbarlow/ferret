chrome.devtools.panels.create("Ferret", null, "index.html", (panel) => {
  panel.onShown.addListener((window) => {
    chrome.devtools.network.onRequestFinished.addListener((request) => {
      const contentType = request.response.content.mimeType
      if (contentType?.includes("application/json")) {
        request.getContent((body) => {
          window.postMessage({
            payload: {
              body: body,
              method: request.request.method,
              size: request.request.bodySize,
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
