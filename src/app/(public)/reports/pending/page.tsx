"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Check, X, ShieldAlert, Image as ImageIcon, MapPin, AlertCircle } from "lucide-react"

const pendingReports = [
  { 
    id: "REP-1042",
    promise: "Bangun RSUD Tipe A di Kabupaten Selatan",
    politician: "Ridwan Kamil",
    reportedStatus: "Ingkar",
    reporter: { username: "andi_wijaya", tier: "Gold", reliability: "98%" },
    timeAgo: "2 jam lalu",
    description: "Sudah lewat deadline 1 tahun, lokasi pembangunan masih berupa tanah kosong. Tidak ada aktivitas alat berat sama sekali.",
    evidence: "3 Foto Terlampir",
    gps: "Sesuai Lokasi (-7.234, 107.456)",
    aiScore: "78%"
  },
  { 
    id: "REP-1043",
    promise: "Subsidi Pupuk 50% untuk Petani",
    politician: "H. Ahmad Hidayat",
    reportedStatus: "Selesai",
    reporter: { username: "petani_maju", tier: "Silver", reliability: "85%" },
    timeAgo: "5 jam lalu",
    description: "Pupuk subsidi sudah bisa diambil di KUD setempat dengan potongan harga 50% sesuai janji.",
    evidence: "1 Foto Kuitansi",
    gps: "Tidak tersedia",
    aiScore: "82%"
  }
]

export default function PendingReportsPage() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-20 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto mb-10"
      >
        <div className="inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-sm font-medium text-yellow-500 backdrop-blur-sm w-fit mb-4">
          <ShieldAlert className="w-4 h-4 mr-2" />
          Akses Khusus Tier Gold+
        </div>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl tracking-tighter text-white mb-4">
          Verifikasi <span className="text-gradient">Komunitas.</span>
        </h1>
        <p className="text-white/60 text-lg">
          Bantu verifikasi laporan dari warga lain. Vote Anda menentukan apakah laporan ini diterima atau ditolak. Dapatkan poin ekstra untuk setiap vote yang akurat.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-6">
        {pendingReports.map((report, i) => (
          <motion.div
            key={report.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="outline" className="bg-white/5 border-white/10 text-white/50">{report.id}</Badge>
                  <span className="text-sm text-white/40">{report.timeAgo}</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-1">
                  Janji: {report.promise}
                </h3>
                <p className="text-white/60 text-sm">Politisi: <span className="text-white">{report.politician}</span></p>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col items-center min-w-[120px]">
                <span className="text-xs text-white/50 mb-1">Status Dilaporkan</span>
                <Badge className={
                  report.reportedStatus === 'Selesai' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 
                  'bg-red-500/20 text-red-400 border-red-500/30'
                } variant="outline">
                  {report.reportedStatus}
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="md:col-span-2 space-y-4">
                <div className="bg-black/30 rounded-2xl p-5 border border-white/5">
                  <h4 className="text-sm font-medium text-white/50 mb-2">Deskripsi Laporan</h4>
                  <p className="text-white/80 leading-relaxed text-sm">
                    "{report.description}"
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white/70">
                    <ImageIcon className="w-4 h-4" />
                    {report.evidence}
                    <Button variant="link" className="h-auto p-0 text-primary ml-2 h-4 text-xs">Lihat</Button>
                  </div>
                  <div className={`flex items-center gap-2 border rounded-lg px-3 py-2 text-sm ${
                    report.gps.includes('Sesuai') ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-white/5 border-white/10 text-white/50'
                  }`}>
                    <MapPin className="w-4 h-4" />
                    {report.gps}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <h4 className="text-xs font-medium text-white/50 mb-3 uppercase tracking-wider">Info Pelapor</h4>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                      {report.reporter.username.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="text-sm text-white font-medium">@{report.reporter.username}</div>
                      <Badge variant="outline" className="text-[10px] h-4 bg-yellow-500/10 border-yellow-500/30 text-yellow-500 px-1 mt-1">Tier {report.reporter.tier}</Badge>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-xs mt-3 pt-3 border-t border-white/10">
                    <span className="text-white/50">Tingkat Akurasi:</span>
                    <span className="text-emerald-400 font-medium">{report.reporter.reliability}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-xs text-white/40 bg-white/5 p-3 rounded-xl border border-white/5">
                  <AlertCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <p>Skor validasi AI: {report.aiScore}. Butuh verifikasi manusia karena di bawah threshold otomatis (90%).</p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-sm text-white/60 font-medium">Apakah laporan ini akurat?</span>
              <div className="flex gap-3 w-full sm:w-auto">
                <Button variant="outline" className="flex-1 sm:flex-none h-12 rounded-xl border-red-500/30 bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:text-red-300 transition-colors">
                  <X className="w-5 h-5 mr-2" />
                  Tolak Laporan
                </Button>
                <Button className="flex-1 sm:flex-none h-12 rounded-xl border border-emerald-500/50 bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 hover:text-emerald-300 transition-colors shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                  <Check className="w-5 h-5 mr-2" />
                  Valid (Setuju)
                </Button>
              </div>
            </div>
          </motion.div>
        ))}

        <div className="text-center pt-8">
          <p className="text-white/40 text-sm">Tidak ada laporan lain yang membutuhkan verifikasi saat ini.</p>
        </div>
      </div>
    </div>
  )
}
