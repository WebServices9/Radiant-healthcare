"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface BookAppointmentButtonProps {
  variant?: "default" | "large" | "floating"
  className?: string
}

export default function BookAppointmentButton({ variant = "default", className = "" }: BookAppointmentButtonProps) {
  const [showModal, setShowModal] = useState(false)

  // Determine button size and style based on variant
  const getButtonClasses = () => {
    const baseClasses =
      "relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 active:scale-[0.98]"

    switch (variant) {
      case "large":
        return `${baseClasses} text-lg py-4 px-8 rounded-xl ${className}`
      case "floating":
        return `${baseClasses} fixed bottom-6 right-6 z-50 rounded-full p-4 md:bottom-8 md:right-8 md:p-4 lg:hidden ${className}`
      default:
        return `${baseClasses} py-2 px-6 rounded-lg text-sm md:text-base ${className}`
    }
  }

  return (
    <>
      <Button className={getButtonClasses()} onClick={() => setShowModal(true)} aria-label="Book an appointment">
        {variant === "floating" ? (
          <Calendar className="h-6 w-6" />
        ) : (
          <>
            <span className="relative z-10">Book Appointment</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
          </>
        )}
      </Button>

      {/* Quick Booking Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-xl"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <h3 className="mb-4 text-xl font-bold text-gray-900">Quick Appointment</h3>

              <p className="mb-6 text-sm text-gray-600">
                Select your preferred date and time for a consultation, or proceed to our full booking page.
              </p>

              <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-center rounded-lg border border-gray-200 p-3">
                  <Calendar className="mr-2 h-5 w-5 text-blue-600" />
                  <span className="text-sm">Select Date</span>
                </div>
                <div className="flex items-center rounded-lg border border-gray-200 p-3">
                  <Clock className="mr-2 h-5 w-5 text-blue-600" />
                  <span className="text-sm">Select Time</span>
                </div>
              </div>

              <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
                <Button
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                  onClick={() => setShowModal(false)}
                >
                  Book Now
                </Button>
                <Link href="/appointment" passHref className="w-full">
                  <Button
                    variant="outline"
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                    onClick={() => setShowModal(false)}
                  >
                    Full Booking Page
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
