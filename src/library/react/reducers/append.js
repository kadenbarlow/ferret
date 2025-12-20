export default function append(key) {
  return (state, value) => ({ ...state, [key]: [...state[key], value] })
}
