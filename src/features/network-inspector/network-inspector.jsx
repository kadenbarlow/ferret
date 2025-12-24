import Controls from "./components/controls/controls"
import RequestDetails from "./components/request-details/request-details"
import RequestList from "./components/request-list/request-list"
import useController from "./hooks/use-controller/use-controller"
import styles from "./network-inspector.module.css"

export default function NetworkInspector() {
  const { actions, state } = useController()

  return (
    <div className={styles.root}>
      <Controls
        clearRequests={actions.clearRequests}
        filterRequests={actions.filterRequests}
        isInvertEnabled={state.isInvertEnabled}
        isPreserveLogEnabled={state.isPreserveLogEnabled}
        isRegexEnabled={state.isRegexEnabled}
        matches={state.matches}
        selectedMatchIndex={state.selectedMatchIndex}
        setIsInvertEnabled={actions.setIsInvertEnabled}
        setIsPreserveLogEnabled={actions.setIsPreserveLogEnabled}
        setIsRegexEnabled={actions.setIsRegexEnabled}
        setSelectedMatchIndex={actions.setSelectedMatchIndex}
      />
      <div className={styles.requests}>
        <div className={styles.requestList}>
          <RequestList
            collapsed={!!state.selectedRequest}
            requests={state.filteredRequests.length ? state.filteredRequests : state.requests}
            selectedRequest={state.selectedRequest}
            setSelectedRequest={actions.setSelectedRequest}
          />
        </div>
        {state.selectedRequest && (
          <div className={styles.requestDetails}>
            <RequestDetails
              clearSelectedRequest={actions.clearSelectedRequest}
              request={state.selectedRequest}
              selectedMatch={state.selectedMatch}
            />
          </div>
        )}
      </div>
    </div>
  )
}
