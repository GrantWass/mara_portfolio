import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Newspaper, Youtube } from 'lucide-react'

interface ProjectSectionProps {
  id: string
  title: string
  description: string
  images: string[]
  additionalText?: string
  articleUrl?: string
  videoUrl?: string
}

export function ProjectSection({ id, title, description, images, additionalText = '', articleUrl, videoUrl }: ProjectSectionProps) {
  return (
    <Card className="overflow-hidden mb-8">
      <CardContent className="p-0">
        <div className="grid grid-cols-8 grid-rows-6 gap-2 aspect-[2/1]">
          <div className="relative col-span-5 row-span-6">
            <Image
              src={images[0]}
              alt={`${title} - Main Image`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end p-6">
              <CardTitle className="text-xl font-bold text-white md:text-3xl">{title}</CardTitle>
            </div>
          </div>
          {images.slice(1, 4).map((image, index) => (
            <div key={index} className="relative col-span-3 row-span-2">
              <Image
                src={image}
                alt={`${title} - Image ${index + 2}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="p-6">
        <CardDescription className="text-lg">{description}</CardDescription>
        {(articleUrl || videoUrl) && (
            <div className="flex gap-4 mt-4">
              {articleUrl && (
                <Link 
                  href={articleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Newspaper size={18} />
                  <span>Read Article</span>
                </Link>
              )}
              {videoUrl && (
                <Link 
                  href={videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Youtube size={18} />
                  <span>Watch Video</span>
                </Link>
              )}
            </div>
          )}
        </div>

        <div className="flex flex-row sm:flex-row justify-between items-start sm:items-center gap-4 ml-6 mr-6 mb-4">
          {additionalText && (
            <div>
              <p className="text-sm text-gray-600">{additionalText}</p>
              
            </div>
          )}
          <Button asChild>
            <Link href={`/projects/${id}`}>Learn More</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

