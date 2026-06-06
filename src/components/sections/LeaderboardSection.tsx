"use client"

import { politicians } from "@/lib/mock-data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Trophy, AlertTriangle } from "lucide-react"

export function LeaderboardSection() {
  const topPoliticians = [...politicians].sort((a, b) => b.fulfillmentRate - a.fulfillmentRate).slice(0, 5)
  const bottomPoliticians = [...politicians].sort((a, b) => a.fulfillmentRate - b.fulfillmentRate).slice(0, 5)

  return (
    <section id="politisi" className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Leaderboard <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Kredibilitas</span>
          </h2>
          <p className="text-white/60 text-lg">
            Transparansi peringkat berdasarkan persentase aktual janji politik yang telah berhasil ditepati, dinilai langsung oleh publik.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="top" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-white/5 border border-white/10 p-1 rounded-2xl h-auto">
              <TabsTrigger 
                value="top" 
                className="rounded-xl py-3 data-[state=active]:bg-emerald-500/10 data-[state=active]:text-emerald-400 font-semibold transition-all"
              >
                <Trophy className="w-4 h-4 mr-2" />
                Ditepati
              </TabsTrigger>
              <TabsTrigger 
                value="bottom" 
                className="rounded-xl py-3 data-[state=active]:bg-red-500/10 data-[state=active]:text-red-400 font-semibold transition-all"
              >
                <AlertTriangle className="w-4 h-4 mr-2" />
                Diingkari
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="top" className="space-y-4 outline-none">
              {topPoliticians.map((politician, index) => (
                <div 
                  key={politician.id} 
                  className={`flex flex-col sm:flex-row items-center p-4 sm:p-6 glass-card rounded-2xl border ${
                    index === 0 ? 'border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.15)] bg-emerald-500/5' : 'border-white/5 hover:bg-white/5'
                  } transition-all duration-300`}
                >
                  <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
                    <div className={`font-heading font-black text-3xl w-12 text-center mr-4 ${
                      index === 0 ? 'text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]' : 'text-white/20'
                    }`}>
                      #{index + 1}
                    </div>
                    <Avatar className={`h-16 w-16 mr-6 border-2 ${index === 0 ? 'border-emerald-400' : 'border-white/10'}`}>
                      <AvatarImage src={politician.imageUrl} alt={politician.name} />
                      <AvatarFallback className="bg-primary/20">{politician.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 sm:hidden">
                      <h4 className="font-heading font-bold text-lg text-white truncate">{politician.name}</h4>
                      <p className="text-xs text-white/50 truncate">{politician.position}</p>
                    </div>
                  </div>
                  
                  <div className="hidden sm:block flex-1 min-w-0 pr-8">
                    <h4 className="font-heading font-bold text-xl text-white mb-1 truncate">{politician.name}</h4>
                    <p className="text-sm text-white/50 truncate">{politician.position} • <span className="text-white/70">{politician.party}</span></p>
                  </div>
                  
                  <div className="w-full sm:w-48 flex flex-col items-end shrink-0">
                    <div className="flex justify-between w-full items-end mb-2">
                      <span className="text-xs font-medium text-white/40">{politician.promisesCount} Janji</span>
                      <span className="font-heading font-bold text-2xl text-emerald-400">
                        {politician.fulfillmentRate}%
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-black/40 rounded-full overflow-hidden border border-white/5">
                      <div 
                        className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full relative"
                        style={{ width: `${politician.fulfillmentRate}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
            
            <TabsContent value="bottom" className="space-y-4 outline-none">
              {bottomPoliticians.map((politician, index) => (
                <div 
                  key={politician.id} 
                  className={`flex flex-col sm:flex-row items-center p-4 sm:p-6 glass-card rounded-2xl border ${
                    index === 0 ? 'border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.15)] bg-red-500/5' : 'border-white/5 hover:bg-white/5'
                  } transition-all duration-300`}
                >
                  <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
                    <div className={`font-heading font-black text-3xl w-12 text-center mr-4 ${
                      index === 0 ? 'text-red-400 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]' : 'text-white/20'
                    }`}>
                      #{topPoliticians.length + index + 1}
                    </div>
                    <Avatar className={`h-16 w-16 mr-6 border-2 ${index === 0 ? 'border-red-400' : 'border-white/10'}`}>
                      <AvatarImage src={politician.imageUrl} alt={politician.name} />
                      <AvatarFallback className="bg-primary/20">{politician.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 sm:hidden">
                      <h4 className="font-heading font-bold text-lg text-white truncate">{politician.name}</h4>
                      <p className="text-xs text-white/50 truncate">{politician.position}</p>
                    </div>
                  </div>
                  
                  <div className="hidden sm:block flex-1 min-w-0 pr-8">
                    <h4 className="font-heading font-bold text-xl text-white mb-1 truncate">{politician.name}</h4>
                    <p className="text-sm text-white/50 truncate">{politician.position} • <span className="text-white/70">{politician.party}</span></p>
                  </div>
                  
                  <div className="w-full sm:w-48 flex flex-col items-end shrink-0">
                    <div className="flex justify-between w-full items-end mb-2">
                      <span className="text-xs font-medium text-white/40">{politician.promisesCount} Janji</span>
                      <span className="font-heading font-bold text-2xl text-red-400">
                        {politician.fulfillmentRate}%
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-black/40 rounded-full overflow-hidden border border-white/5">
                      <div 
                        className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full relative"
                        style={{ width: `${politician.fulfillmentRate}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
