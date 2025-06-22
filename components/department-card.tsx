import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import DynamicIcon from "./dynamic-icon"

interface DepartmentCardProps {
  icon: string
  title: string
  description: string
}

export default function DepartmentCard({ icon, title, description }: DepartmentCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg h-full">
      <CardContent className="p-3 sm:p-4 md:p-6">
        <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 sm:h-10 sm:w-10 sm:mb-3 md:h-12 md:w-12 md:mb-4">
          <DynamicIcon iconName={icon} />
        </div>
        <h3 className="mb-1 text-sm font-bold sm:text-base md:text-lg lg:text-xl">{title}</h3>
        <p className="mb-2 text-xs text-gray-600 sm:text-sm sm:mb-3 md:mb-4 line-clamp-4">{description}</p>
        {/* <Button variant="link" className="p-0 text-xs text-blue-600 hover:text-blue-700 sm:text-sm">
          Learn More <ChevronRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
        </Button> */}
      </CardContent>
    </Card>
  )
}
