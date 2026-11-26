import Image from 'next/image'
import Link from 'next/link'

interface ProjectSectionProps {
  id: string
  title: string
  description: string
  images: string[]
  additionalText?: string
  articleUrl?: string
  videoUrl?: string
  pdfUrl?: string
}

export function ProjectSection({ id, title, description, images, additionalText = '', articleUrl, videoUrl, pdfUrl }: ProjectSectionProps) {
  const [name, recognition] = title.split(' | ')
  return (
    <article className="group">
      <Link href={`/projects/${id}`} className="block" aria-label={`View ${name}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          <Image src={images[0]} alt={name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.025]" />
        </div>
        <h3 className="mt-5 text-2xl font-medium tracking-tight group-hover:underline underline-offset-4">{name}</h3>
      </Link>
      {recognition && <p className="mt-2 text-sm font-medium text-gray-600">{recognition}</p>}
      <p className="mt-3 line-clamp-3 text-base leading-relaxed text-gray-600">{description}</p>
      {additionalText && <p className="mt-4 text-sm leading-relaxed text-gray-500">{additionalText}</p>}
      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
        <Link href={`/projects/${id}`} className="underline underline-offset-4">View project</Link>
        {articleUrl && <Link href={articleUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 underline underline-offset-4">Read article</Link>}
        {pdfUrl && <Link href={pdfUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 underline underline-offset-4">PPD CD</Link>}
        {videoUrl && <Link href={videoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 underline underline-offset-4">Watch film</Link>}
      </div>
    </article>
  )
}
