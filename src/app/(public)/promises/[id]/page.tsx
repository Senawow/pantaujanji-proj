"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ArrowLeft, CheckCircle2, Clock, XCircle, FileText, Flag, Link as LinkIcon, Calendar, User, Upload } from "lucide-react"
import Link from "next/link"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const promise = {
  id: "PRM-001", 
  title: "Bangun 1000 Sekolah Baru di Daerah Tertinggal", 
  politician: { name: "H. Ahmad Hidayat", id: "POL-001" },
  status: "Selesai", 
  category: "Pendidikan", 
  date: "12 Mei 2024",
  deadline: "31 Des 2025",
  sourceUrl: "https://youtube.com/watch?v=demo",
  description: "Dalam kampanye akbar di Bandung, beliau berjanji akan membangun 1000 sekolah baru tingkat SD dan SMP di daerah-daerah tertinggal yang minim fasilitas pendidikan.",
  reportsCount: 42
}

const reports = [
  { id: 1, user: "andi_wijaya", tier: "Gold", status: "Selesai", date: "2 hari lalu", desc: "Sekolah di desa saya sudah selesai dibangun minggu lalu. Fasilitas lengkap.", votes: 15 },
  { id: 2, user: "budi_s", tier: "Silver", status: "Selesai", date: "5 hari lalu", desc: "Konfirmasi pembangunan SMPN 4 baru di Garut Selatan.", votes: 8 },
]

export default function PromiseDetailPage({ params }: { params: { id: string } }) {
  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'Selesai': return <CheckCircle2 className="w-6 h-6 text-emerald-400" />
      case 'Dalam Proses': return <Clock className="w-6 h-6 text-yellow-400" />
      case 'Ingkar': return <XCircle className="w-6 h-6 text-red-400" />
      default: return <FileText className="w-6 h-6 text-white/40" />
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
      <Link href="/promises" className="inline-flex items-center text-white/60 hover:text-white transition-colors mb-8 group">
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Kembali ke Daftar Janji
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Promise Detail */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-8 space-y-6"
        >
          <div className="glass-card rounded-3xl p-8 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              {getStatusIcon(promise.status)}
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className={getStatusColor(promise.status)} variant="outline">
                Status: {promise.status}
              </Badge>
              <Badge variant="outline" className="bg-white/5 border-white/10 text-white/70">
                {promise.category}
              </Badge>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-6 leading-tight">
              {promise.title}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 p-4 bg-white/5 rounded-2xl border border-white/5">
              <div className="flex items-center gap-3 text-white/70">
                <User className="w-5 h-5 text-white/40" />
                <div>
                  <div className="text-xs text-white/50">Diucapkan Oleh</div>
                  <Link href={`/politicians/${promise.politician.id}`} className="font-medium text-primary hover:underline">
                    {promise.politician.name}
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Calendar className="w-5 h-5 text-white/40" />
                <div>
                  <div className="text-xs text-white/50">Tanggal Diucapkan</div>
                  <div className="font-medium text-white">{promise.date}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Clock className="w-5 h-5 text-white/40" />
                <div>
                  <div className="text-xs text-white/50">Tenggat Waktu</div>
                  <div className="font-medium text-white">{promise.deadline}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <LinkIcon className="w-5 h-5 text-white/40" />
                <div>
                  <div className="text-xs text-white/50">Sumber</div>
                  <a href={promise.sourceUrl} target="_blank" rel="noreferrer" className="font-medium text-primary hover:underline">
                    Lihat Bukti Video
                  </a>
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <h3 className="text-xl font-heading font-semibold text-white mb-3">Konteks Janji</h3>
              <p className="text-white/70 leading-relaxed">
                {promise.description}
              </p>
            </div>
          </div>

          {/* Reports Timeline */}
          <div className="glass-card rounded-3xl p-8 border border-white/10">
            <h3 className="font-heading font-semibold text-2xl text-white mb-6 flex items-center gap-3">
              <Flag className="w-6 h-6 text-primary" />
              Laporan Warga ({promise.reportsCount})
            </h3>
            
            <div className="space-y-6">
              {reports.map(report => (
                <div key={report.id} className="border-l-2 border-white/10 pl-6 relative">
                  <div className="absolute w-4 h-4 rounded-full bg-primary/20 border-2 border-primary -left-[9px] top-1"></div>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-white">@{report.user}</span>
                      <Badge variant="outline" className="text-[10px] h-5 bg-white/5 border-white/10 text-white/50">{report.tier}</Badge>
                      <Badge variant="outline" className={`text-[10px] h-5 ${getStatusColor(report.status)}`}>{report.status}</Badge>
                    </div>
                    <span className="text-xs text-white/40">{report.date}</span>
                  </div>
                  <p className="text-white/70 text-sm mb-3 bg-white/5 p-4 rounded-xl border border-white/5">
                    {report.desc}
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="h-7 text-xs bg-transparent border-white/10 text-white/60 hover:text-white">
                      👍 {report.votes} Setuju
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-4 space-y-6 sticky top-32 h-fit"
        >
          <div className="glass-card rounded-3xl p-6 border border-white/10 bg-primary/5 text-center">
            <h3 className="font-heading font-semibold text-lg text-white mb-2">Punya Update Terbaru?</h3>
            <p className="text-white/60 text-sm mb-6">Laporkan progress dari janji ini untuk mendapatkan poin reputasi.</p>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                  Laporkan Progress
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px] bg-[#0a0a0a] border-white/10 text-white">
                <DialogHeader>
                  <DialogTitle>Buat Laporan Progress</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <Label className="text-white/70">Status yang Dilaporkan</Label>
                    <Select>
                      <SelectTrigger className="border-white/10 bg-background text-white">
                        <SelectValue placeholder="Pilih status..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="selesai">Selesai (Ditepati)</SelectItem>
                        <SelectItem value="proses">Dalam Proses</SelectItem>
                        <SelectItem value="ingkar">Ingkar Janji</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white/70">Upload Bukti (Foto/Video)</Label>
                    <div className="border-2 border-dashed border-white/20 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-white/5 transition-colors">
                      <Upload className="w-8 h-8 text-white/40 mb-2" />
                      <span className="text-sm text-white/60">Klik untuk upload bukti</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white/70">Lokasi GPS (Opsional)</Label>
                    <div className="flex gap-2">
                      <Input placeholder="Titik lokasi..." className="border-white/10 bg-background text-white" disabled />
                      <Button variant="outline" className="border-white/10 text-white/70">Deteksi</Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white/70">Deskripsi Fakta Lapangan</Label>
                    <Textarea placeholder="Jelaskan apa yang Anda lihat (min. 20 karakter)" className="border-white/10 bg-background text-white resize-none" rows={4} />
                  </div>
                  <div className="bg-yellow-500/10 border border-yellow-500/20 p-3 rounded-lg flex items-start gap-3 mt-2">
                    <div className="text-yellow-400 mt-0.5">⚠️</div>
                    <div className="text-xs text-yellow-400/80">Laporan palsu akan mengurangi skor reputasi Anda. Stake 50 poin diperlukan untuk mengirim laporan ini.</div>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" className="border-white/10 bg-transparent hover:bg-white/5 text-white">Batal</Button>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Kirim Laporan</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
