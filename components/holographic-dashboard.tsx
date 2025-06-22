"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Ambulance, Building2, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HolographicDashboard() {
  const [isVisible, setIsVisible] = useState(false)
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number; speed: number }>>([])

  useEffect(() => {
    setIsVisible(true)

    // Generate random particles for the background
    const newParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 0.5 + 0.1,
    }))
    setParticles(newParticles)

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((particle) => ({
          ...particle,
          y: (particle.y + particle.speed) % 100,
        })),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const quickAccessItems = [
    {
      icon: <Ambulance className="h-6 w-6" />,
      label: "Emergency",
      href: "#emergency",
      color: "from-red-500 to-red-600",
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      label: "Departments",
      href: "#departments",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      label: "Appointments",
      href: "/appointment",
      color: "from-purple-500 to-indigo-600",
    },
    { icon: <MapPin className="h-6 w-6" />, label: "Maps", href: "#map", color: "from-emerald-500 to-green-600" },
  ]

  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 p-1">
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400 opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Holographic grid lines */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiM2MzY2ZjEiIHN0cm9rZS13aWR0aD0iMC41Ij48cGF0aCBkPSJNMCAwaDEwMHYxMDBIMHoiLz48L2c+PC9zdmc+')] opacity-10"></div>

      <div className="relative z-10 p-6 sm:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-center"
        >
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-100 sm:text-3xl">
            Radiant Healthcare Hub
          </h2>
          <p className="mt-2 text-blue-100 text-sm sm:text-base">Advanced healthcare navigation system</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {quickAccessItems.map((item, index) => (
            <Link href={item.href} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(66, 153, 225, 0.5)",
                }}
                className={`flex flex-col items-center justify-center rounded-lg bg-gradient-to-br ${item.color} p-4 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-cyan-500/30 relative overflow-hidden group`}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-lg border border-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="mb-2 rounded-full bg-white/10 p-3">{item.icon}</div>
                  <span className="text-center text-xs font-medium sm:text-sm">{item.label}</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
