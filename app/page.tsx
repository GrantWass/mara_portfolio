import { ProjectSection } from '@/components/project-section'
import { Timeline } from "@/components/timeline"
import { CareerInterests } from '@/components/career-interest'
import { Skills } from '@/components/skills'
import { SocialLinks } from '@/components/social-links'
import { Education } from '@/components/education'
import Head from 'next/head'


const projects = [
  {
    id: 'collaboration-station',
    title: "Collaboration Station | 2024 Next Work Student Design Competition Winner",
    description: "The Collaboration Station offers a new outlook on what we know as working in a hybrid environment. With endless variations to submerge ourselves within our favorite communities, workers can now choose where they want to work and what setting best suits their occupational needs.",
    images: [
      "/MAIN IMAGE CS 1.png",
      "/mini image cs 1.png",
      "/cs 5 1.png",
      "/mini image cs bottom 1.png",

    ],
    additionalText: "Work Design Magazine | Partners: Brayden Kirk, Hobey Stanton",
    articleUrl: "https://www.workdesign.com/2024/09/collaboration-station-by-mara-wasserman-brayden-kirk-and-hobey-stanton/"
  },
  {
    id: 'ashleaf-elementary',
    title: "Ashleaf Elementary | DLR Design Studio Scholarship Winner",
    description: "Ashleaf Elementary, located in Box Elder, South Dakota, reimagines the traditional learning environment through innovative spatial design, connection to community, and collaboration.",
    images: [
      "/MAIN IMAGE AE.jpg",
      "/mini image AE top.jpg",
      "/mini image AE middle.jpg",
      "/image2.jpeg",

    ],
    additionalText: "Fall 2022 Collaborate | Professors Darin Hanigan and Vanessa Schutte | Partners: Sarah Johnson, Abby Mowbray, Jade Filbey",
    videoUrl: "https://youtu.be/J0NXNiQyAFc?si=JEmRklwaQpfHl-eZ"
  },
  {
    id: 'artisan-alley-apartments',
    title: "Artisan Alley Apartments",
    description: "Nestled just west of the Nebraska State Capitol in downtown Lincoln, Nebraska, Artisan Alley Apartments is a vibrant residential community designed to support and celebrate the creative spirit of modern makers. Catering to those who work from home and seek to pursue their passions or generate additional income through crafting, the complex blends living, working, and learning into one dynamic environment. ",
    images: [
      "/MAIN IMAGE AA (1).jpg",
      "/mini image AA top.jpg",
      "/mini image AA middle.jpg",
      "/mini image AA bottom.jpg",

    ],
    additionalText: "Fall 2023 Advanced Arch Design | Professor Emily Andersen | Partners- Alissa Valch, Angela Vu",
  }
]

const timelineItems = [
  {
    company: "BWBR Architects",
    role: "Architectural Intern",
    startDate: "May 2024 - Present",
    bulletPoints: [
      "Participate in client meetings to discuss plans and design ideas while offering solutions to problems that arise",
      "Produce detailed construction documents in Revit while collaborating with consultants to ensure deadlines are met",
      "Work with teams across three offices on projects varying in size, scope, and design phase",
      "Key Projects: Avera Women and Children's Hospital Addition, FHS Catchings Clinic, Franklin County Clinic, Lawrence Country Hospital Renovation"
    ]
  },
  {
    company: "University of Nebraska",
    role: "Graduate Learning Assistant",
    startDate: "August 2023 - Present",
    bulletPoints: [
      "Assist professors with attendance, grading, and communication with students",
      "Hold office hours to ensure success of students",
      "Lead both architecture and construction management courses when professor is absent"
    ]
  },
  {
    company: "University of Nebraska",
    role: "Nebraska Athletics Tutor",
    startDate: "March 2023 - May 2023",
    bulletPoints: [
      "Tutor Student-Athletes in architecture and construction management courses",
      "Prepare weekly lessons and assist with homework help",
      "Communicate with academic advisors and professors on student’s progress"
    ]
  },
  {
    company: "University of Nebraska",
    role: "International Welcome Team",
    startDate: "August 2022 - January 2023",
    bulletPoints: [
      "Lead 10-15 International Student groups during Orientation",
      "Communicate flight and housing information to ensure successful check in",
      "Facilitate large and small group discussions about University amenities"
    ]
  },
  {
    company: "UNL College of Architecture",
    role: "Peer Mentor and Student Ambassador",
    startDate: "August 2021 - May 2023",
    bulletPoints: [
      "Mentor 10 first year students in the College of Architecture",
      "Give tours to prospective students and assist in recruiting events",
      "Answer questions and provide advice for success in college"
    ]
  },
  {
    company: "Cracker Barrel",
    role: "Server",
    startDate: "June 2019- April 2024",
    bulletPoints: [
      "Seat, serve, and clean 5-10 table sections",
      "Multitask while remaining professional in fast-paced environments"
    ]
  },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Mara Wasserman | Architect Portfolio</title>
        <meta
          name="description"
          content="Explore the architectural projects, career journey, and skills of Mara Wasserman."
        />
        <meta
          name="keywords"
          content="Mara Wasserman, architect portfolio, Collaboration Station, Ashleaf Elementary, Artisan Alley Apartments, architectural projects, design, hybrid work environments, free address learning, makerspaces"
        />
        <meta name="author" content="Mara Wasserman" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Mara Wasserman | Architect Portfolio" />
        <meta
          property="og:description"
          content="Explore the architectural designs of Mara Wasserman, including hybrid workspaces and free address learning environments."
        />
        <meta property="og:image" content="/MAIN IMAGE CS 1.png" />
        <meta property="og:url" content="https://your-portfolio-site.com" />
      </Head>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Mara&apos;s Portfolio | Architect</h1>
          <SocialLinks />
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-10">My Journey</h1>
          <Timeline items={timelineItems} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
          <div className="flex items-center justify-center">
            <Education />
          </div>
          <div className="space-y-6">
            <CareerInterests />
            <Skills />
          </div>
        </div>
      </main>
    </div>
  )
}

