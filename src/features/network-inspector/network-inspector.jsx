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
        filter={state.filter}
        isPreserveLogEnabled={state.isPreserveLogEnabled}
        matches={state.matches}
        selectedMatchIndex={state.selectedMatchIndex}
        setFilter={actions.setFilter}
        setIsPreserveLogEnabled={actions.setIsPreserveLogEnabled}
        setSelectedMatchIndex={actions.setSelectedMatchIndex}
      />
      <div className={styles.requests}>
        <div className={styles.requestList}>
          <RequestList
            collapsed={!!state.selectedRequest}
            requests={state.filter ? state.filteredRequests : state.requests}
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
