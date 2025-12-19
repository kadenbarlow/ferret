export default function Tab(props) {
  const { label, onClick } = props

  return <div onClick={onClick}>{label}</div>
}
