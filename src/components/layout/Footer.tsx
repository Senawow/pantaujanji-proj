import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative bg-background pt-20 pb-10 border-t border-white/5 overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="md:col-span-5 lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <span className="font-heading font-extrabold text-2xl tracking-tighter text-white">
                Pantau<span className="text-gradient">Janji</span>
              </span>
            </Link>
            <p className="text-base text-white/60 max-w-sm leading-relaxed mb-8">
              Membangun transparansi politik di Indonesia dengan melacak, memverifikasi, 
              dan mendokumentasikan pemenuhan janji para politisi secara kolektif.
            </p>
          </div>
          
          <div className="md:col-span-3 md:col-start-7 lg:col-span-2 lg:col-start-9">
            <h3 className="font-heading font-semibold text-white mb-6 tracking-wide">Platform</h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="#" className="hover:text-primary transition-colors">Semua Politisi</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Trending Janji</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Leaderboard</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Cara Kerja</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-3 lg:col-span-2">
            <h3 className="font-heading font-semibold text-white mb-6 tracking-wide">Legal</h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="#" className="hover:text-primary transition-colors">Syarat & Ketentuan</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Kebijakan Privasi</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Disclaimer Hukum</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} PantauJanji. Hak Cipta Dilindungi.
          </p>
          <div className="flex space-x-6 text-sm text-white/40">
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
