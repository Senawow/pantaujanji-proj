"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, FileText, CheckCircle, User, LogOut } from "lucide-react"

const sidebarLinks = [
  { name: "Beranda Utama", href: "/", icon: LayoutDashboard },
  { name: "Profil Saya", href: "/profile", icon: User },
  { name: "Laporan Saya", href: "/reports/mine", icon: FileText },
  { name: "Verifikasi Laporan", href: "/reports/pending", icon: CheckCircle },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-white/10 bg-card/40 backdrop-blur-xl sm:flex">
      <div className="flex h-16 shrink-0 items-center px-6 border-b border-white/5">
        <Link href="/" className="font-heading font-extrabold text-2xl tracking-tighter text-white">
          Pantau<span className="text-gradient">Janji</span>
        </Link>
      </div>
      
      <nav className="flex flex-1 flex-col gap-2 p-4 overflow-y-auto">
        <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2 px-2 mt-4">Menu Utama</div>
        {sidebarLinks.map((link) => {
          const Icon = link.icon
          const isActive = pathname.startsWith(link.href) && link.href !== "/" || (link.href === "/" && pathname === "/")
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                isActive 
                  ? "bg-primary/10 text-primary border border-primary/20 shadow-[0_0_15px_rgba(0,229,255,0.1)]" 
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? "text-primary" : "text-white/40 group-hover:text-white/80"}`} />
              {link.name}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-white/5">
        <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors">
          <LogOut className="h-5 w-5 text-red-400/70" />
          Keluar
        </button>
      </div>
    </aside>
  )
}
