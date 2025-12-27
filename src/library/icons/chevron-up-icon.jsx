export default function ChevronUpIcon(props) {
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
        d="m4.5 15.75 7.5-7.5 7.5 7.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
