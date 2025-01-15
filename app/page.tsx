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
    description: "The Collaboration Station, offers a new outlook on what we know as working in a hybrid environment. With endless variations to submerge ourselves within our favorite communities, workers can now choose where they want to work and what setting best suits their occupational needs.",
    images: [
      "/MAIN IMAGE CS 1.png",
      "/mini image cs 1.png",
      "/cs 4 1.png",
      "/mini image cs bottom 1.png",
      "/cs 1 1.jpg",
      "/cs 2 1.jpg",
      "/cs 3 1.jpg",
      "/mini image CS middle 1.jpg",
      "/cs 5 1.png",
    ],
    additionalText: "Work Design Magazine | Partners: Brayden Kirk, Hobey Stanton",
    articleUrl: "https://www.workdesign.com/2024/09/collaboration-station-by-mara-wasserman-brayden-kirk-and-hobey-stanton/"
  },
  {
    id: 'ashleaf-elementary',
    title: "Ashleaf Elementary | DLR Design Studio Scholarship Winner",
    description: "Located in Box Elder, South Dakota, Ashleaf Elementary uses free address learning where students nor teachers own a space, but rather move throughout different size classrooms throughout the day.",
    images: [
      "/MAIN IMAGE AE.jpg",
      "/mini image AE top.jpg",
      "/mini image AE middle.jpg",
      "/AE 5.jpg",
      "/AE 1.jpg",
      "/AE-2.jpg",
      "/AE 3.jpg",
      "/AE 4.jpg",
      "/AE 6.jpg",
      "/AE 7.jpg",
      "/AE 8.jpg",
      "/AE 9.jpg",
      "/AE 10.jpg",
      "/AE-11.jpg",
    ],
    additionalText: "Fall 2022 Collaborate | Professors Darin Hanigan and Vanessa Schutte | Partners: Sarah Johnson, Abby Mowbray, Jade Filbey",
    videoUrl: "https://youtu.be/J0NXNiQyAFc?si=JEmRklwaQpfHl-eZ"
  },
  {
    id: 'artisan-alley-apartments',
    title: "Artisan Alley Apartments",
    description: " Artisan Alley Apartments looks to provide a space for makers to thrive. This space is catered to those who work from home and want to continue to pursue a passion or add a second source of income via making goods.",
    images: [
      "/MAIN IMAGE AA (1).jpg",
      "/mini image AA top.jpg",
      "/mini image AA middle.jpg",
      "/mini image AA bottom.jpg",
      "/AA 5.jpg",
      "/AA 1.jpg",
      "/AA-2.jpg",
      "/AA 3.jpg",
      "/AA 4.jpg",
      "/AA 6.jpg",
      "/AA 7.jpg",
      "/AA 8.jpg",
      "/AA 9.jpg",
      "/AA 10.jpg",
      "/AA 11.jpg",
      "/AA 12.jpg",
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
      "Participate in client meetings to discuss design ideas",
      "Produce detailed construction documents using Revit for healthcare projects",
      "Collaborate with multiple disciplinary teams to ensure project deadlines are met"
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

