"use client"

import { ChevronIcon, XIcon } from "@/icons"
import clsx from "clsx"
import { useEffect, useRef, useState } from "react"

interface Props {
  value?: string
  placeholder?: string
  options: string[]
  onSelectValue: (newValue: string) => void
  className?: string
}

export const Dropdown = ({
  options,
  value,
  onSelectValue,
  placeholder = "Filter",
  className,
}: Props) => {
  const [isOpenDropdwon, setIsOpenDropdwon] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleResetValue = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    onSelectValue("")
  }

  const handleSelectValue = (newValue: string) => {
    onSelectValue(newValue)
    setIsOpenDropdwon(false)
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpenDropdwon(false)
      }
    }

    document.addEventListener("mousedown", handleOutsideClick)

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className={`bg-white dark:bg-dark-primary rounded-md shadow-md p-4 flex justify-between w-full z-30 relative ${className}`}
        onClick={() => setIsOpenDropdwon(!isOpenDropdwon)}
        data-testid="button-dropdown"
        tabIndex={-1}
      >
        <span>{value || placeholder}</span>

        <div className="flex space-x-3 items-center">
          {value && (
            <div
              className="bg-neutral-300 rounded-full p-1 h-5 w-5 flex justify-center items-center dark:bg-dark-secondary"
              onClick={handleResetValue}
              data-testid="button-reset-value"
            >
              <XIcon />
            </div>
          )}

          <ChevronIcon
            className={clsx("transition-all duration-200 ", {
              "rotate-180": isOpenDropdwon,
            })}
          />
        </div>
      </button>

      <div
        className={clsx(
          "absolute z-10 bg-white dark:bg-dark-primary p-1  shadow-md rounded-md w-full flex flex-col space-y-3 transition-all duration-150",
          {
            "scale-y-0 -top-16": !isOpenDropdwon,
            "scale-y-100 top-16": isOpenDropdwon,
          },
        )}
      >
        {options.map((option) => (
          <span
            key={option}
            onClick={() => handleSelectValue(option)}
            className={clsx(
              "px-3 py-1 hover:bg-slate-100 dark:hover:bg-dark-secondary cursor-pointer",
              {
                "bg-slate-100 font-bold dark:bg-dark-secondary": value === option,
              },
            )}
          >
            {option}
          </span>
        ))}
      </div>
    </div>
  )
}
