"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Award, ShieldCheck, Flag, CheckCircle2, ChevronRight, Settings, Share2 } from "lucide-react"

const userProfile = {
  id: "USR-001",
  username: "andi_wijaya",
  joinDate: "Maret 2024",
  tier: "Gold",
  points: 1250,
  reliability: "98%",
  badges: ["Pemula", "Wartawan Warga", "Mata Elang", "Verifikator Handal"],
  stats: {
    reportsSubmitted: 45,
    reportsApproved: 40,
    votesCast: 120,
    agreedWithMajority: 115
  }
}

export default function UserProfilePage({ params }: { params: { id: string } }) {
  const getTierColor = (tier: string) => {
    switch(tier) {
      case 'Gold': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30'
      case 'Silver': return 'text-slate-300 bg-slate-300/10 border-slate-300/30'
      case 'Bronze': return 'text-amber-600 bg-amber-600/10 border-amber-600/30'
      default: return 'text-white/60 bg-white/5 border-white/10'
    }
  }

  return (
    <div className="container mx-auto px-4 pt-32 pb-20 min-h-screen">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: ID & Stats */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-4 space-y-6"
        >
          <div className="glass-card rounded-3xl p-8 border border-white/10 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10 blur-2xl"></div>
            
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 p-1">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-3xl font-bold text-white">
                {userProfile.username.charAt(0).toUpperCase()}
              </div>
            </div>
            
            <h1 className="font-heading font-extrabold text-2xl text-white mb-1">@{userProfile.username}</h1>
            <p className="text-white/50 text-sm mb-6">Bergabung sejak {userProfile.joinDate}</p>

            <Badge className={`px-4 py-1.5 text-sm mb-6 shadow-lg ${getTierColor(userProfile.tier)}`} variant="outline">
              <Award className="w-4 h-4 mr-2" />
              Tier {userProfile.tier}
            </Badge>

            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <div className="text-xs text-white/50 mb-1">Reputasi</div>
                <div className="text-2xl font-bold text-primary">{userProfile.points} <span className="text-sm font-normal text-white/40">pts</span></div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <div className="text-xs text-white/50 mb-1">Akurasi</div>
                <div className="text-2xl font-bold text-emerald-400">{userProfile.reliability}</div>
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <Button variant="outline" className="flex-1 bg-white/5 border-white/10 text-white hover:bg-white/10">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" className="bg-white/5 border-white/10 text-white hover:bg-white/10 px-3">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-6 border border-white/10">
            <h3 className="font-heading font-semibold text-lg text-white mb-4">Badges & Pencapaian</h3>
            <div className="flex flex-wrap gap-2">
              {userProfile.badges.map((badge, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Award className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-white/80">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Activity Details */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-8 space-y-6"
        >
          <div className="glass-card rounded-3xl p-8 border border-white/10">
            <h2 className="font-heading font-bold text-2xl text-white mb-6">Statistik Kontribusi</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-gradient-to-br from-black/40 to-black/20 p-5 rounded-2xl border border-white/5 flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-xl text-primary">
                  <Flag className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{userProfile.stats.reportsSubmitted}</div>
                  <div className="text-sm text-white/50">Laporan Dibuat</div>
                  <div className="text-xs text-emerald-400 mt-1">{userProfile.stats.reportsApproved} diterima ({Math.round(userProfile.stats.reportsApproved/userProfile.stats.reportsSubmitted*100)}%)</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-black/40 to-black/20 p-5 rounded-2xl border border-white/5 flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-xl text-secondary">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{userProfile.stats.votesCast}</div>
                  <div className="text-sm text-white/50">Vote Verifikasi</div>
                  <div className="text-xs text-emerald-400 mt-1">{userProfile.stats.agreedWithMajority} sesuai mayoritas</div>
                </div>
              </div>
            </div>

            <h3 className="font-heading font-semibold text-xl text-white mb-4">Aktivitas Terkini</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group">
                  <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-white/50 mb-1">{i === 0 ? 'Hari ini' : `${i+2} hari lalu`}</div>
                    <div className="text-white font-medium mb-1 group-hover:text-primary transition-colors">Laporan Anda diterima: Pembangunan RSUD</div>
                    <div className="text-sm text-white/70">Mendapatkan +50 Poin Reputasi.</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-white transition-colors" />
                </div>
              ))}
              <Button variant="link" className="text-primary w-full mt-2">Lihat Semua Aktivitas</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
