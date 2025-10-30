import type React from "react"
import type { Metadata } from "next"
import { Architects_Daughter, Fira_Code } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-architects-daughter",
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fira-code",
})

export const metadata: Metadata = {
  title: "Rajat Pandey - Full Stack Developer",
  description:
    "Portfolio of Rajat Pandey - Aspiring Full Stack Developer, GSSoC Contributor, and B.Tech CSE Student at SRMIST",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${architectsDaughter.variable} ${firaCode.variable}`}>
      <body className="font-sans">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
