import { useEffect } from "react"
import useActions from "#library/react/hooks/use-actions"
import append from "#library/react/reducers/append"
import set from "#library/react/reducers/set"
import setter from "#library/react/reducers/setter"
import filterRequests from "./functions/filter-requests"

export default function useController() {
  const { actions, state } = useActions(
    {
      isInvertEnabled: false,
      isPreserveLogEnabled: localStorage.getItem("isPreserveLogEnabled") === "true",
      isRegexEnabled: false,
      requests: [],
      selectedRequest: null,
    },
    {
      appendRequest: append("requests"),
      clearRequests: set("requests", []),
      clearSelectedRequest: set("setSelectedRequest", null),
      filterRequests,
      setIsInvertEnabled: setter("isInvertEnabled"),
      setIsPreserveLogEnabled: setter("isPreserveLogEnabled"),
      setIsRegexEnabled: setter("isRegexEnabled"),
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
