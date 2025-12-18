import Controls from "./components/controls/controls"
import useController from "./hooks/use-controller/use-controller"

export default function NetworkInspector() {
  const { actions, state } = useController()
  const { clearRequests, setIsInvertEnabled, setIsPreserveLogEnabled, setIsRegexEnabled } = actions
  const { isInvertEnabled, isPreserveLogEnabled, isRegexEnabled } = state

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
    </div>
  )
}
