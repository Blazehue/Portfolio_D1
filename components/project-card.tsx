import { Card } from "@/components/ui/card"
import MagicBento from "./MagicBento"

interface ProjectCardProps {
  title: string
  description: string
  image: string
}

export function ProjectCard({ title, description, image }: ProjectCardProps) {
  return (
    <MagicBento
      textAutoHide={true}
      enableStars={true}
      enableSpotlight={true}
      enableBorderGlow={true}
      enableTilt={true}
      enableMagnetism={true}
      clickEffect={true}
      spotlightRadius={300}
      particleCount={12}
      glowColor="132, 0, 255"
    >
      <Card className="p-4 bg-card border-border hover:bg-card/80 transition-colors cursor-target">
        <div className="flex gap-3">
          <div className="w-12 h-12 bg-muted rounded-lg flex-shrink-0 flex items-center justify-center">
            <div className="w-6 h-6 bg-primary/20 rounded"></div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-foreground text-sm mb-1">{title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </div>
      </Card>
    </MagicBento>
  )
}
