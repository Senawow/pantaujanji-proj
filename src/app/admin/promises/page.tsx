"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Filter, Edit, Trash2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function AdminPromisesPage() {
  const promises = [
    { id: "PRM-101", title: "Bangun 1000 Sekolah Baru", politician: "H. Ahmad Hidayat", status: "Selesai", reports: 42 },
    { id: "PRM-102", title: "Bebas Banjir 2024", politician: "Drs. Budi Mulyono", status: "Ingkar", reports: 128 },
    { id: "PRM-103", title: "Beasiswa S1 untuk 5000 Siswa", politician: "Ir. Hj. Siti Aminah", status: "Dalam Proses", reports: 15 },
    { id: "PRM-104", title: "Subsidi Pupuk 50%", politician: "H. Ahmad Hidayat", status: "Selesai", reports: 34 },
  ]

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Selesai': return 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
      case 'Ingkar': return 'border-red-500/30 text-red-400 bg-red-500/10'
      case 'Dalam Proses': return 'border-yellow-500/30 text-yellow-400 bg-yellow-500/10'
      default: return 'border-white/10 text-white/60 bg-white/5'
    }
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Manajemen Janji</h1>
          <p className="text-sm text-white/50">Daftar seluruh janji politik yang dicatat dalam sistem.</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Tambah Janji Manual
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px] bg-[#0a0a0a] border-white/10 text-white">
            <DialogHeader>
              <DialogTitle>Tambah Janji Baru</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="politician" className="text-right text-white/70">Politisi</Label>
                <div className="col-span-3">
                  <Select>
                    <SelectTrigger id="politician" className="border-white/10 bg-background text-white/70">
                      <SelectValue placeholder="Pilih politisi..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="p1">H. Ahmad Hidayat</SelectItem>
                      <SelectItem value="p2">Drs. Budi Mulyono</SelectItem>
                      <SelectItem value="p3">Ir. Hj. Siti Aminah</SelectItem>
                      <SelectItem value="p4">Ridwan Kamil</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right text-white/70">Judul</Label>
                <Input id="title" placeholder="Contoh: Bangun 1000 sekolah" className="col-span-3 border-white/10 bg-background text-white" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right text-white/70">Deskripsi</Label>
                <Textarea id="description" placeholder="Penjelasan detail janji..." className="col-span-3 border-white/10 bg-background text-white resize-none" rows={3} />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="text-right text-white/70">Kategori</Label>
                <div className="col-span-3">
                  <Select>
                    <SelectTrigger id="category" className="border-white/10 bg-background text-white/70">
                      <SelectValue placeholder="Pilih kategori..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="infrastruktur">Infrastruktur</SelectItem>
                      <SelectItem value="pendidikan">Pendidikan</SelectItem>
                      <SelectItem value="kesehatan">Kesehatan</SelectItem>
                      <SelectItem value="ekonomi">Ekonomi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="source_url" className="text-right text-white/70">Sumber URL</Label>
                <Input id="source_url" type="url" placeholder="https://..." className="col-span-3 border-white/10 bg-background text-white" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="spoken_at" className="text-right text-white/70">Tgl Diucapkan</Label>
                <Input id="spoken_at" type="date" className="col-span-3 border-white/10 bg-background text-white [color-scheme:dark]" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="deadline" className="text-right text-white/70">Deadline</Label>
                <Input id="deadline" type="date" className="col-span-3 border-white/10 bg-background text-white [color-scheme:dark]" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" className="border-white/10 bg-transparent hover:bg-white/5 text-white">Batal</Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Simpan Janji</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="glass-card rounded-xl border border-white/10 overflow-hidden">
        <div className="p-4 border-b border-white/5 flex flex-col sm:flex-row gap-4 bg-white/5">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              placeholder="Cari judul janji..."
              className="h-9 w-full rounded-md border border-white/10 bg-background pl-9 pr-4 text-sm text-white focus:border-primary/50 focus:outline-none"
            />
          </div>
          <Button variant="outline" size="sm" className="h-9 border-white/10 bg-background text-white/70">
            <Filter className="w-4 h-4 mr-2" />
            Filter Status
          </Button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-white/40 uppercase bg-white/5 border-b border-white/5">
              <tr>
                <th className="px-6 py-3 font-medium">ID</th>
                <th className="px-6 py-3 font-medium">Judul Janji</th>
                <th className="px-6 py-3 font-medium">Politisi Terkait</th>
                <th className="px-6 py-3 font-medium text-center">Status Global</th>
                <th className="px-6 py-3 font-medium text-center">Jml Laporan</th>
                <th className="px-6 py-3 font-medium text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {promises.map((prm) => (
                <tr key={prm.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-mono text-xs text-white/40">{prm.id}</td>
                  <td className="px-6 py-4 font-medium text-white max-w-xs truncate">{prm.title}</td>
                  <td className="px-6 py-4 text-white/60">{prm.politician}</td>
                  <td className="px-6 py-4 text-center">
                    <Badge variant="outline" className={`font-medium ${getStatusColor(prm.status)}`}>
                      {prm.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-center text-white/60">{prm.reports}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
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
          <span>Menampilkan 1-4 dari 245 janji</span>
          <div className="flex gap-1">
            <Button variant="outline" size="sm" className="h-7 text-xs border-white/10 bg-transparent" disabled>Prev</Button>
            <Button variant="outline" size="sm" className="h-7 text-xs border-white/10 bg-white/5">Next</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
