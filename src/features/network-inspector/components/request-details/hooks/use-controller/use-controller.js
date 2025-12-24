import { useEffect } from "react"
import useActions from "#library/react/hooks/use-actions"
import setter from "#library/react/reducers/setter"

export default function useController({ selectedMatch }) {
  const tabs = { headers: "Headers", request: "Request", response: "Response" }
  const tabByMatchKey = {
    method: tabs.request,
    postData: tabs.request,
    requestHeaders: tabs.headers,
    responseBody: tabs.response,
    responseHeaders: tabs.headers,
    url: tabs.request,
  }
  const activeTab = tabByMatchKey[selectedMatch?.key] || tabs.response
  const { actions, state } = useActions({ activeTab }, { setActiveTab: setter("activeTab") })

  useEffect(() => {
    const activeTab = tabByMatchKey[selectedMatch?.key] || tabs.response
    actions.setActiveTab(activeTab)
  }, [selectedMatch?.key])

  return { actions, state, tabs }
}
