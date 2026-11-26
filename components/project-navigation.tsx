import Link from 'next/link'

const projects = [
  { id: 'sidewalk-sheds', title: 'Reimagining Sidewalk Sheds' },
  { id: 'collaboration-station', title: 'Collaboration Station' },
  { id: 'ashleaf-elementary', title: 'Ashleaf Elementary' },
  { id: 'artisan-alley-apartments', title: 'Artisan Alley Apartments' },
]

export function ProjectNavigation({ id }: { id: string }) {
  const index = projects.findIndex(project => project.id === id)
  const next = projects[(index + 1) % projects.length]
  return (
    <nav aria-label="Project navigation" className="mt-16 flex flex-wrap items-end justify-between gap-6 border-t py-8 sm:mt-24">
      <Link href="/#work" className="text-sm underline underline-offset-4">All projects</Link>
      <Link href={`/projects/${next.id}`} className="sm:text-right">
        <span className="eyebrow mb-2 block">Next project</span>
        <span className="text-lg font-medium hover:underline underline-offset-4 sm:text-2xl">{next.title}</span>
      </Link>
    </nav>
  )
}
