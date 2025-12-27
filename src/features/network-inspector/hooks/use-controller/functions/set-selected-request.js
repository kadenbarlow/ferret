export default function setSelectedRequest(state, request) {
  const { matches } = state

  return {
    ...state,
    ...(matches.length && {
      selectedMatch: matches.find((match) => match.id === request.id) || null,
      selectedMatchIndex: matches.findIndex((match) => match.id === request.id) || 0,
    }),
    selectedRequest: request,
  }
}
