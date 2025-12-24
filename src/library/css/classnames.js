export default function classnames(classes) {
  if (Array.isArray(classes)) return classes.filter(Boolean).join(" ")

  return Object.entries(classes)
    .filter(([className, condition]) => className !== "undefined" && condition)
    .map(([className]) => className)
    .join(" ")
}
