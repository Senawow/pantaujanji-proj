import { HeroSection } from "@/components/sections/HeroSection"
import { TrendingPromises } from "@/components/sections/TrendingPromises"
import { LeaderboardSection } from "@/components/sections/LeaderboardSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrendingPromises />
      <LeaderboardSection />
    </>
  )
}
