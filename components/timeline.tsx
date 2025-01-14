import { Card, CardContent } from "@/components/ui/card"

interface TimelineItem {
  company: string
  role: string
  startDate: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative container mx-auto px-6 py-10">
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-[5%] w-1 bg-gray-200"></div>
      {items.map((item, index) => (
        <TimelineCard key={index} item={item} index={index} />
      ))}
    </div>
  )
}

function TimelineCard({ item, index }: { item: TimelineItem; index: number }) {
  return (
    <div className={`mb-0.5 flex justify-between ${index % 2 === 0 ? 'flex-row-reverse' : 'items-center'}`}>
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
      </div>
      <Card className="order-1 w-5/12 px-6 py-4">
        <CardContent className="p-0">
          <h3 className="mb-1 font-bold text-gray-800 text-xl">{item.company}</h3>
          <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100 text-italic">{item.role}</p>
          <p className="text-xs text-gray-500">{item.startDate}</p>
        </CardContent>
      </Card>
    </div>
  )
}

