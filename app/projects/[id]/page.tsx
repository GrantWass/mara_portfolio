import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { projects } from '../data'

type tParams = Promise<{ id: string }>;

export default async function ProjectPage(props: { params: tParams }) {
  const { id } = await props.params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">{project.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <p className="text-gray-700 text-lg leading-relaxed">{project.fullDescription}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {project.images.map((image, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="relative aspect-video mb-2">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={`${project.title} - ${image.caption}`}
                        fill
                        className="object-contain rounded-md"
                      />
                    </div>
                    <p className="text-sm text-gray-600 text-center">{image.caption}</p>
                  </div>
                ))}
              </div>
              
              {project.additionalText && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-2">Additional Information</h3>
                  <p className="text-gray-600">{project.additionalText}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

