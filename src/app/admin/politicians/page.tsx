"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Edit, Trash2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function AdminPoliticiansPage() {
  const politicians = [
    { id: "POL-001", name: "H. Ahmad Hidayat", party: "Partai A", position: "Gubernur Jabar", promises: 12, rating: "Cukup" },
    { id: "POL-002", name: "Drs. Budi Mulyono", party: "Partai B", position: "Bupati Bandung", promises: 8, rating: "Buruk" },
    { id: "POL-003", name: "Ir. Hj. Siti Aminah", party: "Partai C", position: "Walikota Depok", promises: 15, rating: "Baik" },
    { id: "POL-004", name: "Ridwan Kamil", party: "Independen", position: "Mantan Gubernur", promises: 24, rating: "Sangat Baik" },
  ]

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Manajemen Politisi</h1>
          <p className="text-sm text-white/50">Kelola data profil dan jabatan politisi.</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Tambah Politisi
        </Button>
      </div>

      <div className="glass-card rounded-xl border border-white/10 overflow-hidden">
        <div className="p-4 border-b border-white/5 flex flex-col sm:flex-row gap-4 bg-white/5">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              placeholder="Cari nama politisi..."
              className="h-9 w-full rounded-md border border-white/10 bg-background pl-9 pr-4 text-sm text-white focus:border-primary/50 focus:outline-none"
            />
          </div>
          <div className="w-[180px]">
            <Select>
              <SelectTrigger className="h-9 border-white/10 bg-background text-white/70">
                <SelectValue placeholder="Semua Partai" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Partai</SelectItem>
                <SelectItem value="partai-a">Partai A</SelectItem>
                <SelectItem value="partai-b">Partai B</SelectItem>
                <SelectItem value="partai-c">Partai C</SelectItem>
                <SelectItem value="independen">Independen</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-white/40 uppercase bg-white/5 border-b border-white/5">
              <tr>
                <th className="px-6 py-3 font-medium">ID</th>
                <th className="px-6 py-3 font-medium">Nama Politisi</th>
                <th className="px-6 py-3 font-medium">Partai</th>
                <th className="px-6 py-3 font-medium">Jabatan</th>
                <th className="px-6 py-3 font-medium text-center">Jml Janji</th>
                <th className="px-6 py-3 font-medium">Rating</th>
                <th className="px-6 py-3 font-medium text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {politicians.map((pol) => (
                <tr key={pol.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-mono text-xs text-white/40">{pol.id}</td>
                  <td className="px-6 py-4 font-medium text-white">{pol.name}</td>
                  <td className="px-6 py-4 text-white/60">{pol.party}</td>
                  <td className="px-6 py-4 text-white/60">{pol.position}</td>
                  <td className="px-6 py-4 text-center text-white">{pol.promises}</td>
                  <td className="px-6 py-4">
                    <Badge variant="outline" className={`
                      ${pol.rating === 'Baik' || pol.rating === 'Sangat Baik' ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10' : ''}
                      ${pol.rating === 'Cukup' ? 'border-yellow-500/30 text-yellow-400 bg-yellow-500/10' : ''}
                      ${pol.rating === 'Buruk' ? 'border-red-500/30 text-red-400 bg-red-500/10' : ''}
                    `}>
                      {pol.rating}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 text-white/60 hover:text-white">
                            Detail
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[600px] bg-[#0a0a0a] border-white/10 text-white">
                          <DialogHeader>
                            <DialogTitle className="flex justify-between items-center pr-6">
                              <span className="flex items-center gap-2">👤 {pol.name}</span>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm" className="h-7 text-xs border-white/10 bg-transparent">Edit Profil</Button>
                                <Button variant="outline" size="sm" className="h-7 text-xs border-red-500/30 text-red-400 bg-red-500/10">Hapus</Button>
                              </div>
                            </DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4 pt-4">
                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div><span className="text-white/50">Partai:</span> {pol.party}</div>
                              <div><span className="text-white/50">Dapil:</span> Jawa Barat</div>
                              <div><span className="text-white/50">Jabatan:</span> {pol.position}</div>
                              <div><span className="text-white/50">Periode:</span> 2024 - 2029</div>
                              <div className="col-span-2"><span className="text-white/50">Status:</span> ✅ Terverifikasi</div>
                            </div>
                            <div className="border border-white/10 rounded-lg overflow-hidden">
                              <div className="bg-white/5 p-2 text-sm font-medium border-b border-white/10">Daftar Janji</div>
                              <table className="w-full text-xs text-left">
                                <thead className="text-white/40 border-b border-white/5">
                                  <tr>
                                    <th className="p-2 font-medium">Status</th>
                                    <th className="p-2 font-medium">Judul</th>
                                    <th className="p-2 font-medium">Deadline</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="border-b border-white/5">
                                    <td className="p-2 text-emerald-400">✅ Selesai</td>
                                    <td className="p-2">Bangun 10 sekolah</td>
                                    <td className="p-2">2025-12-31</td>
                                  </tr>
                                  <tr>
                                    <td className="p-2 text-yellow-400">🔄 Proses</td>
                                    <td className="p-2">Perbaiki irigasi</td>
                                    <td className="p-2">2026-06-30</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-white/60 hover:text-white">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-red-400/60 hover:text-red-400 hover:bg-red-500/10">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-white/5 text-xs text-white/40 flex justify-between items-center">
          <span>Menampilkan 1-4 dari 42 politisi</span>
          <div className="flex gap-1">
            <Button variant="outline" size="sm" className="h-7 text-xs border-white/10 bg-transparent" disabled>Prev</Button>
            <Button variant="outline" size="sm" className="h-7 text-xs border-white/10 bg-white/5">Next</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
