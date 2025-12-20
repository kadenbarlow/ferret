export default function clearRequests(state) {
  return { ...state, filteredRequests: [], requests: [], selectedRequest: null }
}
