import { SearchIcon } from "@/icons"
import clsx from "clsx"
import { InputHTMLAttributes } from "react"

export const InputFilter = ({ className, ...rest }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div
      className={clsx(
        "p-3 flex items-center text-neutral-500 space-x-7 bg-white rounded-md shadow-md transition-all duration-150 dark:bg-dark-primary",
        className,
      )}
    >
      <SearchIcon className="ml-7" />
      <input {...rest} className="outline-none bg-transparent w-full" />
    </div>
  )
}
