import Button from "#library/components/button/button"
import ChevronDownIcon from "#library/icons/chevron-down-icon"
import ChevronUpIcon from "#library/icons/chevron-up-icon"
import NoSymbolIcon from "#library/icons/no-symbol-icon"
import Checkbox from "./components/checkbox/checkbox"
import Searchbar from "./components/searchbar/searchbar"
import styles from "./controls.module.css"

export default function Controls(props) {
  const {
    clearRequests,
    filter,
    isPreserveLogEnabled,
    matches,
    selectedMatchIndex,
    setFilter,
    setIsPreserveLogEnabled,
    setSelectedMatchIndex,
  } = props

  return (
    <div className={styles.controls}>
      <div className={styles.left}>
        <Button
          icon={NoSymbolIcon}
          onClick={clearRequests}
        />
        <Searchbar
          filter={filter}
          placeholder={"Search"}
          setFilter={setFilter}
        />
        <Checkbox
          label={"Preserve Log"}
          name={"preserveLog"}
          value={isPreserveLogEnabled}
          onChange={setIsPreserveLogEnabled}
        />
      </div>
      {matches.length > 0 && (
        <div className={styles.right}>
          <div>
            {selectedMatchIndex + 1}/{matches.length}
          </div>
          <Button
            disabled={selectedMatchIndex === 0}
            icon={ChevronUpIcon}
            onClick={() => setSelectedMatchIndex(selectedMatchIndex - 1)}
          />
          <Button
            disabled={selectedMatchIndex === matches.length - 1}
            icon={ChevronDownIcon}
            onClick={() => setSelectedMatchIndex(selectedMatchIndex + 1)}
          />
        </div>
      )}
    </div>
  )
}
