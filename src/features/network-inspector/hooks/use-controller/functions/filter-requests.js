import occurrencesOf from "#library/strings/occurrences-of"

function findMatches(content, filter, { id, key, path, type }) {
  return occurrencesOf(content, filter).map(([start, end]) => ({ end, id, key, path, start, type }))
}

export default function filterRequests(state) {
  const { filter } = state
  if (!filter) return { ...state, filteredRequests: [], matches: [], selectedMatch: null, selectedMatchIndex: 0 }

  const { filteredRequests, matches } = state.requests.reduce(
    (acc, request) => {
      const { id } = request
      const textKeys = ["responseBody", "postData", "method", "url"]
      const matches = textKeys.flatMap((key) => findMatches(request[key], filter, { id, key }))

      const headerKeys = ["requestHeaders", "responseHeaders"]
      const headerMatches = headerKeys.flatMap((key) => {
        const headers = request[key]
        return [
          ...headers.flatMap((h) => findMatches(h.name, filter, { id, key, path: [key, h.name], type: "name" })),
          ...headers.flatMap((h) => findMatches(h.value, filter, { id, key, path: [key, h.name], type: "value" })),
        ]
      })

      if (matches.length || headerMatches.length) {
        acc.filteredRequests.push(request)
        acc.matches.push(...matches, ...headerMatches)
      }

      return acc
    },
    { filteredRequests: [], matches: [] },
  )

  return {
    ...state,
    filteredRequests,
    matches,
    selectedMatch: matches[0],
    selectedMatchIndex: 0,
    selectedRequest: filteredRequests[0],
  }
}
