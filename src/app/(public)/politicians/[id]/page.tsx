"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ArrowLeft, CheckCircle2, Clock, XCircle, FileText, ChevronRight } from "lucide-react"
import Link from "next/link"

const politician = { 
  id: "POL-001", 
  name: "H. Ahmad Hidayat", 
  party: "Partai A", 
  position: "Gubernur Jabar", 
  dapil: "Jawa Barat I",
  period: "2024 - 2029",
  promises: 12, 
  rating: "Baik", 
  score: 75,
  image: "https://i.pravatar.cc/150?u=a042581f4e29026024d" 
}

const promises = [
  { id: "PRM-001", title: "Bangun 1000 Sekolah Baru", status: "Selesai", date: "12 Mei 2024", reports: 42 },
  { id: "PRM-002", title: "Subsidi Pupuk 50% untuk Petani", status: "Selesai", date: "15 Jun 2024", reports: 12 },
  { id: "PRM-003", title: "Pembangunan RSUD Tipe A di Selatan", status: "Dalam Proses", date: "20 Agu 2024", reports: 56 },
  { id: "PRM-004", title: "Penyediaan 1 Juta Lapangan Kerja", status: "Belum Dimulai", date: "10 Sep 2024", reports: 5 },
  { id: "PRM-005", title: "Hapus Pajak Kendaraan Bermotor", status: "Ingkar", date: "01 Nov 2024", reports: 120 },
]

export default function PoliticianProfilePage({ params }: { params: { id: string } }) {
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
      <Link href="/politicians" className="inline-flex items-center text-white/60 hover:text-white transition-colors mb-8 group">
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Kembali ke Direktori
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Profile Card */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-4"
        >
          <div className="glass-card rounded-3xl p-8 border border-white/10 sticky top-32">
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 mb-6 relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={politician.image} alt={politician.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary mb-3">
                ✅ Terverifikasi
              </Badge>
              
              <h1 className="font-heading font-extrabold text-3xl text-white mb-2">{politician.name}</h1>
              <p className="text-white/60 text-lg mb-6">{politician.position}</p>
              
              <div className="w-full space-y-3 text-left bg-white/5 rounded-2xl p-5 border border-white/5">
                <div className="flex justify-between">
                  <span className="text-white/50 text-sm">Partai</span>
                  <span className="text-white font-medium">{politician.party}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50 text-sm">Dapil</span>
                  <span className="text-white font-medium">{politician.dapil}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50 text-sm">Periode</span>
                  <span className="text-white font-medium">{politician.period}</span>
                </div>
              </div>

              <div className="w-full mt-6 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-5 border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full -z-10"></div>
                <div className="text-white/70 text-sm font-medium mb-1">Skor Reputasi</div>
                <div className="flex items-end gap-2">
                  <div className="text-5xl font-heading font-bold text-white">{politician.score}</div>
                  <div className="text-white/50 mb-1">/ 100</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Promises List */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h2 className="font-heading font-bold text-2xl text-white">Daftar Janji Politik</h2>
              <p className="text-white/50 text-sm">12 Janji tercatat selama masa kampanye & jabatan.</p>
            </div>
            <div className="flex gap-2">
              <Badge variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10 cursor-pointer">Semua</Badge>
              <Badge variant="outline" className="bg-emerald-500/10 border-emerald-500/30 text-emerald-400 cursor-pointer">Selesai</Badge>
              <Badge variant="outline" className="bg-red-500/10 border-red-500/30 text-red-400 cursor-pointer">Ingkar</Badge>
            </div>
          </div>

          <div className="space-y-4">
            {promises.map((promise, i) => (
              <motion.div
                key={promise.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
              >
                <Link href={`/promises/${promise.id}`}>
                  <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-primary/40 transition-all duration-300 group flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {getStatusIcon(promise.status)}
                        <h3 className="font-heading font-bold text-xl text-white group-hover:text-primary transition-colors">
                          {promise.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-white/50 ml-8">
                        <span>Diucapkan: {promise.date}</span>
                        <span className="w-1 h-1 rounded-full bg-white/20"></span>
                        <span>{promise.reports} Laporan Warga</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 w-full sm:w-auto ml-8 sm:ml-0">
                      <Badge className={getStatusColor(promise.status)} variant="outline">
                        {promise.status}
                      </Badge>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors shrink-0">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
