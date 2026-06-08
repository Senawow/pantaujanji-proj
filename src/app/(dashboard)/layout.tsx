import { Sidebar } from "@/components/layout/Sidebar"
import { DashboardTopbar } from "@/components/layout/DashboardTopbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen w-full bg-background selection:bg-primary/30 selection:text-primary">
      {/* Sidebar for Desktop */}
      <Sidebar />
      
      <div className="flex flex-1 flex-col sm:pl-64">
        {/* Topbar */}
        <DashboardTopbar />
        
        {/* Main Content Area */}
        <main className="flex-1">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
