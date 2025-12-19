export default function parseJson(jsonString) {
  try {
    return JSON.parse(jsonString)
  } catch {
    return null
  }
}
