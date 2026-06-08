"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Check } from "lucide-react"

export default function RegisterPage() {
  const [step, setStep] = useState(1)

  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-[20%] right-[20%] w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[100px] pointer-events-none mix-blend-screen" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[450px] z-10"
      >
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <span className="font-heading font-extrabold text-3xl tracking-tighter text-white">
              Pantau<span className="text-gradient">Janji</span>
            </span>
          </Link>
          <h1 className="font-heading font-bold text-2xl text-white mb-2">Mulai Mengawal Demokrasi</h1>
          <p className="text-white/60 text-sm">Bergabunglah untuk menuntut bukti nyata dari para wakil kita.</p>
        </div>

        <div className="glass-card rounded-3xl p-8 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
          
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6 flex gap-2">
                  <div className="h-1 flex-1 bg-primary rounded-full"></div>
                  <div className="h-1 flex-1 bg-white/10 rounded-full"></div>
                </div>

                <Button className="w-full h-12 mb-6 rounded-xl bg-white text-black hover:bg-white/90 font-medium">
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  Daftar dengan Google
                </Button>

                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10"></div>
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-[#0a0a0a] px-2 text-white/40">Atau daftar dengan email</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white/70">Nama Lengkap</Label>
                    <Input id="name" placeholder="John Doe" className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus-visible:ring-primary/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white/70">Email</Label>
                    <Input id="email" type="email" placeholder="nama@email.com" className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus-visible:ring-primary/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-white/70">Password</Label>
                    <Input id="password" type="password" className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus-visible:ring-primary/50" />
                  </div>
                  <Button 
                    onClick={() => setStep(2)}
                    className="w-full h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-bold mt-6 shadow-[0_0_20px_rgba(0,229,255,0.2)]"
                  >
                    Lanjutkan
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6 flex gap-2">
                  <div className="h-1 flex-1 bg-primary/40 rounded-full cursor-pointer" onClick={() => setStep(1)}></div>
                  <div className="h-1 flex-1 bg-primary rounded-full"></div>
                </div>

                <h3 className="text-lg font-heading font-semibold text-white mb-4">Lengkapi Profil Anda</h3>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-white/70">Provinsi Domisili</Label>
                    <Select>
                      <SelectTrigger className="border-white/10 bg-white/5 h-12 rounded-xl text-white">
                        <SelectValue placeholder="Pilih provinsi..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="jabar">Jawa Barat</SelectItem>
                        <SelectItem value="jateng">Jawa Tengah</SelectItem>
                        <SelectItem value="jatim">Jawa Timur</SelectItem>
                        <SelectItem value="dki">DKI Jakarta</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white/70">Kabupaten/Kota</Label>
                    <Select>
                      <SelectTrigger className="border-white/10 bg-white/5 h-12 rounded-xl text-white">
                        <SelectValue placeholder="Pilih kota/kabupaten..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bandung">Kota Bandung</SelectItem>
                        <SelectItem value="cimahi">Kota Cimahi</SelectItem>
                        <SelectItem value="bandung_barat">Kab. Bandung Barat</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl flex items-start gap-3 mt-4">
                    <Check className="w-5 h-5 text-emerald-400 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-emerald-400 mb-1">Bonus Onboarding!</h4>
                      <p className="text-xs text-emerald-400/80">Selesaikan pendaftaran untuk mendapatkan badge "Pemula" dan 100 Poin Reputasi pertama Anda.</p>
                    </div>
                  </div>

                  <Link href="/profile/me">
                    <Button className="w-full h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-bold mt-6 shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                      Selesai & Mulai Pantau
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {step === 1 && (
          <p className="text-center text-sm text-white/50 mt-8">
            Sudah punya akun? <Link href="/login" className="text-primary hover:underline font-medium">Masuk di sini</Link>
          </p>
        )}
      </motion.div>
    </div>
  )
}
