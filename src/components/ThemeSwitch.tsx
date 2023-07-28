"use client"

import { MoonIcon, SunIcon } from "@/icons"
import { useTheme } from "next-themes"
import React from "react"

export const ThemeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button className="flex" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
      {resolvedTheme === "dark" ? <SunIcon className="mr-2" /> : <MoonIcon className="mr-2" />}
      {resolvedTheme === "dark" ? "Dark" : "Light"} Mode
    </button>
  )
}
