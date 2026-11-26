import { ProjectNavigation } from '@/components/project-navigation'
import Link from 'next/link'
import { ProjectCarousel } from '@/components/project-carousel'
import { sidewalkSheds as project } from '@/lib/sidewalk-sheds'

export const metadata = {
  title: 'Reimagining Sidewalk Sheds | Mara Wasserman',
  description: project.description,
}

export default function SidewalkShedsPage() {
  return (
    <main className="site-width py-6 sm:py-10">
      <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-gray-500"><Link href="/#work" className="hover:text-gray-900">Selected work</Link><span aria-hidden="true">/</span><span>{project.title.split(' | ')[0]}</span></div>
      <article>
        <ProjectCarousel images={project.images} title={project.title} />
        <div className="project-copy mx-auto max-w-3xl space-y-8 pt-10 sm:pt-16">
          <h1 className="text-3xl font-medium leading-tight tracking-tight sm:text-5xl">{project.description}</h1>
          <div className="space-y-3">
            <p className="text-sm leading-relaxed text-gray-500">{project.additionalText}</p>
            <div className="flex flex-wrap gap-6 text-sm font-medium">
              <Link href={project.pdfUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">PPD CD</Link>
              <Link href={project.articleUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 underline underline-offset-4">Read article</Link>
            </div>
          </div>
          {project.sections.map(section => (
            <section key={section.title} className="space-y-3">
              <h2 className="text-xl font-medium tracking-tight">{section.title}</h2>
              <p className="text-sm italic text-gray-500">{section.imageReference}</p>
              <p className="text-base leading-8 text-gray-600 sm:text-lg">{section.description}</p>
            </section>
          ))}
          <p className="text-base leading-8 text-gray-600 sm:text-lg">{project.conclusion}</p>
          
        </div>
      </article>
      <ProjectNavigation id={project.id} />
    </main>
  )
}
