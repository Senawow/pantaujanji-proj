"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Check, X, MessageSquare, AlertTriangle } from "lucide-react"

export default function AdminReportsPage() {
  const reports = [
    { id: "REP-992", user: "@andi_rakyat", promise: "Pembangunan 1000 Sekolah...", claim: "Ingkar", aiScore: "78%", date: "2 jam lalu" },
    { id: "REP-993", user: "@budi_santoso", promise: "Jalan Poros Kabupaten", claim: "Dalam Proses", aiScore: "95%", date: "4 jam lalu" },
    { id: "REP-994", user: "@citra_99", promise: "Subsidi Pupuk 50%", claim: "Selesai", aiScore: "42%", date: "5 jam lalu", flagged: true },
    { id: "REP-995", user: "@dina_m", promise: "Bebas Banjir 2024", claim: "Ingkar", aiScore: "88%", date: "6 jam lalu" },
  ]

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white flex items-center">
            Antrean Moderasi
            <Badge className="ml-3 bg-red-500 text-white hover:bg-red-600">7 Pending</Badge>
          </h1>
          <p className="text-sm text-white/50">Tinjau laporan masuk yang gagal diverifikasi otomatis oleh AI atau komunitas.</p>
        </div>
      </div>

      <div className="glass-card rounded-xl border border-white/10 overflow-hidden">
        <div className="p-4 border-b border-white/5 flex flex-col sm:flex-row gap-4 bg-white/5">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              placeholder="Cari ID laporan..."
              className="h-9 w-full rounded-md border border-white/10 bg-background pl-9 pr-4 text-sm text-white focus:border-primary/50 focus:outline-none"
            />
          </div>
          <Button variant="outline" size="sm" className="h-9 border-white/10 bg-background text-white/70">
            <Filter className="w-4 h-4 mr-2" />
            Urutkan: AI Score Terendah
          </Button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-white/40 uppercase bg-white/5 border-b border-white/5">
              <tr>
                <th className="px-6 py-3 font-medium">Laporan</th>
                <th className="px-6 py-3 font-medium">Pelapor</th>
                <th className="px-6 py-3 font-medium">Klaim Status</th>
                <th className="px-6 py-3 font-medium text-center">AI Confidence</th>
                <th className="px-6 py-3 font-medium text-right">Keputusan (Moderasi)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {reports.map((rep) => (
                <tr key={rep.id} className={`hover:bg-white/5 transition-colors ${rep.flagged ? 'bg-red-500/5' : ''}`}>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-mono text-xs text-white/40 mb-1">{rep.id}</span>
                      <span className="font-medium text-white max-w-[200px] truncate">{rep.promise}</span>
                      <span className="text-xs text-white/50 mt-1">{rep.date}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-white/70">{rep.user}</td>
                  <td className="px-6 py-4">
                    <span className="text-white/80 font-medium">{rep.claim}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span className={`font-mono font-bold ${
                        parseInt(rep.aiScore) > 80 ? 'text-emerald-400' : 
                        parseInt(rep.aiScore) > 60 ? 'text-yellow-400' : 'text-red-400'
                      }`}>{rep.aiScore}</span>
                      {rep.flagged && <AlertTriangle className="w-4 h-4 text-red-400" />}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Button size="sm" className="h-8 bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 border border-emerald-500/30">
                        <Check className="h-4 w-4 mr-1" /> Terima
                      </Button>
                      <Button size="sm" className="h-8 bg-red-500/20 text-red-400 hover:bg-red-500/30 border border-red-500/30">
                        <X className="h-4 w-4 mr-1" /> Tolak
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-white/60 hover:text-white bg-white/5">
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
