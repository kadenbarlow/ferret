export default function set(key, value) {
  return (state) => ({ ...state, [key]: value })
}
