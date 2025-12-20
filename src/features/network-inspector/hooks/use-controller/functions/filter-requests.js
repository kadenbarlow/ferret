import Fuse from "fuse.js"

export default function filterRequests(state, search) {
  if (!search) return { ...state, filteredRequests: [] }

  const fuse = new Fuse(state.requests, {
    ignoreLocation: true,
    includeMatches: true,
    keys: ["responseBody"],
    shouldSort: true,
  })
  const filteredRequests = fuse.search(search)

  return { ...state, filteredRequests: filteredRequests.map(({ item }) => item) }
}
