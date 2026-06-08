"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, ShieldCheck, MapPin, Edit3, Settings } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-heading text-3xl font-bold text-white mb-2">Profil Pengguna</h1>
          <p className="text-white/60">Kelola informasi akun dan lihat statistik kontribusimu.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10">
            <Settings className="w-4 h-4 mr-2" />
            Pengaturan
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,229,255,0.2)]">
            <Edit3 className="w-4 h-4 mr-2" />
            Edit Profil
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Identity */}
        <div className="glass-card p-8 rounded-3xl flex flex-col items-center text-center border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-primary/20 to-transparent pointer-events-none" />
          
          <Avatar className="h-28 w-28 border-4 border-background ring-4 ring-primary/20 mb-6 relative z-10">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User avatar" />
            <AvatarFallback className="bg-primary/20 text-primary text-2xl">BS</AvatarFallback>
          </Avatar>
          
          <h2 className="font-heading text-2xl font-bold text-white mb-1">Budi Santoso</h2>
          <p className="text-white/50 mb-4 flex items-center justify-center">
            <MapPin className="w-3.5 h-3.5 mr-1.5" />
            Jakarta Selatan, DKI Jakarta
          </p>
          
          <Badge className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 px-4 py-1.5 text-sm rounded-full mb-8">
            <ShieldCheck className="w-4 h-4 mr-2" />
            Verifikator Gold
          </Badge>
          
          <div className="w-full border-t border-white/10 pt-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-white/60">Bergabung</span>
              <span className="text-white font-medium">Oktober 2023</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/60">Email</span>
              <span className="text-white font-medium">budi.s***@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Right Column: Stats & Badges */}
        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="glass-card p-6 rounded-2xl border border-white/5 text-center hover:bg-white/5 transition-colors">
              <div className="text-3xl font-heading font-black text-primary mb-2">1,250</div>
              <div className="text-xs text-white/50 uppercase tracking-widest font-semibold">Total Poin</div>
            </div>
            <div className="glass-card p-6 rounded-2xl border border-white/5 text-center hover:bg-white/5 transition-colors">
              <div className="text-3xl font-heading font-black text-white mb-2">14</div>
              <div className="text-xs text-white/50 uppercase tracking-widest font-semibold">Laporan</div>
            </div>
            <div className="glass-card p-6 rounded-2xl border border-white/5 text-center hover:bg-white/5 transition-colors">
              <div className="text-3xl font-heading font-black text-emerald-400 mb-2">82</div>
              <div className="text-xs text-emerald-400/70 uppercase tracking-widest font-semibold">Vote Valid</div>
            </div>
            <div className="glass-card p-6 rounded-2xl border border-white/5 text-center hover:bg-white/5 transition-colors">
              <div className="text-3xl font-heading font-black text-secondary mb-2">94%</div>
              <div className="text-xs text-secondary/70 uppercase tracking-widest font-semibold">Akurasi</div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-white/5">
            <h3 className="font-heading text-xl font-bold text-white mb-6 flex items-center">
              <Trophy className="w-5 h-5 mr-3 text-yellow-400" />
              Koleksi Badge
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { name: "Pemula", desc: "Melapor 1x", color: "text-white" },
                { name: "Detektif", desc: "10 Laporan Valid", color: "text-primary" },
                { name: "Hakim", desc: "50 Vote Verifikasi", color: "text-emerald-400" },
                { name: "Mata Elang", desc: "Upload Video Fakta", color: "text-yellow-400" },
              ].map((badge, i) => (
                <div key={i} className="flex flex-col items-center text-center group cursor-pointer">
                  <div className={`w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${badge.color}`}>
                    <Trophy className="w-8 h-8 opacity-80" />
                  </div>
                  <div className="text-sm font-semibold text-white mb-1">{badge.name}</div>
                  <div className="text-xs text-white/40">{badge.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
