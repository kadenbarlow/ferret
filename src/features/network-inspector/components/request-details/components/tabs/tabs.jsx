import Button from "#library/components/button/button"
import XMarkIcon from "#library/icons/x-mark-icon"
import Tab from "./components/tab/tab"
import styles from "./tabs.module.css"

export default function Tabs(props) {
  const { activeTab, clearSelectedRequest, setActiveTab, tabs } = props

  return (
    <div className={styles.tabs}>
      <Button className={styles.button} icon={XMarkIcon} onClick={clearSelectedRequest} />
      {Object.entries(tabs).map(([key, tab]) => (
        <Tab active={activeTab === tab} key={key} label={tab} onClick={() => setActiveTab(tab)} />
      ))}
    </div>
  )
}
