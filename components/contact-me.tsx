import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail } from "lucide-react"
import MagicBento from "./MagicBento"

export function ContactMe() {
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
      <Card className="p-6 bg-card border-border cursor-target">
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-foreground">Contact Me</h3>

          <p className="text-sm text-muted-foreground leading-relaxed">
            Let's connect! Whether you have a project idea, collaboration request, or just want to say hi, feel free to
            reach out.
          </p>

          <div className="space-y-3">
            <div className="text-sm text-foreground">pandrajat123@gmail.com</div>

            <Button className="w-full cursor-target" asChild>
              <a href="mailto:pandrajat123@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </a>
            </Button>
          </div>
        </div>
      </Card>
    </MagicBento>
  )
}
