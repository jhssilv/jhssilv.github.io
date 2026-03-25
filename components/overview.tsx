import { Sparkles, GitBranch, Workflow } from "lucide-react"

const approaches = [
  {
    icon: Sparkles,
    title: "Vector Semantics",
    description:
      "Leveraging embeddings and semantic search to build intelligent retrieval systems that understand context, not just keywords.",
  },
  {
    icon: GitBranch,
    title: "Custom LLM Orchestration",
    description:
      "Designing multi-agent workflows with deterministic outputs, structured prompts, and robust error handling for production reliability.",
  },
  {
    icon: Workflow,
    title: "Robust Data Pipelines",
    description:
      "Building fault-tolerant ETL processes with observability, automated quality checks, and efficient batch/stream processing.",
  },
]

export function Overview() {
  return (
    <section id="overview" className="border-t border-border/40 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-mono text-sm text-primary">// approach</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The Engineering Approach
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Privacy-first, local-hosted AI solutions using open-source models.
            Every system is designed for auditability, reproducibility, and
            deterministic behavior.
          </p>
        </div>

        {/* Approach Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {approaches.map((approach, index) => (
            <div
              key={approach.title}
              className="group relative rounded-lg border border-border/60 bg-card p-6 transition-all hover:border-primary/40 hover:bg-card/80"
            >
              {/* Index Number */}
              <span className="absolute right-4 top-4 font-mono text-xs text-muted-foreground/50">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md border border-border/60 bg-secondary">
                <approach.icon className="h-5 w-5 text-primary" />
              </div>

              {/* Content */}
              <h3 className="mb-2 font-semibold text-foreground">
                {approach.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {approach.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Philosophy */}
        <div className="mt-16 rounded-lg border border-border/60 bg-secondary/30 p-6">
          <div className="flex items-start gap-4">
            <div className="hidden h-px flex-1 bg-border/60 sm:mt-3 sm:block" />
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">{">"}</span> Focused on Llama 3,
              Mistral, and other open-weight models for maximum control, data
              sovereignty, and cost efficiency.
            </p>
            <div className="hidden h-px flex-1 bg-border/60 sm:mt-3 sm:block" />
          </div>
        </div>
      </div>
    </section>
  )
}
