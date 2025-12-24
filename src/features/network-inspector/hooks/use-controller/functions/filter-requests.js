import Fuse from "fuse.js"

export default function filterRequests(state, search) {
  if (!search) return { ...state, filteredRequests: [] }

  const fuse = new Fuse(state.requests, {
    ignoreLocation: true,
    includeMatches: true,
    keys: ["responseBody", "status", "postData", "method", "requestHeaders", "responseHeaders", "url"],
    shouldSort: true,
    threshold: 0.1,
  })
  const searchResults = fuse.search(search)
  const filteredRequests = searchResults.map(({ item }) => item)

  return {
    ...state,
    filteredRequests,
    matches: searchResults.flatMap(({ item, matches }) => matches.map((match) => ({ id: item.id, ...match }))),
    selectedMatchIndex: 0,
    selectedRequest: filteredRequests[0],
  }
}
