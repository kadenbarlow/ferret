import { useEffect, useState } from "react"

export default function useController() {
  const [requests, _setRequests] = useState([])
  const [isPreserveLogEnabled, _setIsPreserveLogEnabled] = useState(
    localStorage.getItem("isPreserveLogEnabled") === "true",
  )
  const [isInvertEnabled, setIsInvertEnabled] = useState(false)
  const [isRegexEnabled, setIsRegexEnabled] = useState(false)

  useEffect(
    function initialize() {
      const handler = (event) => {
        if (event.data?.type === "REQUEST") _setRequests((prev) => [...prev, event.data.payload])
        else if (event.data?.type === "NAVIGATION" && !isPreserveLogEnabled) _setRequests([])
      }

      window.addEventListener("message", handler)
      return () => window.removeEventListener("message", handler)
    },
    [isPreserveLogEnabled],
  )

  const clearRequests = () => _setRequests([])
  const setIsPreserveLogEnabled = (enabled) => {
    _setIsPreserveLogEnabled(enabled)
    localStorage.setItem("isPreserveLogEnabled", enabled)
  }

  return {
    actions: {
      clearRequests,
      setIsInvertEnabled,
      setIsPreserveLogEnabled,
      setIsRegexEnabled,
    },
    state: {
      isInvertEnabled,
      isPreserveLogEnabled,
      isRegexEnabled,
      requests,
    },
  }
}
