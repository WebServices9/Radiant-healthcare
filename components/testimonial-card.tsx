import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  title: string
  content: string
  author: string
}

export default function TestimonialCard({ title, content, author }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardContent className="p-3 sm:p-4 md:p-6">
        <h3 className="mb-2 text-sm font-bold sm:text-base md:text-lg">{title}</h3>
        <div className="mb-2 flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400 sm:h-4 sm:w-4" />
          ))}
        </div>
        <p className="mb-3 text-xs text-gray-600 sm:text-sm line-clamp-4">{content}</p>
        <p className="text-xs font-medium sm:text-sm">- {author}</p>
      </CardContent>
    </Card>
  )
}
