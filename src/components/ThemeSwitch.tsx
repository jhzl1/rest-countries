"use client"

import { useTheme } from "next-themes"
import React from "react"

export const ThemeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
      {resolvedTheme === "dark" ? "Dark" : "Light"} Mode
    </button>
  )
}
