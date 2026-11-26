import Link from 'next/link'

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-width flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-5 sm:py-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">Mara Wasserman <span className="inline-block text-sm font-normal text-gray-600">· LEED AP BD+C</span><span className="mt-1 block text-xs font-normal tracking-wide text-gray-500">ARCHITECTURAL DESIGNER</span></Link>
        <nav aria-label="Main navigation" className="flex gap-6 text-sm sm:gap-8">
          <Link href="/#work">Work</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#about">About</Link>
          <Link href="mailto:marawasserman3@gmail.com">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
