import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CertificationItem {
  title: string
  origin: string
  date: string
}

const certData: CertificationItem[] = [
  {
    title: "LEED AP Building Design + Construction",
    origin: "U.S. Green Building Council",
    date: "August 2025",
  },
  {
    title: "LEED Green Associate",
    origin: "U.S. Green Building Council",
    date: "March 2025",
  }
]

export function Licences() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Licences and Certifications</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {certData.map((item, index) => (
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
