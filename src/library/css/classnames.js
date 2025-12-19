export default function classnames(classes) {
  return Object.entries(classes)
    .filter(([condition]) => condition)
    .map(([_, className]) => className)
    .join(" ")
}
