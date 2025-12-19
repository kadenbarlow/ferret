import Headers from "./components/headers/headers"
import Request from "./components/request/request"
import Response from "./components/response/response"
import Tabs from "./components/tabs/tabs"
import useController from "./hooks/use-controller/use-controller"
import styles from "./request-details.module.css"

export default function RequestDetails(props) {
  const { clearSelectedRequest, request } = props
  const { actions, state } = useController()

  return (
    <div className={styles.requestDetails}>
      <Tabs
        activeTab={state.activeTab}
        clearSelectedRequest={clearSelectedRequest}
        setActiveTab={actions.setActiveTab}
        tabs={state.tabs}
      />
      <div className={styles.content}>
        {state.activeTab === state.tabs.headers && <Headers request={request} />}
        {state.activeTab === state.tabs.request && <Request request={request} />}
        {state.activeTab === state.tabs.response && <Response request={request} />}
      </div>
    </div>
  )
}
