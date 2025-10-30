import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Eye } from "lucide-react"

export function CVSection() {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="text-center space-y-3">
        <div className="text-xs text-muted-foreground">CV</div>
        <div className="space-y-2">
          <Button variant="outline" size="sm" className="w-full bg-transparent">
            <Eye className="w-3 h-3 mr-1" />
            <span className="text-xs">View</span>
          </Button>
          <Button variant="outline" size="sm" className="w-full bg-transparent">
            <Download className="w-3 h-3 mr-1" />
            <span className="text-xs">Download</span>
          </Button>
        </div>
      </div>
    </Card>
  )
}
