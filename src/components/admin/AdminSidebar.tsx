"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Users, FileText, Flag, ShieldCheck, Tags, History, LogOut } from "lucide-react"

const adminLinks = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Politisi", href: "/admin/politicians", icon: Users },
  { name: "Janji", href: "/admin/promises", icon: FileText },
  { name: "Laporan", href: "/admin/reports", icon: Flag },
  { name: "Users", href: "/admin/users", icon: ShieldCheck, isSoon: true },
  { name: "Kategori", href: "/admin/categories", icon: Tags, isSoon: true },
  { name: "Audit Log", href: "/admin/audit-logs", icon: History, isSoon: true },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-white/10 bg-background sm:flex">
      <div className="flex h-16 shrink-0 items-center px-6 border-b border-white/5 bg-white/5">
        <Link href="/admin" className="font-heading font-extrabold text-xl tracking-tighter text-white">
          Pantau<span className="text-gradient">Admin</span>
        </Link>
      </div>
      
      <nav className="flex flex-1 flex-col gap-1 p-4 overflow-y-auto">
        <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2 px-3 mt-2">Manajemen Utama</div>
        {adminLinks.map((link) => {
          const Icon = link.icon
          const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/admin")
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`group flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                isActive 
                  ? "bg-primary/10 text-primary border border-primary/20" 
                  : "text-white/60 hover:bg-white/5 hover:text-white border border-transparent"
              } ${link.isSoon ? "opacity-70 cursor-not-allowed" : ""}`}
              onClick={(e) => {
                if (link.isSoon) e.preventDefault()
              }}
            >
              <div className="flex items-center gap-3">
                <Icon className={`h-4 w-4 ${isActive ? "text-primary" : "text-white/40 group-hover:text-white/80"}`} />
                {link.name}
              </div>
              {link.isSoon && (
                <span className="text-[9px] font-bold uppercase tracking-wider text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 px-1.5 py-0.5 rounded">
                  Soon
                </span>
              )}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-white/5 bg-white/5">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors">
          <LogOut className="h-4 w-4 text-red-400/70" />
          Keluar Admin
        </button>
      </div>
    </aside>
  )
}
