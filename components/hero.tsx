import { ArrowRight, Database, Cpu, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen pt-16">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-40" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex min-h-[calc(100vh-4rem)] flex-col justify-center py-20">
          {/* Status Badge */}
          <div className="mb-8 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              Available for contracts
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Production-Grade
            <br />
            <span className="text-primary">AI Data Engineering.</span>
          </h1>

          {/* Sub-headline */}
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Building scalable RAG pipelines and automated data extraction systems
            with a focus on privacy, latency, and deterministic output.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 font-mono">
              Explore Technical Demos
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="font-mono">
              View Architecture
            </Button>
          </div>

          {/* Tech Stack Pills */}
          <div className="mt-16 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-2">
              <Database className="h-4 w-4 text-primary" />
              <span className="font-mono text-xs text-muted-foreground">
                pgvector
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-2">
              <Cpu className="h-4 w-4 text-primary" />
              <span className="font-mono text-xs text-muted-foreground">
                Llama 3 / Mistral
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-2">
              <Shield className="h-4 w-4 text-primary" />
              <span className="font-mono text-xs text-muted-foreground">
                Privacy-first
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
