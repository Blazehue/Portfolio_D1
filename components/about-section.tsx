import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Linkedin, Github, Instagram } from "lucide-react"
import MagicBento from "./MagicBento"

export function AboutSection() {
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
      <Card className="p-8 bg-card border-border cursor-target">
        <div className="flex items-start justify-between mb-6">
          <h2 className="text-xl font-medium text-foreground">About</h2>
          <span className="text-sm text-muted-foreground">Rajat Pandey</span>
        </div>

        <div className="space-y-4 mb-8">
          <h3 className="text-lg font-medium text-foreground">
            Rajat Pandey — Full Stack Developer & B.Tech CSE Student at SRMIST '28
          </h3>

          <p className="text-muted-foreground leading-relaxed">
            Based in Delhi, India, passionate about impactful digital solutions, blending technical
            expertise with creative storytelling.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-foreground">Get in touch</h3>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" className="flex-1 bg-transparent cursor-target" asChild>
              <a href="https://www.linkedin.com/in/rajat-pandey-58a949257/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" size="sm" className="flex-1 bg-transparent cursor-target" asChild>
              <a href="https://github.com/Blazehue" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" size="sm" className="flex-1 bg-transparent cursor-target" asChild>
              <a href="https://instagram.com/zeber356" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </Card>
    </MagicBento>
  )
}
