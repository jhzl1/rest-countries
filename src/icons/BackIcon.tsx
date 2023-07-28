interface Props {
  className?: string
}

export const BackIcon = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M5 12h14M5 12l4 4M5 12l4-4" />
    </svg>
  )
}
