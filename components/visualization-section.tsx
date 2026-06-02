import Image from "next/image"
import { Eye, GitBranch, Layers, Sparkles, type LucideIcon } from "lucide-react"

type VisualizationPanel = {
  description: string
  icon: LucideIcon
  images?: string[]
  labels: string[]
  swatches?: string[]
  title: string
}

const panels: VisualizationPanel[] = [
  {
    icon: GitBranch,
    title: "Input Fusion",
    description:
      "RGB, depth, and lane priors are combined to guide the policy with both appearance and structure.",
    images: [
      "/rgb_image_depthVsLane.png",
      "/depth_image_depthVsLane.png",
      "/lane_image_depthVsLane.png",
    ],
    labels: ["RGB", "Depth", "Lane Mask"],
  },
  {
    icon: Sparkles,
    title: "Curriculum Transition",
    description:
      "The model gradually moves from masked lane-focused views to richer full-scene context.",
    images: [
      "/laneMask.png",
      "/alpha_0.5_laneMask.png",
      "/rgb.png",
    ],
    labels: ["alpha = 0", "alpha = 0.5", "alpha = 1"],
  },
  {
    icon: Eye,
    title: "Grad-CAM++ Focus",
    description:
      "Explainability views highlight road geometry, lane continuation, and obstacle-relevant regions.",
    images: [
      "/rgb_heatmap_for_steer_1.png",
      "/rgb_heatmap_for_steer_2.png",
      "/curriculum_heatmap_for_steer_1.png",
      "/curriculum_heatmap_for_steer_2.png",
    ],
    labels: [
      "RGB Heatmap 1",
      "RGB Heatmap 2",
      "CL Heatmap 1",
      "CL Heatmap 2",
    ],
  },
]

const depthAnythingViews = [
  {
    label: "RGB vs Depth",
    image: "/rgb_vs_depth.png",
  },
  {
    label: "Ground Truth Depth",
    image: "/gt_depth.png",
  },
  {
    label: "DAv2",
    image: "/depth_anything_v2.png",
  },
  {
    label: "DAv2 Fine-Tuned",
    image: "/depth_anything_v2_finetuned.png",
  },
]

export function VisualizationSection() {
  return (
    <section id="visualizations" className="py-24 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Visualizations
          </h2>
          <p className="text-lg text-muted-foreground">
            Poster-inspired views of the fused inputs, curriculum schedule, and explainable
            attention patterns used in VisHybrid-X.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8">
          {panels.map((panel) => (
            <div
              key={panel.title}
              className="rounded-3xl border border-border bg-background p-6 shadow-sm"
            >
              <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="max-w-2xl">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <panel.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    {panel.title}
                  </h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {panel.description}
                  </p>
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {panel.labels.length} views
                </div>
              </div>

              <div
                className={`grid gap-4 ${
                  panel.labels.length === 4 ? "md:grid-cols-2 xl:grid-cols-4" : "md:grid-cols-3"
                }`}
              >
                {panel.labels.map((label, index) => (
                  <div key={panel.labels[index]} className="space-y-2">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      <span>{label}</span>
                      <span>View {index + 1}</span>
                    </div>
                    {panel.images ? (
                      <div className="rounded-2xl border border-border bg-muted/30 p-3">
                        <Image
                          src={panel.images[index]}
                          alt={`${panel.title} ${label}`}
                          width={1200}
                          height={700}
                          className="h-auto max-h-72 w-full object-contain"
                        />
                      </div>
                    ) : panel.swatches ? (
                      <div
                        className={`relative h-24 overflow-hidden rounded-2xl bg-gradient-to-br ${panel.swatches[index]}`}
                      >
                        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:1.25rem_1.25rem]" />
                        <div className="absolute inset-y-4 left-4 w-1/3 rounded-full border border-white/40" />
                        <div className="absolute bottom-4 right-4 h-8 w-8 rounded-full bg-white/30 blur-sm" />
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-6xl rounded-3xl border border-border bg-background p-6 shadow-sm">
          <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <Layers className="h-5 w-5" />
          </div>

          <h3 className="mb-2 text-xl font-semibold text-foreground">
            DepthAnythingV2 Fine-Tune
          </h3>
          <p className="mb-6 max-w-3xl text-sm leading-6 text-muted-foreground">
            These comparisons show the depth supervision setup used in the poster, from
            RGB-versus-depth references to the difference between the base DepthAnythingV2
            model and the fine-tuned variant used for policy learning.
          </p>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {depthAnythingViews.map((view, index) => (
              <div key={view.label} className="space-y-2">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <span>{view.label}</span>
                  <span>Figure {index + 1}</span>
                </div>
                <Image
                  src={view.image}
                  alt={view.label}
                  width={1200}
                  height={900}
                  className="h-auto max-h-80 w-full rounded-2xl border border-border bg-muted/30 p-3 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
