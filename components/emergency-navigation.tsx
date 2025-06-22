"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mic, Phone, MapPin, AlertTriangle, Ambulance } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EmergencyNavigation() {
  const [isListening, setIsListening] = useState(false)
  const [pulseAnimation, setPulseAnimation] = useState(false)
  const [showEmergencyInfo, setShowEmergencyInfo] = useState(false)

  // Simulate voice activation
  const toggleVoiceActivation = () => {
    setIsListening(!isListening)

    if (!isListening) {
      // Simulate voice recognition after 2 seconds
      setTimeout(() => {
        setShowEmergencyInfo(true)
        setIsListening(false)
      }, 2000)
    }
  }

  // Start pulse animation
  useEffect(() => {
    setPulseAnimation(true)

    const interval = setInterval(() => {
      setPulseAnimation((prev) => !prev)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div id="emergency" className="rounded-xl bg-gradient-to-br from-red-900 via-red-800 to-red-900 p-1 shadow-xl">
      <div className="rounded-lg bg-gray-900/80 p-4 backdrop-blur-sm">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <AlertTriangle className="mr-2 h-5 w-5 text-red-500" />
            <h3 className="text-xl font-bold text-white">Emergency Assistance</h3>
          </div>

          <div className="rounded-full bg-red-900/50 px-3 py-1 text-xs text-red-300">Priority Access</div>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex flex-col items-center justify-center rounded-lg bg-gray-800/50 p-4">
            <motion.div
              className="relative mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-red-900/30"
              animate={{
                boxShadow: pulseAnimation
                  ? ["0 0 0 0 rgba(220, 38, 38, 0.7)", "0 0 0 20px rgba(220, 38, 38, 0)"]
                  : ["0 0 0 0 rgba(220, 38, 38, 0)"],
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <AnimatePresence>
                {isListening && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-red-500"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: [0.2, 0.5, 0.2], scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  />
                )}
              </AnimatePresence>

              <Button
                className={`h-20 w-20 rounded-full ${
                  isListening ? "bg-red-600 text-white" : "bg-red-500 text-white"
                } hover:bg-red-600`}
                onClick={toggleVoiceActivation}
              >
                {isListening ? <Mic className="h-8 w-8 animate-pulse" /> : <Ambulance className="h-8 w-8" />}
              </Button>
            </motion.div>

            <p className="text-center text-sm text-gray-300">
              {isListening ? "Listening... Say 'I need help'" : "Press for Emergency Assistance"}
            </p>
          </div>

          <div className="rounded-lg bg-gray-800/50 p-4">
            <h4 className="mb-3 text-lg font-semibold text-white">Emergency Contacts</h4>

            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-md bg-gray-700/50 p-3">
                <div className="flex items-center">
                  <Phone className="mr-2 h-4 w-4 text-red-400" />
                  <span className="text-sm text-gray-200">Emergency Hotline</span>
                </div>
                <Button size="sm" className="bg-red-600 hover:bg-red-700">
                  Call Now
                </Button>
              </div>

              <div className="flex items-center justify-between rounded-md bg-gray-700/50 p-3">
                <div className="flex items-center">
                  <Ambulance className="mr-2 h-4 w-4 text-red-400" />
                  <span className="text-sm text-gray-200">Ambulance Service</span>
                </div>
                <Button size="sm" className="bg-red-600 hover:bg-red-700">
                  Request
                </Button>
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {showEmergencyInfo && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="rounded-lg bg-red-900/20 p-4">
                <h4 className="mb-3 text-lg font-semibold text-white">Emergency Response Activated</h4>

                <div className="mb-4 flex items-center rounded-md bg-gray-800/70 p-3">
                  <MapPin className="mr-2 h-5 w-5 text-red-400" />
                  <div>
                    <p className="text-sm font-medium text-white">Nearest Emergency Room</p>
                    <p className="text-xs text-gray-300">Radiant Healthcare Hospital - 0.5 miles away</p>
                  </div>
                </div>

                <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                  <Button className="bg-red-600 hover:bg-red-700 w-full">Navigate to ER</Button>
                  <Button variant="outline" className="border-red-700 text-red-300 hover:bg-red-900/30 w-full">
                    Share Location
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
