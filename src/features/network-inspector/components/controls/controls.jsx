import Button from "#library/components/button/button"
import NoSymbolIcon from "#library/icons/no-symbol-icon"
import Checkbox from "./components/checkbox/checkbox"
import Searchbar from "./components/searchbar/searchbar"
import styles from "./controls.module.css"

export default function Controls(props) {
  const {
    clearRequests,
    filterRequests,
    isInvertEnabled,
    isPreserveLogEnabled,
    isRegexEnabled,
    setIsInvertEnabled,
    setIsPreserveLogEnabled,
    setIsRegexEnabled,
  } = props

  return (
    <div className={styles.controls}>
      <Button
        icon={NoSymbolIcon}
        onClick={clearRequests}
      />
      <Searchbar
        filterRequests={filterRequests}
        placeholder={"Search"}
      />
      <Checkbox
        label={"Invert"}
        name={"invert"}
        value={isInvertEnabled}
        onChange={setIsInvertEnabled}
      />
      <Checkbox
        label={"Regex"}
        name={"regex"}
        value={isRegexEnabled}
        onChange={setIsRegexEnabled}
      />
      <Checkbox
        label={"Preserve Log"}
        name={"preserveLog"}
        value={isPreserveLogEnabled}
        onChange={setIsPreserveLogEnabled}
      />
    </div>
  )
}
