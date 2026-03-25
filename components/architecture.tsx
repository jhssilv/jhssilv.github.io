"use client"

import { useState } from "react"
import { Box, Layers, ArrowRight, Server, Database, Cpu, FileText, Cog, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

const diagrams = [
  {
    id: "rag",
    title: "Scalable RAG Flow",
    description: "Document ingestion → Chunking → Embedding → Retrieval → Generation",
  },
  {
    id: "extraction",
    title: "Asynchronous Extraction Pipeline",
    description: "Input Queue → Worker Pool → LLM Processing → Validation → Output",
  },
]

const ragSteps = [
  { icon: FileText, label: "Documents", sublabel: "PDF, HTML, MD" },
  { icon: Cog, label: "Chunker", sublabel: "Semantic Split" },
  { icon: Cpu, label: "Embedder", sublabel: "MiniLM / BGE" },
  { icon: Database, label: "pgvector", sublabel: "HNSW Index" },
  { icon: Layers, label: "Retriever", sublabel: "Hybrid Search" },
  { icon: Box, label: "LLM", sublabel: "Llama 3" },
]

const extractionSteps = [
  { icon: FileText, label: "Input Queue", sublabel: "Redis / SQS" },
  { icon: Server, label: "Worker Pool", sublabel: "Async Python" },
  { icon: Cpu, label: "LLM Extraction", sublabel: "Structured Output" },
  { icon: CheckCircle2, label: "Pydantic", sublabel: "Validation" },
  { icon: Database, label: "Output Store", sublabel: "Postgres / S3" },
]

const techStack = [
  "FastAPI",
  "Docker",
  "Python",
  "pgvector",
  "Redis",
  "Kubernetes",
]

export function Architecture() {
  const [activeDiagram, setActiveDiagram] = useState<"rag" | "extraction">("rag")

  const steps = activeDiagram === "rag" ? ragSteps : extractionSteps

  return (
    <section id="architecture" className="border-t border-border/40 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-mono text-sm text-primary">// architecture</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            System Architecture
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            High-fidelity diagrams showcasing the core technical flows.
            Built with modern, battle-tested infrastructure.
          </p>
        </div>

        {/* Diagram Tabs */}
        <div className="mb-8 flex flex-wrap gap-4">
          {diagrams.map((diagram) => (
            <button
              key={diagram.id}
              onClick={() => setActiveDiagram(diagram.id as "rag" | "extraction")}
              className={cn(
                "rounded-lg border px-4 py-3 text-left transition-all",
                activeDiagram === diagram.id
                  ? "border-primary bg-primary/10"
                  : "border-border/60 bg-card hover:border-primary/40"
              )}
            >
              <p
                className={cn(
                  "font-mono text-sm font-medium",
                  activeDiagram === diagram.id
                    ? "text-primary"
                    : "text-foreground"
                )}
              >
                {diagram.title}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {diagram.description}
              </p>
            </button>
          ))}
        </div>

        {/* Diagram Visualization */}
        <div className="rounded-lg border border-border/60 bg-card p-6 md:p-10">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            {steps.map((step, index) => (
              <div key={step.label} className="flex items-center gap-2 md:gap-4">
                {/* Step Box */}
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-border/60 bg-secondary md:h-20 md:w-20">
                    <step.icon className="h-6 w-6 text-primary md:h-8 md:w-8" />
                  </div>
                  <p className="mt-2 text-center font-mono text-xs font-medium text-foreground">
                    {step.label}
                  </p>
                  <p className="text-center text-[10px] text-muted-foreground">
                    {step.sublabel}
                  </p>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground/50" />
                )}
              </div>
            ))}
          </div>

          {/* Tech Stack Tags */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border/60 bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
