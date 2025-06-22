
"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Users,
  Clock,
  ChevronRight,
  Activity,
  Brain,
  Baby,
  Bone,
  Stethoscope,
  Eye,
  Pill,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface Department {
  id: string
  name: string
  icon: React.ReactNode
  waitTime: number
  specialists: number
  location: string
}

export default function DepartmentGrid() {
  const [hoveredDept, setHoveredDept] = useState<string | null>(null)

  const departments: Department[] = [
    {
      id: "cardiology",
      name: "Cardiology",
      icon: <Activity className="h-6 w-6" />,
      waitTime: 15,
      specialists: 8,
      location: "Floor 1, Wing A",
    },
    {
      id: "neurology",
      name: "Neurology",
      icon: <Brain className="h-6 w-6" />,
      waitTime: 25,
      specialists: 6,
      location: "Floor 1, Wing B",
    },
    {
      id: "pediatrics",
      name: "Pediatrics",
      icon: <Baby className="h-6 w-6" />,
      waitTime: 10,
      specialists: 12,
      location: "Floor 2, Wing A",
    },
    {
      id: "orthopedics",
      name: "Orthopedics",
      icon: <Bone className="h-6 w-6" />,
      waitTime: 30,
      specialists: 5,
      location: "Floor 2, Wing B",
    },
    {
      id: "internal-medicine",
      name: "Internal Medicine",
      icon: <Stethoscope className="h-6 w-6" />,
      waitTime: 20,
      specialists: 10,
      location: "Floor 1, Wing C",
    },
    {
      id: "ophthalmology",
      name: "Ophthalmology",
      icon: <Eye className="h-6 w-6" />,
      waitTime: 35,
      specialists: 4,
      location: "Floor 3, Wing A",
    },
    {
      id: "gastroenterology",
      name: "Gastroenterology",
      icon: <Pill className="h-6 w-6" />,
      waitTime: 40,
      specialists: 3,
      location: "Floor 3, Wing B",
    },
    {
      id: "obgyn",
      name: "Obstetrics & Gynecology",
      icon: <Baby className="h-6 w-6" />,
      waitTime: 25,
      specialists: 7,
      location: "Floor 2, Wing C",
    },
  ]

  return (
    <div className="rounded-xl bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 p-1 shadow-xl">
      <div className="rounded-lg bg-gray-900/80 p-4 backdrop-blur-sm">
        <div className="mb-6 text-center">
          <h3 className="text-xl font-bold text-white sm:text-2xl">Hospital Departments</h3>
          <p className="mt-2 text-blue-100 text-sm">Real-time department information and availability</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {departments.map((dept) => (
            <motion.div
              key={dept.id}
              className={`
                relative overflow-hidden rounded-lg border border-gray-800 bg-gradient-to-br 
                from-gray-800 to-gray-900 p-4 transition-all duration-300
                ${hoveredDept === dept.id ? "shadow-lg shadow-blue-500/20" : ""}
              `}
              onHoverStart={() => setHoveredDept(dept.id)}
              onHoverEnd={() => setHoveredDept(null)}
              whileHover={{ scale: 1.02 }}
            >
              {/* Holographic overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>

              {/* Animated data stream */}
              <AnimatePresence>
                {hoveredDept === dept.id && (
                  <motion.div
                    className="absolute inset-0 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {[...Array(10)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute h-px bg-blue-400/30"
                        style={{
                          left: `${Math.random() * 100}%`,
                          width: `${Math.random() * 30 + 10}%`,
                        }}
                        initial={{ top: -10, opacity: 0.5 }}
                        animate={{ top: "120%", opacity: [0.2, 0.5, 0.2] }}
                        transition={{
                          duration: Math.random() * 2 + 1,
                          repeat: Infinity,
                          repeatType: "loop",
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="relative z-10">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900/50 text-blue-400">
                    {dept.icon}
                  </div>

                  <div className="flex items-center rounded-full bg-blue-900/30 px-2 py-1">
                    <Clock className="mr-1 h-3 w-3 text-blue-400" />
                    <span className="text-xs text-blue-300">{dept.waitTime} min wait</span>
                  </div>
                </div>

                <h4 className="mb-2 text-lg font-bold text-white">{dept.name}</h4>

                <div className="mb-3 flex flex-col space-y-2">
                  <div className="flex items-center text-xs text-gray-300">
                    <Users className="mr-1 h-3 w-3 text-blue-400" />
                    <span>{dept.specialists} specialists available</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-300">
                    <MapPin className="mr-1 h-3 w-3 text-blue-400" />
                    <span>{dept.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Button variant="link" className="text-blue-400 hover:text-blue-300">
            View All Departments <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
