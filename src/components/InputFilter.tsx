import { useDebounce } from "@/hooks"
import { SearchIcon } from "@/icons"
import clsx from "clsx"
import { useEffect, useState } from "react"

type Props = {
  value: string
  onChange: (value: string) => void
  debounce?: number
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">

export const InputFilter = ({ className, value: initialValue, onChange, ...rest }: Props) => {
  const [value, setValue] = useState(initialValue)
  const debouncedValue = useDebounce(value)

  useEffect(() => {
    onChange(debouncedValue)
  }, [debouncedValue])

  return (
    <div
      className={clsx(
        "p-3 flex items-center space-x-7 bg-white rounded-md shadow-md transition-all duration-150 dark:bg-dark-primary",
        {
          "dark:text-white": value,
        },
        className,
      )}
    >
      <SearchIcon className="ml-7 text-neutral-500" />
      <input
        onChange={({ target }) => setValue(target.value)}
        {...rest}
        value={value}
        className="outline-none bg-transparent w-full placeholder-neutral-500"
      />
    </div>
  )
}
