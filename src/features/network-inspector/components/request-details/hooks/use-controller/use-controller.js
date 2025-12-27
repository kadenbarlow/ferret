import { useEffect } from "react"
import useActions from "#library/react/hooks/use-actions"
import setter from "#library/react/reducers/setter"
import copy from "./functions/copy"
import copyRequestAsCurl from "./functions/copy-request-as-curl"
import copyRequestAsFetch from "./functions/copy-request-as-fetch"

export default function useController({ request, selectedMatch }) {
  const tabs = { headers: "Headers", request: "Request", response: "Response" }
  const tabByMatchKey = {
    method: tabs.request,
    postData: tabs.request,
    requestHeaders: tabs.headers,
    responseBody: tabs.response,
    responseHeaders: tabs.headers,
    url: tabs.request,
  }

  const requestHeaders = {
    requestHeaders: request.requestHeaders.reduce((acc, { name, value }) => ({ ...acc, [name]: value }), {}),
    responseHeaders: request.responseHeaders.reduce((acc, { name, value }) => ({ ...acc, [name]: value }), {}),
  }

  const formattedCopyByTab = {
    [tabs.headers]: JSON.stringify(requestHeaders, null, 2),
    [tabs.request]: request.postData ? request.postData : request.url,
    [tabs.response]: request.responseBody,
  }

  const activeTab = tabByMatchKey[selectedMatch?.key] || tabs.response
  const { actions, state } = useActions({ activeTab, formattedCopyByTab }, { setActiveTab: setter("activeTab") })

  useEffect(() => {
    const activeTab = tabByMatchKey[selectedMatch?.key] || tabs.response
    actions.setActiveTab(activeTab)
  }, [selectedMatch?.key])

  return {
    actions: {
      ...actions,
      copy,
      copyRequestAsCurl,
      copyRequestAsFetch,
    },
    state,
    tabs,
  }
}
