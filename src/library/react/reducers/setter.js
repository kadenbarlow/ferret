export default function setter(key) {
  return (state, value) => ({ ...state, [key]: value })
}
