import useActions from "#library/react/hooks/use-actions"
import setter from "#library/react/reducers/setter"

export default function useController() {
  const tabs = { headers: "Headers", request: "Request", response: "Response" }
  const { actions, state } = useActions({ activeTab: tabs.response }, { setActiveTab: setter("activeTab") })

  return { actions, state, tabs }
}
