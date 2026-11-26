import { sidewalkSheds } from '@/lib/sidewalk-sheds'
import { ProjectSection } from '@/components/project-section'
import { Timeline } from "@/components/timeline"
import { CareerInterests } from '@/components/career-interest'
import { Skills } from '@/components/skills'
import { Education } from '@/components/education'
import { Licences } from '@/components/liscences'
import { Volunteering } from '@/components/volunteering'


const projects = [
  sidewalkSheds,
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
    company: "Reddi Inc.",
    role: "Architectural Designer",
    startDate: "December 2025 - Present",
    bulletPoints: [
      "Prepared comprehensive permit drawing sets for residential projects in accordance with applicable building codes and jurisdictional requirements.",
      "Managed on-site construction activities, performing field observations and coordinating with contractors to ensure work aligned with design intent.",
      "Developed high-quality 3D visualizations and renderings for client presentations and project communication.",
      "Key Projects: St. Mary, F St., Universal Pure",
    ]
  },
  {
    company: "Reddymade Architecture & Design",
    role: "Architectural Designer",
    startDate: "September 2025 - July 2026",
    bulletPoints: [
      "Developed detailed construction documents and technical drawings in Revit to support project delivery and accuracy.",
      "Collaborated effectively with project teams in a fully remote environment, ensuring seamless coordination and consistent project outcomes.",
      "Key Projects: NYC DOB Pedestrian Protection, Boulder House, M/Y Sihaya Yacht",
    ]
  },
  {
    company: "BWBR Architects",
    role: "Architectural Intern",
    startDate: "May 2024 - September 2025",
    bulletPoints: [
      "Participate in client meetings to discuss plans and design ideas while offering solutions to problems that arise",
      "Produce detailed construction documents in Revit while collaborating with consultants to ensure deadlines are met",
      "Work with teams across three offices on projects varying in size, scope, and design phase",
      "Key Projects: Avera Women and Children's Hospital Addition, FHS Catchings Clinic, Lawrence County Hospital Renovation"
    ]
  },
  {
    company: "University of Nebraska",
    role: "Graduate Learning Assistant",
    startDate: "August 2023 - May 2025",
    bulletPoints: [
      "Assist professors with attendance, grading, and communication with students",
      "Hold office hours to ensure success of students",
      "Led lectures, discussions, and course content delivery in the professor’s absence",
      "Courses: Structural Optimization, Built Environment Technological Systems"
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
]

export default function PortfolioPage() {
  return (
    <div>
      <main className="site-width">
        <section className="py-10 sm:py-14">
          <p className="eyebrow mb-4">Architecture &amp; design</p>
          <h1 className="max-w-4xl text-2xl font-medium leading-tight tracking-tight sm:text-3xl">Spaces for connection.{' '}<span className="text-gray-500">Design for everyday life.</span></h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600">Selected work by Mara Wasserman, exploring how architecture can support communities, shape shared experiences, and enrich the everyday.</p>
        </section>
        <section id="work" className="pb-20 sm:pb-28">
          <div className="section-heading"><h2>Selected work</h2><span>Architecture · Public space · Community</span></div>
          <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
            {projects.map((project) => <ProjectSection key={project.id} {...project} />)}
          </div>
        </section>
        <section id="experience" className="pb-20 sm:pb-28">
          <div className="section-heading"><h2>Experience</h2><span>Practice, teaching &amp; collaboration</span></div>
          <Timeline items={timelineItems} />
        </section>

        <section id="about" className="pb-20">
          <div className="section-heading"><h2>Background</h2><span>Education, credentials &amp; interests</span></div>
        <div className="background-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Education />
            <Volunteering />
          </div>
          <div className="space-y-6">
            <Licences />
            <CareerInterests />
            <Skills />
          </div>
        </div>
        </section>
      </main>
    </div>
  )
}

