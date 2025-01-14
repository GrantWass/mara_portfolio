import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const interests = [
  "Sustainability",
  "Healthcare Design",
  "Higher Education Design",
  "Elementary Education Design",
  "Details",
  "Structural Design"
]

const goals = [
  "Leed Certification",
  "Licensure",
  "Well Certification"
]


export function CareerInterests() {
  return (
    <Card className="mb-10">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">About Me</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-row gap-4">
        <ul className="list-disc list-inside space-y-1">
        <h3 className="font-semibold mb-2">Interests</h3>
          {interests.map((interest, index) => (
            <li key={index} className="text-gray-700 text-sm">{interest}</li>
          ))}
        </ul>
        <ul className="list-disc list-inside space-y-2 mt-4">
        <h3 className="font-semibold mb-2">Goals</h3>
          {goals.map((interest, index) => (
            <li key={index} className="text-gray-700 text-sm">{interest}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

