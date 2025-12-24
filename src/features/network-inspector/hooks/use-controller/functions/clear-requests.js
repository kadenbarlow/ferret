export default function clearRequests(state) {
  return {
    ...state,
    filteredRequests: [],
    matches: [],
    requests: [],
    selectedMatch: null,
    selectedMatchIndex: 0,
    selectedRequest: null,
  }
}
