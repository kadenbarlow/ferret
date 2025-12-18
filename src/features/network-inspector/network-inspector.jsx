import Controls from "./components/controls/controls"
import RequestDetails from "./components/request-details/request-details"
import RequestList from "./components/request-list/request-list"
import useController from "./hooks/use-controller/use-controller"
import "./network-inspector.css"

export default function NetworkInspector() {
  const { actions, state } = useController()
  const { clearRequests, setIsInvertEnabled, setIsPreserveLogEnabled, setIsRegexEnabled } = actions
  const { isInvertEnabled, isPreserveLogEnabled, isRegexEnabled, requests } = state

  return (
    <div>
      <Controls
        clearRequests={clearRequests}
        isInvertEnabled={isInvertEnabled}
        isPreserveLogEnabled={isPreserveLogEnabled}
        isRegexEnabled={isRegexEnabled}
        setIsInvertEnabled={setIsInvertEnabled}
        setIsPreserveLogEnabled={setIsPreserveLogEnabled}
        setIsRegexEnabled={setIsRegexEnabled}
      />
      <div className="requests-container">
        <div className="request-list-container">
          <RequestList requests={requests} />
        </div>
        <div className="request-details-container">
          <RequestDetails />
        </div>
      </div>
    </div>
  )
}
