"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download } from "lucide-react"

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-5" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-balance">
              Hi, I'm <span className="text-primary font-bold">Rajat Pandey</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground text-balance">
              🚀 Aspiring Full Stack Developer | GSSoC '25 Contributor | B.Tech CSE @ SRMIST'28
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Passionate about creating innovative web solutions that blend technical excellence with creative design.
            Currently exploring the intersection of full-stack development, animation, and storytelling.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={scrollToAbout} className="group">
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
