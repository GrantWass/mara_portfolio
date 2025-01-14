import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = [
  { category: "Modeling", items: ["Rhino", "AutoCAD", "Revit", "Sketch up"] },
  { category: "Rendering", items: ["Lumion", "Enscape", "Vray"] },
  { category: "Post Production", items: ["Microsoft Suite", "Illustrator", "Photoshop", "Indesign"] },
]

export function Skills() {
  return (
    <Card className="mb-10">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {skills.map((skillCategory, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-2">{skillCategory.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

