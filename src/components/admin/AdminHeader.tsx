"use client"

import { Bell, Menu, Search, Shield } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AdminHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-x-4 border-b border-white/10 bg-background/80 backdrop-blur-md px-4 sm:gap-x-6 sm:px-6 lg:px-8">
      <button type="button" className="-m-2.5 p-2.5 text-white/70 hover:text-white sm:hidden">
        <span className="sr-only">Buka sidebar</span>
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="flex flex-1 items-center gap-x-4 lg:gap-x-6">
        <div className="flex flex-1">
          <div className="relative w-full max-w-md hidden sm:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              placeholder="Cari ID laporan, nama politisi..."
              className="h-9 w-full rounded-md border border-white/10 bg-white/5 pl-9 pr-4 text-sm text-white placeholder:text-white/40 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <button type="button" className="-m-2.5 p-2.5 text-white/60 hover:text-white relative">
            <span className="sr-only">Lihat notifikasi</span>
            <Bell className="h-5 w-5" aria-hidden="true" />
            <span className="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
          </button>

          <div className="h-6 w-px bg-white/10" aria-hidden="true" />

          <div className="flex items-center gap-x-3">
            <Avatar className="h-8 w-8 border border-primary/30">
              <AvatarFallback className="bg-primary/20 text-primary text-xs">AD</AvatarFallback>
            </Avatar>
            <div className="hidden lg:flex lg:flex-col lg:items-start">
              <span className="text-sm font-semibold leading-none text-white" aria-hidden="true">
                Super Admin
              </span>
              <span className="text-[10px] text-primary flex items-center mt-1 font-medium" aria-hidden="true">
                <Shield className="w-3 h-3 mr-1" />
                Sistem
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
