"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, Clock, CheckCircle2, XCircle, Search, Filter } from "lucide-react"

export default function MyReportsPage() {
  const reports = [
    {
      id: "REP-001",
      promise: "Pembangunan RSUD Tipe B",
      politician: "H. Ahmad Hidayat",
      status: "Verified",
      date: "12 Okt 2023",
      pointsEarned: "+100",
      description: "Bangunan sudah 80% selesai, sesuai dengan jadwal yang dijanjikan. Terlampir foto progress.",
    },
    {
      id: "REP-002",
      promise: "Perbaikan Jalan Poros Kabupaten",
      politician: "Drs. Budi Mulyono",
      status: "Pending",
      date: "15 Okt 2023",
      pointsEarned: "Menunggu",
      description: "Jalan masih berlubang dan belum ada alat berat masuk ke lokasi.",
    },
    {
      id: "REP-003",
      promise: "Beasiswa 1000 Mahasiswa",
      politician: "Ir. Hj. Siti Aminah",
      status: "Rejected",
      date: "05 Sep 2023",
      pointsEarned: "0",
      description: "Link berita yang dilampirkan tidak valid dan foto buram.",
    }
  ]

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'Verified': return <CheckCircle2 className="w-4 h-4 mr-1 text-emerald-400" />
      case 'Pending': return <Clock className="w-4 h-4 mr-1 text-yellow-400" />
      case 'Rejected': return <XCircle className="w-4 h-4 mr-1 text-red-400" />
      default: return null
    }
  }

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Verified': return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
      case 'Pending': return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
      case 'Rejected': return "bg-red-500/10 text-red-400 border-red-500/20"
      default: return "bg-white/10 text-white"
    }
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold text-white mb-2">Laporan Saya</h1>
          <p className="text-white/60">Lacak status verifikasi dari laporan janji politik yang telah Anda kirimkan.</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,229,255,0.2)]">
          <Plus className="w-4 h-4 mr-2" />
          Buat Laporan Baru
        </Button>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
          <input
            type="text"
            placeholder="Cari laporan..."
            className="h-10 w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 text-sm text-white placeholder:text-white/40 focus:border-primary/50 focus:outline-none transition-all"
          />
        </div>
        <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 rounded-xl">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {reports.map((report) => (
          <div key={report.id} className="glass-card p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4 pb-4 border-b border-white/5">
              <div>
                <div className="text-xs font-mono text-white/40 mb-1">{report.id}</div>
                <h3 className="font-heading font-bold text-lg text-white">{report.promise}</h3>
                <div className="text-sm text-primary">{report.politician}</div>
              </div>
              <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-2">
                <Badge variant="outline" className={`rounded-full px-3 py-1 font-medium border flex items-center ${getStatusBadge(report.status)}`}>
                  {getStatusIcon(report.status)}
                  {report.status}
                </Badge>
                <div className="text-xs text-white/50">{report.date}</div>
              </div>
            </div>
            
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              {report.description}
            </p>
            
            <div className="flex justify-between items-center pt-4 border-t border-white/5">
              <div className="text-sm text-white/60">
                Reward: <span className={`font-bold ${report.status === 'Verified' ? 'text-primary' : 'text-white/40'}`}>{report.pointsEarned}</span>
              </div>
              <Button variant="ghost" className="text-xs hover:bg-white/5 hover:text-white">
                Lihat Detail
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
