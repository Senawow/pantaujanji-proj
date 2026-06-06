"use client"

import { trendingPromises } from "@/lib/mock-data"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, Calendar } from "lucide-react"

export function TrendingPromises() {
  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Selesai": return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
      case "Dalam Proses": return "bg-sky-500/10 text-sky-400 border-sky-500/20 shadow-[0_0_15px_rgba(14,165,233,0.1)]"
      case "Ingkar": return "bg-destructive/10 text-red-400 border-destructive/20 shadow-[0_0_15px_rgba(239,68,68,0.1)]"
      default: return "bg-white/5 text-white/70 border-white/10"
    }
  }

  return (
    <section id="trending" className="relative py-24 bg-background z-10">
      <div className="container mx-auto px-4 relative">
        <div className="mb-16 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Trending <span className="text-white/40 font-light">Janji</span>
            </h2>
            <p className="text-white/60 text-lg">
              Pemantauan paling aktif dari masyarakat dalam 7 hari terakhir.
            </p>
          </div>
          <a href="#" className="hidden md:inline-flex items-center text-primary hover:text-white transition-colors mt-4 md:mt-0 group">
            <span className="font-medium mr-2">Lihat Semua</span>
            <span className="w-8 h-[1px] bg-primary group-hover:w-12 group-hover:bg-white transition-all duration-300"></span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingPromises.map((promise) => (
            <div 
              key={promise.id} 
              className="group relative flex flex-col justify-between glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] border border-white/5 hover:border-white/20"
            >
              {/* Subtle inner gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="p-6 relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <Badge variant="outline" className={`rounded-full px-3 py-1 font-medium border ${getStatusStyle(promise.status)}`}>
                    {promise.status}
                  </Badge>
                  <div className="flex items-center text-xs font-semibold text-white/60 bg-white/5 border border-white/5 px-2.5 py-1.5 rounded-full">
                    <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                    {promise.reportsCount}
                  </div>
                </div>
                
                <h3 className="font-heading font-bold text-xl leading-snug text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {promise.title}
                </h3>
              </div>
              
              <div className="p-6 pt-0 mt-auto relative z-10">
                <div className="flex items-center space-x-3 mt-6 pt-6 border-t border-white/5">
                  <Avatar className="h-10 w-10 border border-white/10 ring-2 ring-transparent group-hover:ring-white/20 transition-all">
                    <AvatarImage src={promise.politicianImageUrl} alt={promise.politicianName} />
                    <AvatarFallback className="bg-primary/20 text-primary">{promise.politicianName.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {promise.politicianName}
                    </div>
                    <div className="flex items-center text-xs text-white/50 mt-0.5">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(promise.deadline).toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
