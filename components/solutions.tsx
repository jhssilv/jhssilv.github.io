import { Search, Layers, FileJson, Zap, Database, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const solutions = [
  {
    title: "Production-Ready RAG Pipelines",
    description:
      "End-to-end retrieval-augmented generation systems designed for enterprise workloads with low latency and high accuracy.",
    icon: Search,
    features: [
      {
        icon: Layers,
        label: "Hybrid Search",
        detail: "BM25 + Vector similarity",
      },
      {
        icon: Database,
        label: "Custom Chunking",
        detail: "Semantic boundaries",
      },
      {
        icon: CheckCircle,
        label: "Postgres/pgvector",
        detail: "Battle-tested storage",
      },
    ],
    codeSnippet: `# RAG Pipeline Config
embedding_model: "sentence-transformers/all-MiniLM-L6-v2"
vector_store: "pgvector"
search_type: "hybrid"
top_k: 10
reranker: "cross-encoder"`,
  },
  {
    title: "AI-Driven Data Extraction",
    description:
      "Transform unstructured documents into clean, validated JSON with schema enforcement and high-throughput processing.",
    icon: FileJson,
    features: [
      {
        icon: FileJson,
        label: "Unstructured-to-JSON",
        detail: "Any document format",
      },
      {
        icon: CheckCircle,
        label: "Pydantic Validation",
        detail: "Type-safe schemas",
      },
      {
        icon: Zap,
        label: "High Throughput",
        detail: "Async batch processing",
      },
    ],
    codeSnippet: `class ExtractedEntity(BaseModel):
    name: str
    entity_type: Literal["person", "org", "loc"]
    confidence: float = Field(ge=0, le=1)
    source_span: tuple[int, int]`,
  },
]

export function Solutions() {
  return (
    <section id="solutions" className="border-t border-border/40 bg-secondary/20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-mono text-sm text-primary">// solutions</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Technical Solutions
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Battle-tested architectures ready for production deployment.
            Each solution is modular, observable, and designed for scale.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {solutions.map((solution) => (
            <Card
              key={solution.title}
              className="overflow-hidden border-border/60 bg-card"
            >
              <CardHeader className="border-b border-border/40 pb-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md border border-border/60 bg-secondary">
                      <solution.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {solution.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {/* Features List */}
                <div className="border-b border-border/40 p-6">
                  <div className="grid gap-4 sm:grid-cols-3">
                    {solution.features.map((feature) => (
                      <div key={feature.label} className="flex items-start gap-3">
                        <feature.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {feature.label}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {feature.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Code Snippet */}
                <div className="bg-background/50 p-6">
                  <pre className="overflow-x-auto font-mono text-xs leading-relaxed text-muted-foreground">
                    <code>{solution.codeSnippet}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
