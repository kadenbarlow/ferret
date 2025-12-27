import Button from "#library/components/button/button"
import CodeBracketSquareIcon from "#library/icons/code-bracket-square-icon"
import CommandLineIcon from "#library/icons/command-line-icon"
import Square2StackIcon from "#library/icons/square-2-stack-icon"
import XMarkIcon from "#library/icons/x-mark-icon"
import Tab from "./components/tab/tab"
import styles from "./tabs.module.css"

export default function Tabs(props) {
  const {
    activeTab,
    clearSelectedRequest,
    copy,
    copyRequestAsCurl,
    copyRequestAsFetch,
    formattedCopyByTab,
    request,
    setActiveTab,
    tabs,
  } = props

  return (
    <div className={styles.tabs}>
      <div className={styles.left}>
        <Button
          className={styles.button}
          icon={XMarkIcon}
          onClick={clearSelectedRequest}
        />
        {Object.entries(tabs).map(([key, tab]) => (
          <Tab
            key={key}
            active={activeTab === tab}
            label={tab}
            onClick={() => setActiveTab(tab)}
          />
        ))}
      </div>
      <div className={styles.right}>
        <Button
          icon={CommandLineIcon}
          onClick={() => copyRequestAsCurl(request)}
        />
        <Button
          icon={CodeBracketSquareIcon}
          onClick={() => copyRequestAsFetch(request)}
        />
        <Button
          icon={Square2StackIcon}
          onClick={() => copy(formattedCopyByTab[activeTab])}
        />
      </div>
    </div>
  )
}
