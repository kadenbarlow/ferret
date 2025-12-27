import HighlightedText from "#library/components/highlighted-text/highlighted-text"
import styles from "./header-list.module.css"

export default function HeaderList(props) {
  const { headers, match, type } = props

  return (
    <>
      {headers &&
        headers.map(({ name, value }, index) => (
          <div
            key={index}
            className={styles.header}
          >
            <span className={styles.headerName}>
              <HighlightedText
                content={name}
                enabled={match?.key === type && match?.path[1] === name && match?.type === "name"}
                end={match?.end}
                start={match?.start}
              />
            </span>
            :{" "}
            <HighlightedText
              content={value}
              enabled={match?.key === type && match?.path[1] === name && match?.type === "value"}
              end={match?.end}
              start={match?.start}
            />
          </div>
        ))}
    </>
  )
}
