import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface EducationItem {
  degree: string
  institution: string
  year: string
  details: string[]
}

const educationData: EducationItem[] = [
  {
    degree: "Master of Architecture",
    institution: "University of Nebraska-Lincoln",
    year: "Expected 2025",
    details: []
  },
  {
    degree: "Bachelor of Science in Design: Architecture",
    institution: "University of Nebraska-Lincoln",
    year: "2023",
    details: [
        "Graduated with Distinction",
        "Alpha Rho Chi (Member)",
        "Campus Ministry Social Media Director",
        "Student Blogger",
        "Deans list 2020-2023"
    ]
  }
]

export function Education() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Education</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {educationData.map((item, index) => (
            <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
              <h3 className="text-lg font-semibold">{item.degree}</h3>
              <p className="text-sm text-gray-600">{item.institution}, {item.year}</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                {item.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="text-sm text-gray-700">{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
