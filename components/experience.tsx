import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Contributor",
    company: "GirlScript Summer of Code",
    period: "Jul 2025 - Present",
    duration: "3 mos",
    location: "Remote",
    description: "Contributing to open-source projects and collaborating with developers worldwide.",
    skills: ["GitHub", "Git", "Open Source"],
    current: true,
  },
  {
    title: "Technical Associate",
    company: "Liftoff",
    period: "Feb 2025 - Present",
    duration: "8 mos",
    location: "Remote",
    description: "Working on technical projects and contributing to innovative solutions.",
    skills: ["Technical Leadership", "Project Management"],
    current: true,
  },
  {
    title: "Content Creator",
    company: "YouTube",
    period: "Jun 2020 - Present",
    duration: "5 yrs 4 mos",
    location: "Remote",
    description: "Creating educational and entertaining content with 70K+ views across various topics.",
    skills: ["2D Animation", "Character Animation", "Video Editing", "Content Strategy"],
    current: true,
    highlight: "70K+ Views",
  },
  {
    title: "Technical Associate",
    company: "SRMKZILLA",
    period: "Nov 2024 - Sep 2025",
    duration: "11 mos",
    location: "Chennai, India",
    description: "Contributed to technical projects and community initiatives at SRMIST.",
    skills: ["Web Development", "Team Collaboration"],
    current: false,
  },
  {
    title: "Technical Associate",
    company: "Alexa Developers SRM",
    period: "Nov 2024 - Aug 2025",
    duration: "10 mos",
    location: "Chennai, India",
    description: "Worked on Alexa skill development and voice technology projects.",
    skills: ["Voice Technology", "Alexa Skills", "JavaScript"],
    current: false,
  },
]

const education = [
  {
    institution: "SRM IST Chennai",
    degree: "Bachelor of Technology - BTech, Computer Science",
    period: "Aug 2024 - 2028",
    location: "Chennai, India",
    skills: ["C Programming", "Python", "Data Structures", "Algorithms", "Software Engineering"],
  },
  {
    institution: "Father Agnel School",
    degree: "CBSE, Mathematics",
    period: "Jan 2017 - Dec 2023",
    location: "Ghaziabad, India",
    skills: ["Mathematics", "Physics", "Computer Science"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            My professional journey and academic background in technology and development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Experience */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Professional Experience</h3>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <Card key={index} className={`border-border/50 ${exp.current ? "border-primary/30 bg-primary/5" : ""}`}>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <CardTitle className="text-lg">{exp.title}</CardTitle>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      {exp.current && (
                        <Badge variant="default" className="bg-primary/20 text-primary border-primary/30">
                          Current
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period} · {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                    {exp.highlight && <div className="text-sm font-medium text-accent">{exp.highlight}</div>}
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground mb-3 text-pretty">{exp.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="border-border/50">
                  <CardHeader className="pb-3">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{edu.institution}</CardTitle>
                      <p className="text-primary font-medium">{edu.degree}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {edu.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-1">
                      {edu.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Recent Certifications</h4>
              <Card className="border-border/50">
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <h5 className="font-medium">CSS (Basic) - HackerRank</h5>
                    <p className="text-sm text-muted-foreground">Issued Jun 2025</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <h5 className="font-medium">Electronic Arts - Software Engineering Job Simulation</h5>
                    <p className="text-sm text-muted-foreground">Forege • Issued Jun 2025</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
