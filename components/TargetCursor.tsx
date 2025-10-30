"use client"

import { useEffect, useRef } from "react"

interface TargetCursorProps {
  spinDuration?: number
  hideDefaultCursor?: boolean
}

export default function TargetCursor({ spinDuration = 2, hideDefaultCursor = true }: TargetCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    if (hideDefaultCursor) {
      document.body.style.cursor = "none"
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target?.classList?.contains("cursor-target") && cursorRef.current) {
        cursorRef.current.style.transform = "translate(-50%, -50%) scale(1.5)"
      }
    }

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target?.classList?.contains("cursor-target") && cursorRef.current) {
        cursorRef.current.style.transform = "translate(-50%, -50%) scale(1)"
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseenter", handleMouseEnter, true)
    document.addEventListener("mouseleave", handleMouseLeave, true)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseenter", handleMouseEnter, true)
      document.removeEventListener("mouseleave", handleMouseLeave, true)
      if (hideDefaultCursor) {
        document.body.style.cursor = "auto"
      }
    }
  }, [hideDefaultCursor])

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-50 w-6 h-6 border-2 border-primary rounded-full transition-transform duration-200"
      style={{
        animation: `spin ${spinDuration}s linear infinite`,
        transform: "translate(-50%, -50%)",
      }}
    />
  )
}
