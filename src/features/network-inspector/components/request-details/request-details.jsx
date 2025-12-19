import Headers from "./components/headers/headers"
import Request from "./components/request/request"
import Response from "./components/response/response"
import Tabs from "./components/tabs/tabs"
import useController from "./hooks/use-controller/use-controller"

export default function RequestDetails(props) {
  const { clearSelectedRequest, request } = props
  const { actions, state } = useController()

  return (
    <div>
      <Tabs clearSelectedRequest={clearSelectedRequest} setActiveTab={actions.setActiveTab} tabs={state.tabs} />
      {state.activeTab === state.tabs.headers && <Headers request={request} />}
      {state.activeTab === state.tabs.request && <Request request={request} />}
      {state.activeTab === state.tabs.response && <Response request={request} />}
    </div>
  )
}
