import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Music, Palette, Users } from "lucide-react"

const skills = [
  "Python",
  "C Programming",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "HTML/CSS",
  "Git/GitHub",
  "Character Animation",
  "2D Animation",
  "Acoustic Guitar",
]

const interests = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Building end-to-end web applications with modern frameworks",
  },
  {
    icon: Palette,
    title: "Creative Storytelling",
    description: "Experimenting with visuals, animations, and illustrations",
  },
  {
    icon: Music,
    title: "Music & Guitar",
    description: "Playing acoustic guitar and expressing creativity through music",
  },
  { icon: Users, title: "Collaboration", description: "Working with teams to create innovative solutions" },
]

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Get to know more about my journey, skills, and what drives my passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Hello everyone!</h3>
              <p className="text-muted-foreground text-pretty">
                I'm an undergraduate student at SRMIST, Chennai, pursuing Computer Science and Engineering, with a
                strong enthusiasm for full-stack web development. My passion for programming drives me to explore
                various programming languages, frameworks, and tools, aiming to create innovative and user-friendly web
                solutions.
              </p>
              <p className="text-muted-foreground text-pretty">
                I love blending my technical skills with creativity to build projects that are both functional and
                visually appealing. Outside of academics, I enjoy playing the guitar, which lets me unwind and express
                myself through music. I'm also deeply invested in storytelling, experimenting with visuals, animations,
                and illustrations to bring narratives to life.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Top Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid gap-4">
              {interests.map((interest) => (
                <Card key={interest.title} className="border-border/50 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <interest.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold">{interest.title}</h4>
                        <p className="text-sm text-muted-foreground text-pretty">{interest.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
