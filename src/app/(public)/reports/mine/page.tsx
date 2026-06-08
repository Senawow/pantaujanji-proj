"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { FileText, CheckCircle2, Clock, XCircle, Search, Filter } from "lucide-react"
import Link from "next/link"

const myReports = [
  { 
    id: "REP-1035", 
    promise: "Pembangunan RSUD Tipe A di Selatan", 
    politician: "Ridwan Kamil",
    date: "10 Okt 2024", 
    status: "Diterima", 
    pointsEarned: "+50 Poin",
    desc: "Bangunan RSUD sudah rampung 80%."
  },
  { 
    id: "REP-1050", 
    promise: "Bebas Banjir 2024", 
    politician: "Drs. Budi Mulyono",
    date: "15 Okt 2024", 
    status: "Ditolak", 
    pointsEarned: "-10 Poin",
    desc: "Banjir parah di daerah Majalaya."
  },
  { 
    id: "REP-1088", 
    promise: "Beasiswa S1 untuk 5000 Siswa", 
    politician: "Ir. Hj. Siti Aminah",
    date: "Kemarin", 
    status: "Menunggu Verifikasi", 
    pointsEarned: "Pending",
    desc: "Pengumuman beasiswa gelombang 1 sudah dirilis."
  }
]

export default function MyReportsPage() {
  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'Diterima': return <CheckCircle2 className="w-5 h-5 text-emerald-400" />
      case 'Menunggu Verifikasi': return <Clock className="w-5 h-5 text-yellow-400" />
      case 'Ditolak': return <XCircle className="w-5 h-5 text-red-400" />
      default: return <FileText className="w-5 h-5 text-white/40" />
    }
  }

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Diterima': return 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
      case 'Menunggu Verifikasi': return 'border-yellow-500/30 text-yellow-400 bg-yellow-500/10'
      case 'Ditolak': return 'border-red-500/30 text-red-400 bg-red-500/10'
      default: return 'border-white/10 text-white/60 bg-white/5'
    }
  }

  return (
    <div className="container mx-auto px-4 pt-32 pb-20 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6"
      >
        <div>
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm w-fit mb-4">
            Aktivitas Saya
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl tracking-tighter text-white mb-4">
            Riwayat <span className="text-gradient">Laporan.</span>
          </h1>
          <p className="text-white/60 max-w-xl text-lg">
            Daftar seluruh kontribusi pengawasan Anda. Laporan yang diverifikasi akan meningkatkan skor reputasi Anda di platform.
          </p>
        </div>
        
        <div className="w-full md:w-auto flex gap-2">
          <div className="relative flex items-center glass-card rounded-xl border border-white/10 p-2 w-full md:w-64">
            <Search className="w-4 h-4 text-white/40 ml-2" />
            <input 
              type="text" 
              placeholder="Cari ID laporan..." 
              className="bg-transparent border-none outline-none text-white text-sm placeholder:text-white/40 w-full px-3 py-1"
            />
          </div>
          <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-xl shrink-0">
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </motion.div>

      <div className="space-y-4">
        {myReports.map((report, i) => (
          <motion.div
            key={report.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="glass-card rounded-2xl p-6 border border-white/10 flex flex-col md:flex-row gap-6 items-start md:items-center">
              
              <div className="flex-1 w-full">
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="outline" className="bg-white/5 border-white/10 text-white/50">{report.id}</Badge>
                  <span className="text-white/40 text-sm">{report.date}</span>
                </div>
                <h3 className="font-heading font-semibold text-lg text-white mb-1">
                  Janji: {report.promise}
                </h3>
                <div className="text-sm text-white/50 mb-3">
                  Oleh: <span className="text-white/80">{report.politician}</span>
                </div>
                <div className="bg-black/20 p-3 rounded-xl border border-white/5 text-sm text-white/70">
                  <span className="text-white/40 italic">Laporan Anda:</span> "{report.desc}"
                </div>
              </div>

              <div className="flex flex-row md:flex-col items-center justify-between md:items-end w-full md:w-auto gap-4 border-t md:border-t-0 border-white/10 pt-4 md:pt-0 shrink-0">
                <div className="flex flex-col items-start md:items-end gap-2">
                  <Badge className={`px-3 py-1.5 ${getStatusColor(report.status)}`} variant="outline">
                    <span className="flex items-center gap-2">
                      {getStatusIcon(report.status)}
                      {report.status}
                    </span>
                  </Badge>
                  <span className={`text-sm font-bold ${
                    report.pointsEarned.includes('+') ? 'text-emerald-400' : 
                    report.pointsEarned.includes('-') ? 'text-red-400' : 'text-yellow-400'
                  }`}>
                    {report.pointsEarned}
                  </span>
                </div>
                <Button variant="link" className="text-primary p-0 h-auto">Lihat Detail</Button>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
