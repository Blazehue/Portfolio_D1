"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function WelcomeAnimation() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Check if animation has been shown before
    const hasShownWelcome = sessionStorage.getItem("hasShownWelcome")
    
    if (hasShownWelcome) {
      setIsVisible(false)
      return
    }

    // Hide after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false)
      sessionStorage.setItem("hasShownWelcome", "true")
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{
            duration: 0.5,
            ease: [0.34, 1.56, 0.64, 1], // Spring-like easing
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm pointer-events-none"
        >
          <div className="text-center space-y-4">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-5xl md:text-7xl font-bold text-foreground"
            >
              Hey!
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl md:text-2xl text-muted-foreground"
            >
              Welcome to my portfolio
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
