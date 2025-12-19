import Controls from "./components/controls/controls"
import RequestDetails from "./components/request-details/request-details"
import RequestList from "./components/request-list/request-list"
import useController from "./hooks/use-controller/use-controller"
import styles from "./network-inspector.module.css"

export default function NetworkInspector() {
  const { actions, state } = useController()

  return (
    <div>
      <Controls
        clearRequests={actions.clearRequests}
        isInvertEnabled={state.isInvertEnabled}
        isPreserveLogEnabled={state.isPreserveLogEnabled}
        isRegexEnabled={state.isRegexEnabled}
        setIsInvertEnabled={actions.setIsInvertEnabled}
        setIsPreserveLogEnabled={actions.setIsPreserveLogEnabled}
        setIsRegexEnabled={actions.setIsRegexEnabled}
      />
      <div className={styles.requests}>
        <div className={styles.requestList}>
          <RequestList
            collapsed={!!state.selectedRequest}
            requests={state.requests}
            setSelectedRequest={actions.setSelectedRequest}
          />
        </div>
        {state.selectedRequest && (
          <div className={styles.requestDetails}>
            <RequestDetails request={state.selectedRequest} />
          </div>
        )}
      </div>
    </div>
  )
}
