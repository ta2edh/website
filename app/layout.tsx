import type React from "react"
import "@/app/globals.css"
import { JetBrains_Mono } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import { SpeedInsights } from "@vercel/speed-insights/next"

const mono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "Erdem Hacisalihoglu (TA2EDH)",
  description: "Erdem Hacisalihoglu's personal website. erdem@ta2edh.com"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="me" href="https://sosyal.teknofest.app/@erdemhacisalihoglu" />
        <link rel="me" href="https://mastodon.social/@ta2edh" />
      </head>
      <body className={mono.className}>
        {children}
        <Toaster />
        <SpeedInsights />
      </body>
    </html>
  )
}
