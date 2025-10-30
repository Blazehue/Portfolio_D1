import { Clock } from "@/components/clock"
import { ProjectCard } from "@/components/project-card"
import { AboutSection } from "@/components/about-section"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { LatestWork } from "@/components/latest-work"
import { ContactMe } from "@/components/contact-me"
import { ExperienceCounter } from "@/components/experience-counter"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import TargetCursor from "@/components/TargetCursor"
import { WelcomeAnimation } from "@/components/welcome-animation"

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-3 md:p-6">
      <WelcomeAnimation />
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
        {/* Left Sidebar */}
        <div className="lg:col-span-3 space-y-4 md:space-y-6">
          {/* Header with profile */}
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <Avatar className="w-10 h-10 cursor-target">
              <AvatarImage src="/rajat-profile.png" alt="Rajat Pandey" />
              <AvatarFallback>RP</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="font-medium text-foreground">Rajat Pandey</h1>
              <p className="text-sm text-muted-foreground">Creative Developer</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4 md:gap-6 text-sm flex-wrap">
            <span className="text-foreground">Time</span>
            <span className="text-muted-foreground">Delhi</span>
            <span className="text-muted-foreground">Mode</span>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
          </div>

          {/* Clock Widget */}
          <Clock />

          {/* Projects Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-foreground">Projects</h2>
            <div className="space-y-3">
              <a 
                href="https://github.com/Blazehue/J.A.R.V.I.S"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <ProjectCard
                  title="J.A.R.V.I.S - AI Assistant"
                  description="Python-based desktop AI assistant for Windows with voice/text commands and intelligent automation."
                  image="/project-1.jpg"
                />
              </a>
              <a 
                href="https://github.com/Blazehue/TaskMaster"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <ProjectCard
                  title="TaskMaster"
                  description="Task-management web app with local data persistence, due-date filtering, and progress tracking."
                  image="/project-2.jpg"
                />
              </a>
              <a 
                href="https://github.com/Blazehue/KNBN"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <ProjectCard
                  title="KNBN - Kanban Board"
                  description="Feature-rich Kanban board with drag-and-drop task management, multiple boards, and dark mode."
                  image="/project-3.jpg"
                />
              </a>
              <a 
                href="https://github.com/Blazehue/Crowd_Detec"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <ProjectCard
                  title="Crowd Detection"
                  description="Python project using OpenCV and deep learning for real-time crowd detection and density estimation."
                  image="/project-4.jpg"
                />
              </a>
            </div>
          </div>

          {/* ContactMe */}
          <ContactMe />
        </div>

        {/* Main Content */}
        <div className="lg:col-span-6 space-y-4 md:space-y-6">
          <AboutSection />
          <div className="grid grid-cols-1 gap-4 md:gap-6">
            <LatestWork />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-3 space-y-4 md:space-y-6">
          <ExperienceTimeline />
          <div className="grid grid-cols-1">
            <ExperienceCounter />
          </div>
        </div>
      </div>
    </div>
  )
}
