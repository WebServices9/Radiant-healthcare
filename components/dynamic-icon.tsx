"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Stethoscope, Activity, Scan, HeartPulse, Brain, Baby, Scissors, Pill } from "lucide-react"

interface DynamicIconProps {
  iconName: string
  className?: string
}

export default function DynamicIcon({ iconName, className = "h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" }: DynamicIconProps) {
  const [Icon, setIcon] = useState<React.ComponentType<any> | null>(null)

  useEffect(() => {
    // Predefined map of icons for better mobile performance
    const iconMap: Record<string, React.ComponentType<any>> = {
      stethoscope: Stethoscope,
      activity: Activity,
      scan: Scan,
      "heart-pulse": HeartPulse,
      brain: Brain,
      baby: Baby,
      scissors: Scissors,
      pill: Pill,
    }

    if (iconMap[iconName]) {
      setIcon(() => iconMap[iconName])
    } else {
      // Fallback to dynamic import only if not in predefined map
      const loadIcon = async () => {
        try {
          const icons = await import("lucide-react")
          // Capitalize first letter for proper import
          const formattedIconName = iconName.charAt(0).toUpperCase() + iconName.slice(1)
          // @ts-ignore - the icon name is a string
          if (icons[formattedIconName]) {
            // @ts-ignore - the icon name is a string
            setIcon(() => icons[formattedIconName])
          }
        } catch (error) {
          console.error("Failed to load icon:", error)
        }
      }
      loadIcon()
    }
  }, [iconName])

  if (!Icon) {
    return <div className={className} /> // Loading placeholder
  }

  return <Icon className={className} />
}
