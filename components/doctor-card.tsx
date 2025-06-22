import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface DoctorCardProps {
  name: string
  qualifications: string
  specialty: string
  imageUrl: string
}

export default function DoctorCard({ name, qualifications, specialty }: DoctorCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg h-full">
      {/* <div className="relative h-40 w-full sm:h-48 md:h-56">
        <Image
          src={imageUrl || "/placeholder.svg?height=300&width=300&query=doctor"}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
        />
      </div> */}
      <CardContent className="p-3 text-center sm:p-4 md:p-6">
        <h3 className="mb-1 text-sm font-bold sm:text-base md:text-lg">{name}</h3>
        <p className="mb-1 text-xs text-gray-600">{qualifications}</p>
        <p className="mb-3 text-blue-600 text-xs sm:text-sm line-clamp-2">{specialty}</p>
      </CardContent>
    </Card>
  )
}
