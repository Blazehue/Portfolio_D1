import { Card } from "@/components/ui/card"

export function SideProjects() {
  const projects = [
    { name: "J.A.R.V.I.S - AI Assistant", year: "2025", link: "https://github.com/Blazehue/J.A.R.V.I.S" },
    { name: "TaskMaster", year: "2025", link: "https://github.com/Blazehue/TaskMaster" },
    { name: "KNBN - Kanban Board", year: "2025", link: "https://github.com/Blazehue/KNBN" },
    { name: "Crowd Detection", year: "2025", link: "https://github.com/Blazehue/Crowd_Detec" },
  ]

  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="font-medium text-foreground mb-4">Side Projects</h3>
      <div className="space-y-3">
        {projects.map((project, index) => (
          <a 
            key={index} 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block space-y-1 hover:opacity-70 transition-opacity"
          >
            <div className="text-sm text-foreground">{project.name}</div>
            <div className="text-xs text-muted-foreground">{project.year}</div>
          </a>
        ))}
      </div>
    </Card>
  )
}
