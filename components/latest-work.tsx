import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function LatestWork() {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-foreground">Latest Work</h3>
        <Button variant="ghost" size="sm" asChild>
          <a href="https://blog-umber-six.vercel.app/" target="_blank" rel="noopener noreferrer">
            <span className="text-xs">click here</span>
            <ExternalLink className="w-3 h-3 ml-1" />
          </a>
        </Button>
      </div>

      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4 overflow-hidden">
        <img 
          src="/blog-thumbnail.jpg" 
          alt="BLOG - Editorial Magazine"
          className="w-full h-full object-cover"
        />
      </div>

      <p className="text-xs text-muted-foreground">
        A modern React + TypeScript blog platform with a magazine-inspired design, featuring authentication, dark mode, and full CRUD functionality.
      </p>
    </Card>
  )
}
