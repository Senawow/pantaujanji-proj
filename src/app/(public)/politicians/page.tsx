"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, ChevronRight, User } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const politicians = [
  { id: "POL-001", name: "H. Ahmad Hidayat", party: "Partai A", position: "Gubernur Jabar", promises: 12, rating: "Baik", image: "https://i.pravatar.cc/150?u=a042581f4e29026024d" },
  { id: "POL-002", name: "Drs. Budi Mulyono", party: "Partai B", position: "Bupati Bandung", promises: 8, rating: "Buruk", image: "https://i.pravatar.cc/150?u=a04258a2462d826712d" },
  { id: "POL-003", name: "Ir. Hj. Siti Aminah", party: "Partai C", position: "Walikota Depok", promises: 15, rating: "Baik", image: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
  { id: "POL-004", name: "Ridwan Kamil", party: "Independen", position: "Mantan Gubernur", promises: 24, rating: "Sangat Baik", image: "https://i.pravatar.cc/150?u=a048581f4e29026701d" },
  { id: "POL-005", name: "Ganjar Pranowo", party: "Partai D", position: "Mantan Gubernur", promises: 30, rating: "Cukup", image: "https://i.pravatar.cc/150?u=a04258114e29026702d" },
  { id: "POL-006", name: "Anies Baswedan", party: "Independen", position: "Mantan Gubernur", promises: 28, rating: "Baik", image: "https://i.pravatar.cc/150?u=a042581f4e29026024e" },
]

export default function PoliticiansPage() {
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
            Direktori Politisi
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl tracking-tighter text-white mb-4">
            Kenali <span className="text-gradient">Wakilmu.</span>
          </h1>
          <p className="text-white/60 max-w-xl text-lg">
            Pantau rekam jejak, janji, dan tingkat penyelesaian dari setiap politisi. Jangan beli kucing dalam karung.
          </p>
        </div>
        
        <div className="w-full md:w-auto relative group">
          <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl group-hover:bg-primary/30 transition-all duration-300"></div>
          <div className="relative flex items-center glass-card rounded-xl border border-white/10 p-2 w-full md:w-[300px]">
            <Search className="w-5 h-5 text-white/40 ml-2" />
            <input 
              type="text" 
              placeholder="Cari nama atau daerah..." 
              className="bg-transparent border-none outline-none text-white placeholder:text-white/40 w-full px-3 py-1"
            />
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {politicians.map((pol, i) => (
          <motion.div
            key={pol.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link href={`/politicians/${pol.id}`} className="block h-full">
              <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300 group h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors"></div>
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-primary/50 transition-colors">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={pol.image} alt={pol.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white group-hover:text-primary transition-colors">{pol.name}</h3>
                    <p className="text-white/60 text-sm">{pol.position}</p>
                    <div className="mt-1 flex items-center gap-2 text-xs">
                      <Badge variant="outline" className="border-white/10 bg-white/5 text-white/70">{pol.party}</Badge>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center">
                  <div>
                    <div className="text-2xl font-bold text-white">{pol.promises}</div>
                    <div className="text-xs text-white/50">Janji Tercatat</div>
                  </div>
                  <div className="text-right">
                    <Badge className={
                      pol.rating.includes('Baik') ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 
                      pol.rating === 'Cukup' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' : 
                      'bg-red-500/20 text-red-400 border-red-500/30'
                    } variant="outline">
                      Reputasi {pol.rating}
                    </Badge>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
