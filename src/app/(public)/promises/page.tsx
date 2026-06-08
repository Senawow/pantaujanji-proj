"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, CheckCircle2, Clock, XCircle, ChevronRight, FileText } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const allPromises = [
  { id: "PRM-001", title: "Bangun 1000 Sekolah Baru", politician: "H. Ahmad Hidayat", status: "Selesai", category: "Pendidikan", date: "12 Mei 2024", reports: 42 },
  { id: "PRM-002", title: "Bebas Banjir 2024", politician: "Drs. Budi Mulyono", status: "Ingkar", category: "Infrastruktur", date: "10 Jun 2024", reports: 128 },
  { id: "PRM-003", title: "Beasiswa S1 untuk 5000 Siswa", politician: "Ir. Hj. Siti Aminah", status: "Dalam Proses", category: "Pendidikan", date: "20 Agu 2024", reports: 15 },
  { id: "PRM-004", title: "Subsidi Pupuk 50%", politician: "H. Ahmad Hidayat", status: "Selesai", category: "Pertanian", date: "15 Jun 2024", reports: 34 },
  { id: "PRM-005", title: "Pembangunan RSUD Tipe A", politician: "Ridwan Kamil", status: "Dalam Proses", category: "Kesehatan", date: "05 Okt 2024", reports: 56 },
  { id: "PRM-006", title: "Penyediaan 1 Juta Lapangan Kerja", politician: "Ganjar Pranowo", status: "Belum Dimulai", category: "Ekonomi", date: "10 Sep 2024", reports: 5 },
]

export default function PromisesPage() {
  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'Selesai': return <CheckCircle2 className="w-5 h-5 text-emerald-400" />
      case 'Dalam Proses': return <Clock className="w-5 h-5 text-yellow-400" />
      case 'Ingkar': return <XCircle className="w-5 h-5 text-red-400" />
      default: return <FileText className="w-5 h-5 text-white/40" />
    }
  }

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Selesai': return 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
      case 'Dalam Proses': return 'border-yellow-500/30 text-yellow-400 bg-yellow-500/10'
      case 'Ingkar': return 'border-red-500/30 text-red-400 bg-red-500/10'
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
            Database Janji
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl tracking-tighter text-white mb-4">
            Pantau <span className="text-gradient">Janji.</span>
          </h1>
          <p className="text-white/60 max-w-xl text-lg">
            Semua janji politik yang pernah diucapkan, didokumentasikan di sini. Berikan laporan dari lapangan untuk validasi.
          </p>
        </div>
        
        <div className="w-full md:w-[400px] flex flex-col gap-3">
          <div className="relative flex items-center glass-card rounded-xl border border-white/10 p-2 w-full">
            <Search className="w-5 h-5 text-white/40 ml-2" />
            <input 
              type="text" 
              placeholder="Cari kata kunci janji..." 
              className="bg-transparent border-none outline-none text-white placeholder:text-white/40 w-full px-3 py-1"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            <Badge variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10 cursor-pointer whitespace-nowrap px-3 py-1.5">Semua Kategori</Badge>
            <Badge variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10 cursor-pointer whitespace-nowrap px-3 py-1.5">Pendidikan</Badge>
            <Badge variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10 cursor-pointer whitespace-nowrap px-3 py-1.5">Infrastruktur</Badge>
            <Badge variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10 cursor-pointer whitespace-nowrap px-3 py-1.5">Kesehatan</Badge>
          </div>
        </div>
      </motion.div>

      <div className="space-y-4">
        {allPromises.map((promise, i) => (
          <motion.div
            key={promise.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Link href={`/promises/${promise.id}`}>
              <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-primary/40 transition-all duration-300 group flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="flex-1 w-full">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <Badge variant="outline" className="bg-white/5 border-white/10 text-white/70">{promise.category}</Badge>
                    <span className="text-white/40 text-sm">{promise.date}</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white group-hover:text-primary transition-colors mb-2">
                    {promise.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <span>Oleh: <span className="font-medium text-white/80">{promise.politician}</span></span>
                    <span className="w-1 h-1 rounded-full bg-white/20"></span>
                    <span className="flex items-center text-primary/80">
                      {promise.reports} Laporan
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 w-full md:w-auto border-t md:border-t-0 border-white/10 pt-4 md:pt-0">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black/40 border border-white/5">
                    {getStatusIcon(promise.status)}
                    <span className={`text-sm font-medium ${
                      promise.status === 'Selesai' ? 'text-emerald-400' :
                      promise.status === 'Dalam Proses' ? 'text-yellow-400' :
                      promise.status === 'Ingkar' ? 'text-red-400' : 'text-white/60'
                    }`}>
                      {promise.status}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors shrink-0 ml-auto md:ml-0">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Button variant="outline" className="rounded-full px-8 py-6 bg-white/5 border-white/10 hover:bg-white/10 text-white">
          Muat Lebih Banyak
        </Button>
      </div>
    </div>
  )
}
