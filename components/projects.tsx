import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Calendar } from "lucide-react"

const projects = [
  {
    title: "J.A.R.V.I.S - AI Desktop Assistant",
    description:
      "Jarvis V2 🤖 – A Python-based desktop AI assistant for Windows that manages applications, files, and system settings, responds to voice/text commands, takes screenshots, and provides intelligent, context-aware assistance.",
    image: "/jarvis-ai-assistant-interface.jpg",
    technologies: ["Python", "AI", "Voice Recognition", "Automation", "Windows API"],
    github: "https://github.com/Blazehue/J.A.R.V.I.S",
    demo: "#",
    featured: true,
    highlight: "🤖 AI Assistant",
    date: "Oct 2025",
  },
  {
    title: "RestAPIBlog - Production Backend",
    description:
      "Blog REST API – A production-ready RESTful backend built with Node.js, Express, and MongoDB. Features JWT authentication, role-based access control, and advanced security features for scalable blog applications.",
    image: "/rest-api-blog-backend.jpg",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "REST API"],
    github: "https://github.com/Blazehue/RestAPIBlog",
    demo: "#",
    featured: true,
    date: "Oct 2025",
  },
  {
    title: "Translynk - AI Translation Tool",
    description:
      "An AI-powered multi-modal translation tool built with Next.js and Flask. Supports text, speech, and image translation across several languages with smart text-to-speech capabilities.",
    image: "/translynk-translation-app.jpg",
    technologies: ["Next.js", "Flask", "AI", "TypeScript", "Multi-modal"],
    github: "https://github.com/Blazehue/Translynk",
    demo: "#",
    featured: false,
    date: "Oct 2025",
  },
  {
    title: "Pomify - Pomodoro Productivity App",
    description:
      "A modern productivity web app designed to help users stay focused using the Pomodoro Technique. Includes customizable timers, task tracking, analytics, and progress visualization.",
    image: "/pomify-productivity-app.jpg",
    technologies: ["Next.js", "React", "TypeScript", "Productivity", "Analytics"],
    github: "https://github.com/Blazehue/Pomify",
    demo: "#",
    featured: false,
    date: "Oct 2025",
  },
  {
    title: "BLOG - Modern React Platform",
    description:
      "A modern React + TypeScript blog platform with a magazine-inspired design, featuring authentication, dark mode, and full CRUD functionality. Currently a prototype with backend integration planned.",
    image: "/modern-blog-platform.jpg",
    technologies: ["React", "TypeScript", "Authentication", "Dark Mode", "CRUD"],
    github: "https://github.com/Blazehue/BLOG",
    demo: "#",
    featured: false,
    date: "Oct 2025",
  },
  {
    title: "TaskMaster - Task Management App",
    description:
      "A task-management and productivity web app developed using TypeScript. Enables users to create, organize, and track daily tasks with features like local data persistence, due-date filtering, and progress tracking.",
    image: "/taskmaster-task-manager.jpg",
    technologies: ["TypeScript", "React", "Local Storage", "Task Management"],
    github: "https://github.com/Blazehue/TaskMaster",
    demo: "#",
    featured: false,
    date: "Oct 2025",
  },
  {
    title: "KNBN - Kanban Board",
    description:
      "A sleek, feature-rich Kanban board built with Next.js, TypeScript, and React. Offers smooth drag-and-drop task management, multiple boards, dark mode, and local data persistence.",
    image: "/kanban-board-app.jpg",
    technologies: ["Next.js", "TypeScript", "Drag & Drop", "Dark Mode"],
    github: "https://github.com/Blazehue/KNBN",
    demo: "#",
    featured: false,
    date: "Oct 2025",
  },
  {
    title: "Expenza - Personal Finance Tracker",
    description:
      "A modern, privacy-first personal finance tracker built with Next.js, React, and TypeScript. Empowers users to manage budgets, analyze spending, and track expenses locally with no servers required.",
    image: "/expenza-finance-tracker.jpg",
    technologies: ["Next.js", "React", "TypeScript", "Finance", "Privacy-First"],
    github: "https://github.com/Blazehue/Expenza",
    demo: "#",
    featured: false,
    date: "Oct 2025",
  },
  {
    title: "HIZE26 - IEEE Event Website",
    description:
      "HIZE 2026 is an immersive, modern website for IEEE Computer Society's flagship High Impact Zonal Events. Built with Next.js, TypeScript, and Tailwind CSS, featuring a claymorphic design and particle effects.",
    image: "/hize-ieee-event-website.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Animations", "Events"],
    github: "https://github.com/Blazehue/HIZE26",
    demo: "#",
    featured: false,
    date: "Oct 2025",
  },
  {
    title: "FillFlow - PDF Form Editor",
    description:
      "A browser-based React app for creating, editing, and auto-filling PDF forms with precision field mapping, visual templates, and local data storage. Future updates include batch processing and cloud sync.",
    image: "/fillflow-pdf-editor.jpg",
    technologies: ["React", "JavaScript", "PDF", "Forms", "Local Storage"],
    github: "https://github.com/Blazehue/FillFlow",
    demo: "#",
    featured: false,
    date: "Oct 2025",
  },
  {
    title: "Gitnalyzer - Git Analytics Tool",
    description:
      "An intelligent Git repository analytics tool developed in TypeScript. Provides detailed insights into commit trends, contributor activity, and repository performance for developers and teams.",
    image: "/gitnalyzer-analytics.jpg",
    technologies: ["TypeScript", "Git", "Analytics", "Data Visualization"],
    github: "https://github.com/Blazehue/Gitnalyzer",
    demo: "#",
    featured: false,
    date: "Oct 2025",
  },
  {
    title: "HEZER - Space Shooter Game",
    description:
      "A browser-based endless space shooter game built with LittleJS and JavaScript. Features a third-person pseudo-3D perspective, dynamic star fields, real-time collision detection, and adaptive difficulty.",
    image: "/hezer-space-shooter.jpg",
    technologies: ["JavaScript", "LittleJS", "Game Dev", "Canvas", "3D"],
    github: "https://github.com/Blazehue/HEZER",
    demo: "#",
    featured: false,
    date: "Oct 2025",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of my recent work in development, innovation, and creative content
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.highlight && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary/20 text-primary border-primary/30">{project.highlight}</Badge>
                  </div>
                )}
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {project.date}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-pretty">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  {project.github !== "#" && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo !== "#" && (
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {project.demo.includes("youtube") ? "Watch" : "Demo"}
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/Blazehue" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
