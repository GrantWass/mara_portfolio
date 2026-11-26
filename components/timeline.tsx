interface TimelineItem {
  company: string
  role: string
  startDate: string
  bulletPoints: string[]
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="divide-y border-b">
      {items.map(item => (
        <details key={`${item.company}-${item.role}`} className="experience-row group">
          <summary className="grid cursor-pointer gap-3 py-6 sm:grid-cols-[1fr_2fr_auto] sm:gap-8">
            <span className="text-sm leading-relaxed text-gray-500">{item.startDate}</span>
            <span><span className="block text-xl font-medium tracking-tight">{item.company}</span><span className="mt-1 block text-base text-gray-600">{item.role}</span></span>
            <span className="text-sm text-gray-500 group-open:hidden">View details +</span>
            <span className="hidden text-sm text-gray-500 group-open:block">Close details −</span>
          </summary>
          <ul className="mb-8 max-w-3xl list-disc space-y-3 pl-5 text-base leading-relaxed text-gray-600 sm:ml-[33.333%]">
            {item.bulletPoints.map(point => <li key={point}>{point}</li>)}
          </ul>
        </details>
      ))}
    </div>
  )
}
