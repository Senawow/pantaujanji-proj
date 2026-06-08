"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Trophy, TrendingUp, TrendingDown, Minus, Filter } from "lucide-react"
import Link from "next/link"

const leaderboard = [
  { rank: 1, id: "POL-004", name: "Ridwan Kamil", party: "Independen", score: 92, promises: 24, fulfilled: 20, trend: "up", image: "https://i.pravatar.cc/150?u=a048581f4e29026701d" },
  { rank: 2, id: "POL-003", name: "Ir. Hj. Siti Aminah", party: "Partai C", score: 85, promises: 15, fulfilled: 12, trend: "up", image: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
  { rank: 3, id: "POL-006", name: "Anies Baswedan", party: "Independen", score: 82, promises: 28, fulfilled: 22, trend: "same", image: "https://i.pravatar.cc/150?u=a042581f4e29026024e" },
  { rank: 4, id: "POL-001", name: "H. Ahmad Hidayat", party: "Partai A", score: 75, promises: 12, fulfilled: 8, trend: "down", image: "https://i.pravatar.cc/150?u=a042581f4e29026024d" },
  { rank: 5, id: "POL-005", name: "Ganjar Pranowo", party: "Partai D", score: 68, promises: 30, fulfilled: 18, trend: "down", image: "https://i.pravatar.cc/150?u=a04258114e29026702d" },
  { rank: 6, id: "POL-002", name: "Drs. Budi Mulyono", party: "Partai B", score: 45, promises: 8, fulfilled: 2, trend: "down", image: "https://i.pravatar.cc/150?u=a04258a2462d826712d" },
]

export default function LeaderboardPage() {
  const getTrendIcon = (trend: string) => {
    switch(trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-emerald-400" />
      case 'down': return <TrendingDown className="w-4 h-4 text-red-400" />
      default: return <Minus className="w-4 h-4 text-white/40" />
    }
  }

  return (
    <div className="container mx-auto px-4 pt-32 pb-20 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6"
      >
        <div>
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm w-fit mb-4">
            <Trophy className="w-4 h-4 mr-2" />
            Peringkat Nasional
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl tracking-tighter text-white mb-4">
            Papan <span className="text-gradient">Reputasi.</span>
          </h1>
          <p className="text-white/60 max-w-xl text-lg">
            Siapa yang paling menepati janji? Peringkat berdasarkan persentase janji yang telah diselesaikan.
          </p>
        </div>
        
        <div className="w-full md:w-auto flex gap-2">
          <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-xl">
            <Filter className="w-4 h-4 mr-2 text-white/50" />
            Filter Daerah
          </Button>
          <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-xl">
            Filter Partai
          </Button>
        </div>
      </motion.div>

      <div className="space-y-4">
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 text-xs uppercase tracking-wider font-semibold text-white/40 border-b border-white/10">
          <div className="col-span-1 text-center">Peringkat</div>
          <div className="col-span-5">Politisi</div>
          <div className="col-span-2 text-center">Trend</div>
          <div className="col-span-2 text-center">Rasio Janji</div>
          <div className="col-span-2 text-right">Skor Reputasi</div>
        </div>

        {/* Leaderboard Items */}
        {leaderboard.map((pol, i) => (
          <motion.div
            key={pol.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Link href={`/politicians/${pol.id}`}>
              <div className="glass-card rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-primary/40 transition-all duration-300 group grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                
                {/* Rank */}
                <div className="col-span-1 flex justify-center order-1 md:order-none absolute md:relative top-4 right-4 md:top-auto md:right-auto">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg
                    ${pol.rank === 1 ? 'bg-gradient-to-br from-yellow-300 to-yellow-600 text-black shadow-[0_0_15px_rgba(253,224,71,0.5)]' : 
                      pol.rank === 2 ? 'bg-gradient-to-br from-slate-300 to-slate-500 text-black' : 
                      pol.rank === 3 ? 'bg-gradient-to-br from-amber-600 to-amber-800 text-white' : 
                      'bg-white/5 text-white/50'}`}>
                    #{pol.rank}
                  </div>
                </div>

                {/* Profile */}
                <div className="col-span-12 md:col-span-5 flex items-center gap-4 order-2 md:order-none">
                  <div className={`w-14 h-14 rounded-full overflow-hidden border-2 transition-colors
                    ${pol.rank === 1 ? 'border-yellow-400' : 'border-white/10 group-hover:border-primary/50'}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={pol.image} alt={pol.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-primary transition-colors">
                      {pol.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="h-5 text-[10px] border-white/10 bg-white/5 text-white/50 px-1.5">{pol.party}</Badge>
                    </div>
                  </div>
                </div>

                {/* Trend */}
                <div className="col-span-4 md:col-span-2 flex md:justify-center items-center gap-2 order-3 md:order-none">
                  <div className="md:hidden text-xs text-white/40">Trend:</div>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                    {getTrendIcon(pol.trend)}
                  </div>
                </div>

                {/* Promise Ratio */}
                <div className="col-span-4 md:col-span-2 flex flex-col md:items-center order-4 md:order-none">
                  <div className="md:hidden text-xs text-white/40 mb-1">Rasio Janji:</div>
                  <div className="flex items-end gap-1">
                    <span className="text-white font-medium">{pol.fulfilled}</span>
                    <span className="text-white/40 text-sm">/ {pol.promises}</span>
                  </div>
                  <div className="w-full max-w-[100px] h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${pol.score > 70 ? 'bg-emerald-500' : pol.score > 50 ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{ width: `${(pol.fulfilled / pol.promises) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Score */}
                <div className="col-span-4 md:col-span-2 flex flex-col items-end order-5 md:order-none">
                  <div className="md:hidden text-xs text-white/40 mb-1">Skor:</div>
                  <div className="text-3xl font-heading font-extrabold text-white">
                    {pol.score}<span className="text-lg text-white/40 font-normal">%</span>
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
