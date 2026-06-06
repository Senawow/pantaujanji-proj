import type { Metadata } from "next"
import { Syne, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

const syne = Syne({ 
  subsets: ["latin"],
  variable: "--font-syne",
})

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-jakarta",
})

export const metadata: Metadata = {
  title: "PantauJanji | Transparansi Janji Politisi",
  description: "Platform untuk melacak, memverifikasi, dan mempublikasikan pemenuhan janji politik oleh para politisi Indonesia.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning className="dark">
      <body className={`${jakarta.className} ${syne.variable} ${jakarta.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col selection:bg-primary/30 selection:text-primary">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
