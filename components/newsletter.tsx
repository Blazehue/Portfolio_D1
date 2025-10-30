import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <Card className="p-6 bg-card border-border">
      <h3 className="font-medium text-foreground mb-2">Newsletter</h3>
      <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
        We were captivated by an extraordinary vision, reimagining our brand with unparalleled creativity.
      </p>
      <div className="space-y-3">
        <Input placeholder="name@email.com" className="text-xs bg-background border-border" />
        <Button size="sm" className="w-full">
          Sign Up
        </Button>
      </div>
    </Card>
  )
}
