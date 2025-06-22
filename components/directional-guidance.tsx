"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, ArrowRight, StepBackIcon as Stairs, CableCarIcon as Elevator, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DirectionalGuidance() {
  const [currentStep, setCurrentStep] = useState(0)

  const navigationSteps = [
    {
      instruction: "Enter through the main entrance",
      icon: <ArrowRight className="h-5 w-5" />,
      distance: "Start here",
    },
    {
      instruction: "Turn right at the information desk",
      icon: <ArrowUpRight className="h-5 w-5" />,
      distance: "50 meters",
    },
    {
      instruction: "Take the elevator to Floor 2",
      icon: <Elevator className="h-5 w-5" />,
      distance: "100 meters",
    },
    {
      instruction: "Turn left out of the elevator",
      icon: <ArrowUpRight className="h-5 w-5 transform -scale-x-100" />,
      distance: "10 meters",
    },
    {
      instruction: "Continue to the end of the hallway",
      icon: <ArrowRight className="h-5 w-5" />,
      distance: "80 meters",
    },
    {
      instruction: "Cardiology department will be on your right",
      icon: <MapPin className="h-5 w-5" />,
      distance: "Destination",
    },
  ]

  const handleNextStep = () => {
    if (currentStep < navigationSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="mb-4 text-center">
      <h3 className="text-xl font-bold text-white">Indoor Navigation</h3>
      <p className="mt-1 text-sm text-blue-100">Follow the guidance to reach your destination</p>

      <div className="rounded-lg bg-gray-900/80 p-4 backdrop-blur-sm">
        <div className="relative mb-6 h-60 overflow-hidden rounded-lg bg-gray-800">
          {/* 3D-like environment visualization */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMzMDQwNjAiIHN0cm9rZS13aWR0aD0iMC41Ij48cGF0aCBkPSJNMCAwaDEwMHYxMDBIMHoiLz48L2c+PC9zdmc+')] opacity-30"></div>

          {/* Animated path */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400"
            initial={{ width: "0%" }}
            animate={{ width: `${(currentStep / (navigationSteps.length - 1)) * 100}%` }}
            transition={{ duration: 0.5 }}
          />

          {/* Floating direction indicators */}
          <div className="absolute bottom-4 left-4 rounded-lg bg-gray-900/70 p-3 backdrop-blur-sm">
            <div className="flex items-center">
              <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-900/50 text-blue-400">
                {navigationSteps[currentStep].icon}
              </div>
              <div>
                <p className="text-sm font-medium text-white">{navigationSteps[currentStep].instruction}</p>
                <p className="text-xs text-gray-400">{navigationSteps[currentStep].distance}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between rounded-lg bg-gray-800 p-3">
          <div className="text-sm text-gray-300">
            Step {currentStep + 1} of {navigationSteps.length}
          </div>
          <div className="flex space-x-2">
            <Button
              size="sm"
              variant="outline"
              onClick={handlePrevStep}
              disabled={currentStep === 0}
              className="border-gray-700 text-gray-300 hover:bg-gray-700 disabled:opacity-50"
            >
              Previous
            </Button>
            <Button
              size="sm"
              onClick={handleNextStep}
              disabled={currentStep === navigationSteps.length - 1}
              className="bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
            >
              Next
            </Button>
          </div>
        </div>

        <div className="rounded-lg bg-gray-800 p-3">
          <h4 className="mb-2 text-sm font-medium text-white">Navigation Options</h4>
          <div className="flex space-x-2">
            <Button size="sm" variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-700">
              <Stairs className="mr-1 h-4 w-4" />
              Stairs
            </Button>
            <Button size="sm" variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-700">
              <Elevator className="mr-1 h-4 w-4" />
              Elevator
            </Button>
            <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700">
              <ArrowRight className="mr-1 h-4 w-4" />
              Shortest Path
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
