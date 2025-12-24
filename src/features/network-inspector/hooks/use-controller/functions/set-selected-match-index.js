export default function setSelectedMatchIndex(state, index) {
  const { filteredRequests, matches } = state

  if (index < 0) throw new Error("Invalid index")
  else if (index >= matches.length) throw new Error("Invalid index")

  return {
    ...state,
    selectedMatchIndex: index,
    selectedRequest: filteredRequests.find((request) => request.id === matches[index].id) || null,
  }
}
