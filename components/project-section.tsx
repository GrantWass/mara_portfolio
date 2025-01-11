import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface ProjectSectionProps {
  title: string
  description: string
  images: string[]
}

export function ProjectSection({ title, description, images }: ProjectSectionProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-lg">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-video">
              <Image
                src={image}
                alt={`${title} - Image ${index + 1}`}
                fill
                className="object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

