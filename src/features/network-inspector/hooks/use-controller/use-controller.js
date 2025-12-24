import { useEffect } from "react"
import useActions from "#library/react/hooks/use-actions"
import append from "#library/react/reducers/append"
import set from "#library/react/reducers/set"
import setter from "#library/react/reducers/setter"
import clearRequests from "./functions/clear-requests"
import filterRequests from "./functions/filter-requests"
import setSelectedMatchIndex from "./functions/set-selected-match-index"

export default function useController() {
  const { actions, state } = useActions(
    {
      filteredRequests: [],
      isInvertEnabled: false,
      isPreserveLogEnabled: localStorage.getItem("isPreserveLogEnabled") === "true",
      isRegexEnabled: false,
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
      setIsInvertEnabled: setter("isInvertEnabled"),
      setIsPreserveLogEnabled: setter("isPreserveLogEnabled"),
      setIsRegexEnabled: setter("isRegexEnabled"),
      setSelectedMatchIndex,
      setSelectedRequest: setter("selectedRequest"),
    },
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
