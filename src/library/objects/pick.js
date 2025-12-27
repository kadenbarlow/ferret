export default function pick(object, keys) {
  return keys.reduce((acc, key) => {
    if (object[key] !== undefined) acc[key] = object[key]
    return acc
  }, {})
}
