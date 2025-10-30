"use client"

import { useState, useEffect } from "react"

export function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-card rounded-lg p-6 border border-border">
      <div className="relative w-32 h-32 mx-auto">
        <div className="absolute inset-0 rounded-full border-2 border-border"></div>
        <div className="absolute inset-2 rounded-full bg-muted/20"></div>

        {/* Clock hands */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="absolute w-0.5 h-12 bg-foreground origin-bottom"
            style={{
              transform: `rotate(${(time.getHours() % 12) * 30 + time.getMinutes() * 0.5}deg)`,
              transformOrigin: "50% 100%",
            }}
          ></div>
          <div
            className="absolute w-0.5 h-16 bg-foreground origin-bottom"
            style={{
              transform: `rotate(${time.getMinutes() * 6}deg)`,
              transformOrigin: "50% 100%",
            }}
          ></div>
          <div className="w-2 h-2 bg-foreground rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
