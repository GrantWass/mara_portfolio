import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface VolunteeringItems {
  title: string
  origin: string
  date: string
}

const volunteeringData: VolunteeringItems[] = [
  {
    title: "Tutor",
    origin: "Varsity Tutors",
    date: "November 2025 - Present",
  },
  {
    title: "Coach",
    origin: "Girls on the Run Nebraska",
    date: "March 2025 - May 2025",
  }
]

export function Volunteering() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Volunteering</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {volunteeringData.map((item, index) => (
            <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.origin}, {item.date}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
