import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Overview } from "@/components/overview"
import { Solutions } from "@/components/solutions"
import { Architecture } from "@/components/architecture"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Overview />
      <Solutions />
      <Architecture />
      <Footer />
    </main>
  )
}
