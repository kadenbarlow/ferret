import { useEffect, useState } from "react"

export default function useController() {
  const localIsPreserveLogEnabled = localStorage.getItem("isPreserveLogEnabled") === "true"

  const [isInvertEnabled, setIsInvertEnabled] = useState(false)
  const [isPreserveLogEnabled, _setIsPreserveLogEnabled] = useState(localIsPreserveLogEnabled)
  const [isRegexEnabled, setIsRegexEnabled] = useState(false)
  const [requests, _setRequests] = useState([])
  const [selectedRequest, setSelectedRequest] = useState(null)

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

  const clearRequests = () => {
    _setRequests([])
    setSelectedRequest(null)
  }

  const clearSelectedRequest = () => setSelectedRequest(null)

  const setIsPreserveLogEnabled = (enabled) => {
    _setIsPreserveLogEnabled(enabled)
    localStorage.setItem("isPreserveLogEnabled", enabled)
  }

  return {
    actions: {
      clearRequests,
      clearSelectedRequest,
      setIsInvertEnabled,
      setIsPreserveLogEnabled,
      setIsRegexEnabled,
      setSelectedRequest,
    },
    state: {
      isInvertEnabled,
      isPreserveLogEnabled,
      isRegexEnabled,
      requests,
      selectedRequest,
    },
  }
}
