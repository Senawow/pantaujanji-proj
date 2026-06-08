"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, FileText, Flag, AlertTriangle, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
  { month: "Jan", janji: 12 },
  { month: "Feb", janji: 20 },
  { month: "Mar", janji: 15 },
  { month: "Apr", janji: 35 },
  { month: "Mei", janji: 28 },
  { month: "Jun", janji: 45 },
  { month: "Jul", janji: 30 },
  { month: "Agu", janji: 60 },
]

const chartConfig = {
  janji: {
    label: "Janji",
    color: "#34d399", // emerald-400
  },
} satisfies ChartConfig

export default function AdminDashboardPage() {
  const stats = [
    { title: "Total Janji", value: "245", change: "+12", trend: "up", icon: FileText, color: "text-primary" },
    { title: "Total Politisi", value: "42", change: "+3", trend: "up", icon: Users, color: "text-emerald-400" },
    { title: "Total Pengguna", value: "1,204", change: "+128", trend: "up", icon: Users, color: "text-purple-400" },
    { title: "Laporan Pending", value: "7", change: "-2", trend: "down", icon: AlertTriangle, color: "text-red-400" },
  ]

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white">Overview Dashboard</h1>
        <p className="text-sm text-white/50">Sistem metrik dan statistik harian PantauJanji.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon
          return (
            <Card key={i} className="bg-card/40 border-white/10 backdrop-blur-xl">
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium text-white/60">
                  {stat.title}
                </CardTitle>
                <Icon className={`w-4 h-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <p className="text-xs text-white/40 flex items-center mt-1">
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="w-3 h-3 mr-1 text-emerald-400" />
                  ) : (
                    <ArrowDownRight className="w-3 h-3 mr-1 text-red-400" />
                  )}
                  <span className={stat.trend === "up" ? "text-emerald-400" : "text-red-400"}>
                    {stat.change}
                  </span>
                  <span className="ml-1">dari bulan lalu</span>
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card className="bg-card/40 border-white/10 backdrop-blur-xl">
        <CardHeader>
          <CardTitle className="text-white">Grafik Janji per Bulan</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[250px] w-full">
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.1)" />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
                stroke="rgba(255,255,255,0.5)"
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Bar dataKey="janji" fill="var(--color-janji)" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 bg-card/40 border-white/10 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-white">Aktivitas Laporan Terbaru</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <div key={i} className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                      <Flag className="w-4 h-4 text-white/50" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Laporan #{1042 + i} masuk</p>
                      <p className="text-xs text-white/50">Janji: Pembangunan RSUD...</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-yellow-400 border-yellow-400/20 bg-yellow-400/10">Pending</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3 bg-card/40 border-white/10 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-white">Tugas Prioritas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <div className="flex items-center gap-2 text-red-400 font-semibold mb-1">
                  <AlertTriangle className="w-4 h-4" />
                  Moderasi Diperlukan
                </div>
                <p className="text-sm text-red-400/80">
                  Ada 7 laporan yang telah di-flag oleh AI dengan indikasi spam. Segera tinjau.
                </p>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <div className="flex items-center gap-2 text-primary font-semibold mb-1">
                  <Users className="w-4 h-4" />
                  Verifikasi Politisi
                </div>
                <p className="text-sm text-primary/80">
                  2 profil politisi baru ditambahkan oleh kontributor dan menunggu approval.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
