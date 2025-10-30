import { Card } from "@/components/ui/card"
import MagicBento from "./MagicBento"

export function ExperienceTimeline() {
  const experiences = [
    {
      year: "2024 — Now",
      title: "Full Stack Developer",
      company: "Freelance & Projects",
    },
    {
      year: "2024",
      title: "GSSoC Contributor",
      company: "GirlScript Foundation",
    },
    {
      year: "2023 — 2024",
      title: "Content Creator",
      company: "YouTube Channel",
    },
    {
      year: "2022 — 2028",
      title: "B.Tech CSE Student",
      company: "SRMIST Chennai",
    },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium text-foreground">Experience & Education</h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <MagicBento
            key={index}
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
            <Card className="p-4 bg-card border-border cursor-target">
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">{exp.year}</div>
                <div className="font-medium text-foreground text-sm">{exp.title}</div>
                <div className="text-xs text-muted-foreground">{exp.company}</div>
              </div>
            </Card>
          </MagicBento>
        ))}
      </div>
    </div>
  )
}
