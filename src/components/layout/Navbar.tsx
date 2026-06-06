"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 px-4 pt-4 sm:pt-6 ${scrolled ? "pt-2 sm:pt-2" : ""}`}
    >
      <div className={`mx-auto flex h-16 max-w-5xl items-center justify-between rounded-2xl border px-6 transition-all duration-300 ${scrolled ? "glass shadow-xl shadow-black/20 border-white/10 bg-background/40" : "bg-transparent border-transparent"}`}>
        <div className="flex items-center">
          <Link href="/" className="group flex items-center space-x-2">
            <span className="font-heading font-extrabold text-2xl tracking-tighter text-white">
              Pantau<span className="text-gradient">Janji</span>
            </span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link 
            href="/" 
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="relative text-white/70 hover:text-white transition-colors duration-200 group"
          >
            Beranda
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
          </Link>
          <Link href="#politisi" className="relative text-white/70 hover:text-white transition-colors duration-200 group">
            Politisi
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
          </Link>
          <Link href="#trending" className="relative text-white/70 hover:text-white transition-colors duration-200 group">
            Trending
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full"></span>
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden sm:inline-flex hover:bg-white/5 hover:text-white text-white/80 transition-colors rounded-xl">
            Masuk
          </Button>
          <Button className="rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] transition-all">
            Daftar
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
