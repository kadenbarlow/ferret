export default function copy(content) {
  const textarea = document.createElement("textarea")
  textarea.value = content
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand("copy")
  document.body.removeChild(textarea)
}
