import { Linkedin, Mail, Newspaper, Youtube, FileText} from 'lucide-react'
import Link from 'next/link'

export function SocialLinks() {
  return (
    <div className="flex items-center space-x-4">
      <Link href="https://www.linkedin.com/in/mara-wasserman-4a7a3a232" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
        <Linkedin size={24} />
        <span className="sr-only">LinkedIn</span>
      </Link>
      <Link href="mailto:mwasserman3@huskers.unl.edu" className="text-gray-600 hover:text-gray-900">
        <Mail size={24} />
        <span className="sr-only">Email</span>
      </Link>
      <Link 
        href="https://www.workdesign.com/2024/09/collaboration-station-by-mara-wasserman-brayden-kirk-and-hobey-stanton/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        <Newspaper size={24} />
        <span className="sr-only">Work Design Magazine Article</span>
      </Link>
      <Link 
        href="https://youtu.be/J0NXNiQyAFc?si=JEmRklwaQpfHl-eZ"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        <Youtube size={24} />
        <span className="sr-only">Project Video</span>
      </Link>
      <Link 
        href="/Wasserman_Resume 2025.pdf" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        <FileText size={24} />
        <span className="sr-only">Resume</span>
      </Link>
    </div>
  )
}

