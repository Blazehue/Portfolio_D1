import { Card } from "@/components/ui/card"

export function ExperienceCounter() {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="text-center">
        <div className="text-xs text-muted-foreground mb-2">Years of Undergrad</div>
        <div className="text-4xl font-bold text-foreground">2</div>
      </div>
    </Card>
  )
}
