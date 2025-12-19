import { useState } from "react"

export default function useController() {
  const tabs = { headers: "Headers", request: "Request", response: "Response" }
  const [activeTab, setActiveTab] = useState(Object.values(tabs)[0])

  return {
    actions: { setActiveTab },
    state: { activeTab, tabs },
  }
}
