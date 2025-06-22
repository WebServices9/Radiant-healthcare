"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Search, ZoomIn, ZoomOut, RotateCw, Navigation, Activity, Brain, Stethoscope } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Ambulance } from "./icons"

export default function InteractiveMap() {
  const [activeFloor, setActiveFloor] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [zoomLevel, setZoomLevel] = useState(1)
  const [isRotating, setIsRotating] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)

  const floors = [1, 2, 3, 4]

  const locations = [
    { id: "cardiology", name: "Cardiology", floor: 1, x: 30, y: 40 },
    { id: "neurology", name: "Neurology", floor: 1, x: 70, y: 30 },
    { id: "pediatrics", name: "Pediatrics", floor: 2, x: 40, y: 60 },
    { id: "orthopedics", name: "Orthopedics", floor: 2, x: 60, y: 50 },
    { id: "emergency", name: "Emergency", floor: 1, x: 50, y: 20 },
    { id: "pharmacy", name: "Pharmacy", floor: 1, x: 20, y: 70 },
    { id: "cafeteria", name: "Cafeteria", floor: 3, x: 80, y: 80 },
    { id: "lab", name: "Laboratory", floor: 3, x: 30, y: 50 },
  ]

  const filteredLocations = locations.filter(
    (location) =>
      location.floor === activeFloor &&
      (searchQuery === "" || location.name.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const handleZoomIn = () => {
    if (zoomLevel < 2) setZoomLevel((prev) => prev + 0.2)
  }

  const handleZoomOut = () => {
    if (zoomLevel > 0.6) setZoomLevel((prev) => prev - 0.2)
  }

  const toggleRotation = () => {
    setIsRotating(!isRotating)
  }

  const handleLocationSelect = (locationId: string) => {
    setSelectedLocation(locationId === selectedLocation ? null : locationId)
  }

  return (
    <div className="rounded-xl bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 p-1 shadow-xl">
      <div className="rounded-lg bg-gray-900/80 p-4 backdrop-blur-sm">
        <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h3 className="mb-2 text-xl font-bold text-white sm:mb-0">Interactive Hospital Map</h3>

          <div className="relative">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search departments, facilities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
            />
          </div>
        </div>

        <div className="flex space-x-2 mb-4">
          {floors.map((floor) => (
            <Button
              key={floor}
              variant={activeFloor === floor ? "default" : "outline"}
              className={`${
                activeFloor === floor
                  ? "bg-blue-600 text-white"
                  : "border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
              onClick={() => setActiveFloor(floor)}
            >
              Floor {floor}
            </Button>
          ))}
        </div>

        <div className="relative h-[400px] overflow-hidden rounded-lg bg-gray-800 shadow-inner">
          {/* Map controls */}
          <div className="absolute right-4 top-4 z-10 flex flex-col space-y-2">
            <Button size="sm" variant="outline" onClick={handleZoomIn} className="bg-gray-800/80 border-gray-700">
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="outline" onClick={handleZoomOut} className="bg-gray-800/80 border-gray-700">
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={toggleRotation}
              className={`bg-gray-800/80 border-gray-700 ${isRotating ? "text-blue-400" : "text-gray-400"}`}
            >
              <RotateCw className="h-4 w-4" />
            </Button>
          </div>

          {/* Map container */}
          <div
            ref={mapContainerRef}
            className="relative h-full w-full"
            style={{
              transform: `scale(${zoomLevel}) ${isRotating ? "rotate(45deg)" : ""}`,
              transition: "transform 0.5s ease",
            }}
          >
            {/* Floor plan background - simplified for this example */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMzMDQwNjAiIHN0cm9rZS13aWR0aD0iMC41Ij48cGF0aCBkPSJNMCAwaDEwMHYxMDBIMHoiLz48L2c+PC9zdmc+')] opacity-30"></div>

            {/* Department locations */}
            {filteredLocations.map((location) => (
              <motion.div
                key={location.id}
                className={`absolute cursor-pointer ${selectedLocation === location.id ? "z-20" : "z-10"}`}
                style={{
                  left: `${location.x}%`,
                  top: `${location.y}%`,
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => handleLocationSelect(location.id)}
              >
                <div
                  className={`
                  flex h-10 w-10 items-center justify-center rounded-full 
                  ${location.id === "emergency" ? "bg-red-500/20 text-red-400" : "bg-blue-500/20 text-blue-400"}
                  ${selectedLocation === location.id ? "ring-2 ring-blue-400 ring-opacity-70" : ""}
                `}
                >
                  <div className="relative">
                    {/* Pulsing effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-full ${
                        location.id === "emergency" ? "bg-red-500" : "bg-blue-500"
                      }`}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 0, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                      }}
                    />
                    <div className="relative z-10">
                      {location.id === "emergency" ? (
                        <Ambulance className="h-5 w-5" />
                      ) : location.id === "pharmacy" ? (
                        <Activity className="h-5 w-5" />
                      ) : location.id === "cardiology" ? (
                        <Activity className="h-5 w-5" />
                      ) : location.id === "neurology" ? (
                        <Brain className="h-5 w-5" />
                      ) : (
                        <Stethoscope className="h-5 w-5" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Location label */}
                <div className="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800/80 px-2 py-1 text-xs text-white backdrop-blur-sm">
                  {location.name}
                </div>

                {/* Navigation path (only shown when selected) */}
                {selectedLocation === location.id && (
                  <motion.div
                    className="absolute left-1/2 top-full z-0 h-40 w-1 -translate-x-1/2"
                    initial={{ height: 0 }}
                    animate={{ height: 100 }}
                    style={{
                      background: "linear-gradient(to bottom, rgba(59, 130, 246, 0.5), transparent)",
                    }}
                  />
                )}
              </motion.div>
            ))}

            {/* Selected location details */}
            {selectedLocation && (
              <motion.div
                className="absolute bottom-4 left-4 z-30 max-w-xs rounded-lg bg-gray-800/90 p-4 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                <h4 className="mb-2 text-lg font-bold text-white">
                  {locations.find((l) => l.id === selectedLocation)?.name}
                </h4>
                <p className="mb-3 text-sm text-gray-300">
                  Floor {locations.find((l) => l.id === selectedLocation)?.floor}
                </p>
                <Button size="sm" className="w-full bg-blue-600 text-white">
                  <Navigation className="mr-2 h-4 w-4" />
                  Navigate Here
                </Button>
              </motion.div>
            )}
          </div>
        </div>

        <div className="mt-4 text-center text-xs text-gray-400">
          <p>Use the controls to zoom, rotate and explore the hospital map</p>
          <p className="mt-1">Click on any location for details and navigation</p>
        </div>
      </div>
    </div>
  )
}
