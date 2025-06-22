"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Phone, Layers } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MapSection() {
  const [showMap, setShowMap] = useState(false)
  const [mapType, setMapType] = useState<"roadmap" | "satellite">("roadmap")
  const phoneNumber = "6389021255"
  const whatsappNumber = "6389021255"

  // Function to generate the appropriate Google Maps URL based on the map type
  const getMapUrl = () => {
    const baseUrl = "https://www.google.com/maps/embed"
    const params = `?pb=!1m18!1m12!1m3!1d3567.0366359565824!2d83.3649!3d26.7338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQ0JzAxLjciTiA4M8KwMjEnNTMuNiJF!5e0!3m2!1sen!2sin!4v1683893277572!5m2!1sen!2sin`
    // For satellite view, we add maptype=satellite
    return `${baseUrl}${params}${mapType === "satellite" ? "&maptype=satellite" : ""}`
  }

  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="p-4 sm:p-6 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <h3 className="text-xl font-bold mb-2">Find Us in Gorakhpur</h3>
        <p className="text-blue-100">Visit our hospital or get in touch with us</p>
      </div>

      <div className="p-4 sm:p-6">
        <div className="flex items-start mb-4">
          <MapPin className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
          <div>
            <h4 className="font-medium">Our Location</h4>
            <p className="text-sm text-gray-600 mt-1">
              Buddh Vihar Part C, Ramgadh tall, taramandal, Gorakhpur, Pipara, Uttar Pradesh 273016
            </p>
          </div>
        </div>

        <div className="flex items-start mb-6">
          <Phone className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
          <div>
            <h4 className="font-medium">Contact Numbers</h4>
            <p className="text-sm text-gray-600 mt-1">
              Phone:{" "}
              <a href={`tel:${phoneNumber}`} className="text-blue-600 hover:underline">
                {phoneNumber}
              </a>
            </p>
            <p className="text-sm text-gray-600 mt-1">
              WhatsApp:{" "}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {whatsappNumber}
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <Button onClick={() => setShowMap(!showMap)} className="bg-blue-600 hover:bg-blue-700">
            {showMap ? "Hide Map" : "Show Map"}
          </Button>

          <Link
            href="https://www.google.com/maps/dir//Buddh+Vihar+Part+C,+Ramgadh+tall,+taramandal,+Gorakhpur,+Pipara,+Uttar+Pradesh+273016"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full sm:w-auto">
              <Navigation className="mr-2 h-4 w-4" />
              Get Directions
            </Button>
          </Link>
        </div>

        {showMap && (
          <>
            <div className="mb-3">
              <Tabs defaultValue={mapType} onValueChange={(value) => setMapType(value as "roadmap" | "satellite")}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="roadmap" className="flex items-center">
                    <Layers className="mr-2 h-4 w-4" />
                    Standard Map
                  </TabsTrigger>
                  <TabsTrigger value="satellite" className="flex items-center">
                    <Layers className="mr-2 h-4 w-4" />
                    Satellite View
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className="rounded-lg overflow-hidden h-[300px] sm:h-[400px]">
              <iframe
                src={getMapUrl()}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
