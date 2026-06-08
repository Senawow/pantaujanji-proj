"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThumbsUp, ThumbsDown, AlertCircle, FileText, MapPin, Camera } from "lucide-react"

export default function PendingVerificationPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center mb-10">
        <h1 className="font-heading text-3xl font-bold text-white mb-2">Verifikasi Komunitas</h1>
        <p className="text-white/60 mb-4">
          Bantu validasi laporan dari pengguna lain. Vote Anda menentukan kredibilitas data platform ini.
        </p>
        <Badge className="bg-yellow-500/10 text-yellow-400 border-yellow-500/20 px-3 py-1">
          <AlertCircle className="w-3.5 h-3.5 mr-1.5" />
          7 Laporan Menunggu Verifikasi
        </Badge>
      </div>

      {/* Feed Card */}
      <div className="glass-card rounded-3xl border border-white/10 overflow-hidden relative group">
        <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
        
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 border border-white/10">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Andi" />
                <AvatarFallback className="bg-primary/20 text-primary">AN</AvatarFallback>
              </Avatar>
              <div>
                <div className="text-sm font-semibold text-white">@andi_rakyat</div>
                <div className="text-xs text-white/50">Dilaporkan 2 jam lalu</div>
              </div>
            </div>
            <Badge variant="outline" className="bg-destructive/10 text-red-400 border-destructive/20 font-semibold px-3 py-1">
              Laporan: Ingkar Janji
            </Badge>
          </div>

          <div className="bg-white/5 rounded-2xl p-5 border border-white/5 mb-6">
            <div className="text-xs text-primary mb-1 uppercase tracking-wider font-semibold">Janji Terkait</div>
            <h3 className="font-heading text-xl font-bold text-white mb-2">
              "Pembangunan 1000 Sekolah Baru di Pelosok"
            </h3>
            <div className="text-sm text-white/60">Politisi: Drs. H. Ahmad (Gubernur)</div>
          </div>

          <div className="space-y-4 mb-8">
            <h4 className="text-sm font-semibold text-white flex items-center">
              <FileText className="w-4 h-4 mr-2 text-primary" />
              Keterangan Pelapor
            </h4>
            <p className="text-white/70 leading-relaxed text-sm bg-background/50 p-4 rounded-xl border border-white/5">
              "Saya sudah cek ke lokasi yang dijanjikan di Desa Sukamaju, tidak ada tanda-tanda material pembangunan sama sekali. Lahan masih kosong."
            </p>
            
            <div className="flex gap-4 mt-4">
              <div className="flex items-center text-xs text-white/50 bg-white/5 px-3 py-1.5 rounded-lg">
                <MapPin className="w-3.5 h-3.5 mr-1.5" />
                Desa Sukamaju, Kec. Harapan
              </div>
              <div className="flex items-center text-xs text-white/50 bg-white/5 px-3 py-1.5 rounded-lg">
                <Camera className="w-3.5 h-3.5 mr-1.5" />
                3 Bukti Foto
              </div>
            </div>

            {/* Mock Photos */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="aspect-square bg-white/10 rounded-xl border border-white/5 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                <span className="text-white/30 text-xs font-semibold">Foto 1</span>
              </div>
              <div className="aspect-square bg-white/10 rounded-xl border border-white/5 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                <span className="text-white/30 text-xs font-semibold">Foto 2</span>
              </div>
              <div className="aspect-square bg-white/10 rounded-xl border border-white/5 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                <span className="text-white/30 text-xs font-semibold">Foto 3</span>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6">
            <h4 className="text-center font-heading font-semibold text-white mb-6">
              Apakah laporan ini akurat dan buktinya valid?
            </h4>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="flex-1 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/30 h-14 rounded-2xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                <ThumbsUp className="w-5 h-5 mr-2" />
                Ya, Akurat
              </Button>
              <Button size="lg" className="flex-1 bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/30 h-14 rounded-2xl transition-all shadow-[0_0_20px_rgba(239,68,68,0.1)] hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                <ThumbsDown className="w-5 h-5 mr-2" />
                Tidak Akurat
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <Button variant="ghost" className="text-white/40 hover:text-white">
          Lewati Laporan Ini
        </Button>
      </div>
    </div>
  )
}
