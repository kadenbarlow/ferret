import Fuse from "fuse.js"

export default function filterRequests(state, search) {
  if (!search) return { ...state, filteredRequests: [], matches: [], selectedMatchIndex: 0 }

  const fuse = new Fuse(state.requests, {
    getFn: (item, path) => {
      const [key] = path
      if (key === "requestHeaders" || key === "responseHeaders") {
        return item[key].map(({ name, value }) => `${name}: ${value}`).join("\n")
      }

      return item[key]
    },
    ignoreLocation: true,
    includeMatches: true,
    keys: ["responseBody", "postData", "method", "requestHeaders", "responseHeaders", "url"],
    shouldSort: true,
    threshold: 0.1,
  })
  const searchResults = fuse.search(search)
  const filteredRequests = searchResults.map(({ item }) => item)
  const matches = searchResults.flatMap(({ item, matches }) => matches.map((match) => ({ id: item.id, ...match })))

  return {
    ...state,
    filteredRequests,
    matches,
    selectedMatch: matches[0],
    selectedMatchIndex: 0,
    selectedRequest: filteredRequests[0],
  }
}
