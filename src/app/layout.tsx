import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Providers } from "./providers"
import { ThemeSwitch } from "@/components"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Where in the world?",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <header className="bg-white px-5 lg:px-20 py-5 flex justify-between items-center shadow-md transition-all duration-150 dark:bg-dark-primary">
            <h1 className="lg:text-xl font-bold">Where in the world?</h1>

            <ThemeSwitch />
          </header>
          <main className="px-5 lg:px-20 py-10">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
