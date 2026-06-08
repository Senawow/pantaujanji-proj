"use client"

import { Button } from "@/components/ui/button"
import { statistics } from "@/lib/mock-data"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-[10%] left-[60%] w-[50vw] h-[50vw] rounded-full bg-primary/10 blur-[140px] pointer-events-none mix-blend-screen" />
      <div className="absolute top-[40%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-secondary/15 blur-[120px] pointer-events-none mix-blend-screen" />
      
      {/* Grid line overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-center text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm w-fit mb-8">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Platform Transparansi Publik #1
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="font-heading font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tighter text-white leading-[1.1] mb-8">
              Kawal Demokrasi.<br />
              Tuntut <span className="text-gradient">Bukti Nyata.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed mb-10">
              PantauJanji merekam, memverifikasi, dan melacak janji-janji politik. 
              Gunakan suara Anda untuk menuntut transparansi, bukan hanya saat pemilu.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-semibold rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_rgba(0,229,255,0.25)] hover:shadow-[0_0_40px_rgba(0,229,255,0.4)] transition-all" asChild>
                <Link href="/politicians">
                  Telusuri Politisi
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base font-semibold rounded-2xl border-white/20 bg-white/5 hover:bg-white/10 hover:text-white backdrop-blur-md transition-all" asChild>
                <Link href="/login">
                  Laporkan Janji
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Stats Dashboard Graphic */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            style={{ perspective: "1000px" }}
          >
            <div className="relative z-10 glass-card rounded-3xl p-8 border border-white/10 flex flex-col gap-6 transform-gpu">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-heading text-lg font-semibold text-white">Statistik Platform</h3>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-destructive/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-secondary/80"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-2xl p-5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="text-3xl font-heading font-bold text-white mb-1">{statistics.totalPoliticians}</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider font-semibold">Politisi Aktif</div>
                </div>
                <div className="bg-primary/10 rounded-2xl p-5 border border-primary/20 hover:bg-primary/20 transition-colors">
                  <div className="text-3xl font-heading font-bold text-primary mb-1">{statistics.totalPromises}</div>
                  <div className="text-xs text-primary/70 uppercase tracking-wider font-semibold">Total Janji</div>
                </div>
                <div className="bg-secondary/10 rounded-2xl p-5 border border-secondary/20 hover:bg-secondary/20 transition-colors">
                  <div className="text-3xl font-heading font-bold text-secondary mb-1">{statistics.fulfilledPromises}</div>
                  <div className="text-xs text-secondary/70 uppercase tracking-wider font-semibold">Ditepati</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="text-3xl font-heading font-bold text-white mb-1">{statistics.activeUsers.toLocaleString()}</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider font-semibold">Pelapor</div>
                </div>
              </div>
            </div>

            {/* Floating abstract elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 z-20 glass rounded-2xl p-4 flex items-center gap-4 w-48 shadow-2xl border border-white/10"
            >
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <div className="text-sm font-bold text-white">Terverifikasi</div>
                <div className="text-xs text-white/50">2 menit lalu</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
