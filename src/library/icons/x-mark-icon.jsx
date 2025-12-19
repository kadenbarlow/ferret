export default function XMarkIcon(props) {
  const { height, width } = props

  return (
    <svg
      class="size-6"
      fill="none"
      height={height || 24}
      stroke-width="1.5"
      stroke="currentColor"
      viewBox="0 0 24 24"
      width={width || 24}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  )
}
