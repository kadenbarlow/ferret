export default function occurrencesOf(string, substring) {
  const indices = []
  const lowerCaseString = string?.toLowerCase() || ""
  const lowerCaseQuery = substring?.toLowerCase() || ""
  let index = 0

  while ((index = lowerCaseString.indexOf(lowerCaseQuery, index)) !== -1) {
    indices.push([index, index + lowerCaseQuery.length - 1])
    index++
  }

  return indices
}
