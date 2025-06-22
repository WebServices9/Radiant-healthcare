import { Card, CardContent } from "@/components/ui/card"

interface StatCardProps {
  value: string
  label: string
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <Card className="overflow-hidden bg-white shadow-md transition-all hover:shadow-lg">
      <CardContent className="p-2 text-center sm:p-3 md:p-4 lg:p-6">
        <p className="text-lg font-bold text-blue-600 sm:text-xl md:text-2xl lg:text-3xl">{value}</p>
        <p className="text-xs text-gray-600 sm:text-sm">{label}</p>
      </CardContent>
    </Card>
  )
}
