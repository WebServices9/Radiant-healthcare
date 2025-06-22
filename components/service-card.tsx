// import Image from "next/image"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { ChevronRight, Stethoscope, Activity, Scan, HeartPulse } from "lucide-react"

// interface ServiceCardProps {
//   icon: string
//   title: string
//   description: string
//   image?: string 
// }

// export default function ServiceCard({icon, title, description, image }: ServiceCardProps) {
//   const iconMap = {
//     stethoscope: <Stethoscope className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />,
//     activity: <Activity className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />,
//     scan: <Scan className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />,
//     "heart-pulse": <HeartPulse className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />,
//   }

//   const IconComponent = iconMap[icon as keyof typeof iconMap] || (
//     <Stethoscope className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
//   )

//   return (
//     <Card className="overflow-hidden transition-all hover:shadow-lg h-full">
//       {image && (
//         <div className="relative w-full h-40 sm:h-44 md:h-48">
//           <Image
//             src={image}
//             alt={title}
//             layout="fill"
//             objectFit="cover"
//             className="rounded-t-md"
//           />
//         </div>
//       )}
//       <CardContent className="p-3 sm:p-4 md:p-6">
//         <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 sm:h-10 sm:w-10 sm:mb-3 md:h-12 md:w-12 md:mb-4">
//           {IconComponent}
//         </div>
//         <h3 className="mb-1 text-sm font-bold sm:text-base md:text-lg lg:text-xl">{title}</h3>
//         <p className="mb-2 text-xs text-gray-600 sm:text-sm sm:mb-3 md:mb-4 line-clamp-4">{description}</p>
//         <Button variant="link" className="p-0 text-xs text-blue-600 hover:text-blue-700 sm:text-sm mt-auto">
//           Learn More <ChevronRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
//         </Button>
//       </CardContent>
//     </Card>
//   )
// }


import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  image?: string 
}

export default function ServiceCard({ title, description, image }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg h-full">
      {image && (
        <div className="relative w-full h-40 sm:h-44 md:h-48">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-md"
          />
        </div>
      )}
      <CardContent className="p-3 sm:p-4 md:p-6">
        <h3 className="mb-1 text-sm font-bold sm:text-base md:text-lg lg:text-xl">{title}</h3>
        <p className="mb-2 text-xs text-gray-600 sm:text-sm sm:mb-3 md:mb-4 line-clamp-4">{description}</p>
        {/* <Button variant="link" className="p-0 text-xs text-blue-600 hover:text-blue-700 sm:text-sm mt-auto">
          Learn More <ChevronRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
        </Button> */}
      </CardContent>
    </Card>
  )
}
