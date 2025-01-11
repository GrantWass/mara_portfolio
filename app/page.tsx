import { ProjectSection } from '@/components/project-section'

const projects = [
  {
    id: 1,
    title: "Modern Web Application",
    description: "A responsive web app built with React and Next.js, featuring real-time data updates and a sleek user interface. This project demonstrates the use of modern web technologies to create a fast, interactive user experience. Key features include server-side rendering, API integration, and a mobile-first design approach.",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400"
    ]
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce solution with product management, cart functionality, and secure payment integration. This platform provides a seamless shopping experience for customers and an intuitive management interface for store owners. It includes features such as inventory tracking, order management, and analytics dashboards.",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400"
    ]
  },
  {
    id: 3,
    title: "Mobile Fitness App",
    description: "An iOS and Android app for tracking workouts, nutrition, and personal fitness goals, built with React Native. This cross-platform application helps users maintain a healthy lifestyle by providing personalized workout plans, meal tracking, and progress visualization. It integrates with wearable devices for accurate activity monitoring.",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400"
    ]
  }
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">My Portfolio</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {projects.map((project) => (
              <ProjectSection key={project.id} {...project} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

