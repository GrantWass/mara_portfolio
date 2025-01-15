"use client"
import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { TimelinePopup } from "./timeline-popup"

interface TimelineItem {
  company: string
  role: string
  startDate: string
  bulletPoints: string[]
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null)

  return (
    <div className="relative container mx-auto px-6 py-10">
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-[5%] w-1 bg-gray-200"></div>
      {items.map((item, index) => (
        <TimelineCard 
          key={index} 
          item={item} 
          index={index} 
          onClick={() => setSelectedItem(item)}
        />
      ))}
      {selectedItem && (
        <TimelinePopup 
          item={selectedItem} 
          isOpen={!!selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      )}
    </div>
  )
}

interface TimelineCardProps {
  item: TimelineItem
  index: number
  onClick: () => void
}

function TimelineCard({ item, index, onClick }: TimelineCardProps) {
  return (
    <div 
      className={`mb-0.5 flex justify-between ${index % 2 === 0 ? 'flex-row-reverse' : 'items-center'}`}
      onClick={onClick}
    >
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
      </div>
      <Card className="order-1 w-5/12 px-6 py-4 cursor-pointer hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-0">
          <h3 className="mb-1 font-bold text-gray-800 text-xl">{item.company}</h3>
          <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100 italic">{item.role}</p>
          <p className="text-xs text-gray-500">{item.startDate}</p>
        </CardContent>
      </Card>
    </div>
  )
}

