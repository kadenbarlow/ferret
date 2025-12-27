import Headers from "./components/headers/headers"
import Request from "./components/request/request"
import Response from "./components/response/response"
import Tabs from "./components/tabs/tabs"
import useController from "./hooks/use-controller/use-controller"
import styles from "./request-details.module.css"

export default function RequestDetails(props) {
  const { clearSelectedRequest, request, selectedMatch } = props
  const { actions, state, tabs } = useController(props)

  return (
    <div className={styles.requestDetails}>
      <Tabs
        activeTab={state.activeTab}
        clearSelectedRequest={clearSelectedRequest}
        copy={actions.copy}
        copyRequestAsCurl={actions.copyRequestAsCurl}
        copyRequestAsFetch={actions.copyRequestAsFetch}
        formattedCopyByTab={state.formattedCopyByTab}
        request={request}
        setActiveTab={actions.setActiveTab}
        tabs={tabs}
      />
      <div className={styles.content}>
        {state.activeTab === tabs.headers && (
          <Headers
            match={selectedMatch}
            request={request}
          />
        )}
        {state.activeTab === tabs.request && (
          <Request
            match={selectedMatch}
            request={request}
          />
        )}
        {state.activeTab === tabs.response && (
          <Response
            match={selectedMatch}
            request={request}
          />
        )}
      </div>
    </div>
  )
}
