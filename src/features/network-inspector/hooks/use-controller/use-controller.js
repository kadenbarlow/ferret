import { useEffect } from "react"
import debounce from "#library/functions/debounce"
import useActions from "#library/react/hooks/use-actions"
import append from "#library/react/reducers/append"
import set from "#library/react/reducers/set"
import setter from "#library/react/reducers/setter"
import clearRequests from "./functions/clear-requests"
import filterRequests from "./functions/filter-requests"
import setSelectedMatchIndex from "./functions/set-selected-match-index"
import setSelectedRequest from "./functions/set-selected-request"

export default function useController() {
  const { actions, state } = useActions(
    {
      filter: "",
      filteredRequests: [],
      isPreserveLogEnabled: localStorage.getItem("isPreserveLogEnabled") === "true",
      matches: [],
      requests: [],
      selectedMatch: null,
      selectedMatchIndex: 0,
      selectedRequest: null,
    },
    {
      appendRequest: append("requests"),
      clearRequests,
      clearSelectedRequest: set("selectedRequest", null),
      filterRequests,
      setFilter: setter("filter"),
      setIsPreserveLogEnabled: setter("isPreserveLogEnabled"),
      setSelectedMatchIndex,
      setSelectedRequest,
    },
  )

  useEffect(
    debounce(() => actions.filterRequests(state), 300),
    [state.filter, state.requests],
  )

  useEffect(
    function initialize() {
      const handler = (event) => {
        if (event.data?.type === "REQUEST") actions.appendRequest(event.data.payload)
        else if (event.data?.type === "NAVIGATION" && !state.isPreserveLogEnabled) actions.clearRequests()
      }

      window.addEventListener("message", handler)
      return () => window.removeEventListener("message", handler)
    },
    [state.isPreserveLogEnabled, actions],
  )

  useEffect(() => {
    localStorage.setItem("isPreserveLogEnabled", state.isPreserveLogEnabled)
  }, [state.isPreserveLogEnabled])

  return { actions, state }
}
