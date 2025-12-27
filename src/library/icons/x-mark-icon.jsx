export default function XMarkIcon(props) {
  const { height, width } = props

  return (
    <svg
      fill="none"
      height={height || 24}
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width={width || 24}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 18 18 6M6 6l12 12"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
