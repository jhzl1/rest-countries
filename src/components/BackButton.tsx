"use client"

import { BackIcon } from "@/icons"
import { useRouter } from "next/navigation"

export const BackButton = () => {
  const { back } = useRouter()

  return (
    <button
      className="my-7 flex space-x-5 bg-white px-7 py-2 rounded-md shadow-md"
      onClick={() => back()}
    >
      <BackIcon /> <span>Back </span>
    </button>
  )
}
