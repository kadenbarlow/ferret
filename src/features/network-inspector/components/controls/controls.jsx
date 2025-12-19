import NoSymbolIcon from "#library/icons/no-symbol-icon"
import Button from "./components/button/button"
import Checkbox from "./components/checkbox/checkbox"
import Searchbar from "./components/searchbar/searchbar"
import styles from "./controls.module.css"

export default function Controls(props) {
  const {
    clearRequests,
    isInvertEnabled,
    isPreserveLogEnabled,
    isRegexEnabled,
    setIsInvertEnabled,
    setIsPreserveLogEnabled,
    setIsRegexEnabled,
  } = props

  return (
    <div className={styles.controls}>
      <Button icon={NoSymbolIcon} onClick={clearRequests} />
      <Searchbar placeholder={"Search"} />
      <Checkbox label={"Invert"} name={"invert"} onChange={setIsInvertEnabled} value={isInvertEnabled} />
      <Checkbox label={"Regex"} name={"regex"} onChange={setIsRegexEnabled} value={isRegexEnabled} />
      <Checkbox
        label={"Preserve Log"}
        name={"preserveLog"}
        onChange={setIsPreserveLogEnabled}
        value={isPreserveLogEnabled}
      />
    </div>
  )
}
