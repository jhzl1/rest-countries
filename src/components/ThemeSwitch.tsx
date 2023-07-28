"use client"

import { MoonIcon, SunIcon } from "@/icons"
import { useTheme } from "next-themes"
import React, { useEffect, useState } from "react"

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button className="flex" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
      {resolvedTheme === "dark" ? <SunIcon className="mr-2" /> : <MoonIcon className="mr-2" />}
      {resolvedTheme === "dark" ? "Dark" : "Light"} Mode
    </button>
  )
}
