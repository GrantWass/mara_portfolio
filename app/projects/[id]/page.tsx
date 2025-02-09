import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

const projects = [
    {
      id: 'collaboration-station',
      title: "Collaboration Station | 2024 Next Work Student Design Competition Winner",
      fullDescription: "In the United States, workers have long commutes to their jobs every day. On average, they have a commute of around thirty minutes one way, equating to almost an hour lost traveling to and from their workplace. This has created a burdensome lifestyle, where it is difficult to get the most out of the day and develop a good work/life balance. After the pandemic, the opportunity to work remotely was the new norm, with over three-fourths of workers electing to work either fully remote or hybrid. While this has seen its benefits, remote workers also face challenges like social isolation, separating work and personal life, and effective communication between coworkers. Workers in this new era are forced to decide whether a tenuous commute to work is worth the social benefits or if having the flexibility to work at home is more important.",
      imageGroup1: [
        { src: "/cs 4 1.png", caption: "" },
        { src: "/mini image CS middle 1.jpg", caption: "Pod Overview" },
        { src: "/MAIN IMAGE CS 1.png", caption: "" },
      ],
      imageGroup2: [
        { src: "/cs 3 1.jpg", caption: "Collaboration Pod Panel Options" },
        { src: "/cs 1 1.jpg", caption: "Engagement Pod Panel Options" },
        { src: "/cs 2 1.jpg", caption: "Coworking Pod Panel Options" },
      ],
      imageGroup3: [
        { src: "/cs 5 1.png", caption: "Suburban Parking Lot Application" },
        { src: "/mini image cs 1.png", caption: "Urban/High Density Application" },
        { src: "/mini image cs bottom 1.png", caption: "Park/Green Space Application" },
      ],

      additionalText: "Partners: Brayden Kirk, Hobey Stanton",
      description2: "Our solution, Collaboration Station, has created an environment where workers dont have to make that decision. Collaboration Station is a modular, community-focused, mobile coworking space that provides workers with an opportunity to find a balance between long commutes and the social benefits of going into an office. These modules are easily transportable and can be placed in various locations, allowing for flexible and dynamic workplace environments. With a forward-thinking approach, this solution uses underutilized spaces within communities and also provides an alternative to lengthy car commutes. By doing so, workers are able to skip frustrating lines of traffic on the freeway with a bikeable and walkable co-working solution for workers without giving up the collaboration opportunities typically seen in an office. This localized approach supports community engagement, local business, and social interaction.",
      description3: "Collaboration Station is made up of 3 dynamic pods: co-working, collaboration, and engagement. The co-working pod is for heads-down work within a social environment. The collaboration pod promotes sharing ideas and learning from other industries and trades. The engagement pod brings the community into the space. Local entrepreneurs and small businesses can utilize this pod to sell products.These pods also provide an extension to already existing community infrastructure, integrating into the community vs intervening. Placement near local amenities like malls, coffee shops, markets, parks, libraries, or festivals allows for a vibrant landscape surrounding the workplace. Intentionally engaging with the local sphere will help foster a sense of belonging for workers in their community and provide the social interactions that are lost while remotely working. These pods can be configured based on the needs and landscape of the location. Each pod is also capable of switching out wall panels to adapt to differing site conditions, safety requirements, and visibility requests.",
      description4: "Collaboration Station has the capacity to adapt to future work conditions through its flexible design. By providing a balance between remote work and the traditional office this solution hopes to build stronger communities, healthier lifestyles, and more flexible work for all."
    },
    {
      id: 'ashleaf-elementary',
      title: "Ashleaf Elementary | DLR Design Studio Scholarship Winner",
      fullDescription: "The school is organized into six pods: one designated for pre-kindergarten, one for kindergarten, and four blending grades one through five. This mixed-age configuration creates a mentorship ecosystem, encouraging younger students to learn from older peers. The school employs a free address learning model, where neither students nor teachers are assigned fixed spaces. Instead, they flow through a variety of classroom sizes and configurations throughout the day.",
      imageGroup1: [
        { src: "/AE-2.jpg", caption: "The total program square footage is divided into blocks." },
        { src: "/AE 3.jpg", caption: "The blocks are dispersed along Main Street." },
        { src: "/AE 4.jpg", caption: "The blocks are pushed and pulled to create unique spaces." },
      ],
      imageGroup2: [
        { src: "/mini image AE middle.jpg", caption: "" },
        { src: "/AE 6.jpg", caption: "" },
        { src: "/AE 7.jpg", caption: "" },
      ],
      imageGroup3: [
        { src: "/sc1.png", caption: "" },
        { src: "/sc2.png", caption: "" },
        { src: "/sc3.png", caption: "" },
      ],
      imageGroup4: [
        { src: "/AE 5.jpg", caption: "" },
        { src: "/AE 8.jpg", caption: "" },
        { src: "/AE 9.jpg", caption: "" },
      ],
      imageGroup5:[
        { src: "/AE 10.jpg", caption: "" },
        { src: "/AE-11.jpg", caption: "" },
        { src: "/mini image AE top.jpg", caption: "" },
      ],
      description2: "Central to Ashleaf’s design is the concept of a small-town school, embodied by its “Main Street.” This primary corridor serves as a dynamic artery, linking the pods, exploratory area, and the outdoors. Main Street is not just a passageway but a space for interaction and communication, cultivating a sense of connection among students and staff.",
      description3: "The interior design of Ashleaf Elementary reinforces its innovative approach to education. Each pod is assigned a distinct color palette to enhance wayfinding along Main Street and provide a visual identity for each learning community. Unique furniture is strategically incorporated throughout the spaces, promoting the school’s dynamic and engaging learning style. These elements not only support functionality but also foster creativity, excitement, and a sense of belonging among students and staff.",
      description4: "The site further enhances collaborative learning with outdoor spaces that extend beyond the classroom. These include outdoor classrooms, an open air cafeteria, and STEM-focused spaces, designed to promote hands-on, experiential learning in a natural setting.",
      description6: "Ashleaf Elementary evokes the feeling of a close-knit school community by offering small scale, unique, learning pods and exploratory spaces that all connect back to the place where people in any small town gather- The Main Street",
      description5: "An outdoor ampether is a gathering space that brings the community together for performances, presentations, and events. Designed to inspire creativity and collaboration, it serves as a dynamic learning environment where students can showcase their talents and engage with the community in meaningful ways. The outdoor cafeteria serves as a vibrant hub for community engagement, hosting school events, family gatherings, and local celebrations. This space fosters stronger connections between students during school hours, and the community during all times of the year. ",
      additionalText: "Fall 2022 Collaborate | Professors Darin Hanigan and Vanessa Schutte | Partners: Sarah Johnson, Abby Mowbray, Jade Filbey"
    },
    {
      id: 'artisan-alley-apartments',
      title: "Artisan Alley Apartments",
      fullDescription: "At the heart of Artisan Alley Apartments are large amenity spaces tailored to six key maker disciplines: arts, culinary, fabrication, textiles, welding, and woodworking. These purpose-built spaces provide residents with the tools and environments they need to create, innovate, and grow their skills. ",
      imageGroup3: [
        { src: "/AA 6.jpg", caption: "" },
        { src: "/AA 5.jpg", caption: "" },
        { src: "/AA 1.jpg", caption: "" },
      ],
      imageGroup1: [
        { src: "/mini image AA top.jpg", caption: "" },
        { src: "/mini image AA middle.jpg", caption: "" },
        { src: "/mini image AA bottom.jpg", caption: "" },
      ],
      imageGroup2: [
        { src: "/AA 2.jpg", caption: "" },
        { src: "/AA 3.jpg", caption: "" },
        { src: "/AA 4.jpg", caption: "" },
      ],
      imageGroup4: [
        { src: "/AA 7.jpg", caption: "" },
        { src: "/AA 8.jpg", caption: "" },
        { src: "/AA 9.jpg", caption: "" },

      ],
      imageGroup5: [
        { src: "/AA 10.jpg", caption: "" },
        { src: "/AA 11.jpg", caption: "" },
        { src: "/AA 12.jpg", caption: "" },
      ],
      description2: "By bringing together a diverse group of makers, the design encourages cross-disciplinary collaboration and the exchange of ideas, fostering a sense of community and mutual inspiration without the need to leave the site.",
      description3: "Central to the complex is a collection of retail spaces, designed to invite the public into the creative process. These spaces offer makers the opportunity to showcase and sell their goods, creating a direct connection between residents and the broader community. The retail hub not only supports the economic growth of residents but also draws visitors to Artisan Alley, transforming it into a bustling creative destination.",
      description4: "The residential spaces are thoughtfully designed to accommodate a wide range of residents, offering four distinct unit types that cater to various lifestyles and needs. These units are intentionally crafted without designated workspaces, encouraging residents to declutter their personal living areas and fully embrace the shared, collaborative amenity spaces.",
      description5: "Covered exterior connections link the residential units, creating semi-outdoor work areas where residents can engage with their craft, meet neighbors, and enjoy the fresh air. This network of connections fosters an environment of creativity and community, blending the lines between private living and communal collaboration.",
      description6: "With the thoughtful integration of living, creating, and retail, Artisan Alley Apartments embodies a unique vision of community and productivity. It is a place where makers can thrive, learn, and share their passion with others, redefining what it means to live and work in a collaborative, purpose-driven space.",
      additionalText: "Fall 2023 Advanced Arch Design | Professor Emily Andersen | Partners- Alissa Valch, Angela Vu"
    }
  ]

  type tParams = Promise<{ id: string }>;

  export default async function ProjectPage( props : { params: tParams }) {
    const { id } = await props.params
    const project = projects.find((p) => p.id === id)
  
    if (!project) {
      notFound()
    }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">{project.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700 md:text-xl">{project.fullDescription}</p>

              {project?.imageGroup2 != null && project?.imageGroup2?.length > 0 ? <div className="grid grid-cols-3 gap-4 mt-6 flex items-center justify-center">
                {project.imageGroup1.map((image, index) => (
                <div key={index} className="flex flex-col">
                    <div className="relative aspect-video">
                        <Image
                            src={image.src || "/placeholder.svg"}
                            alt={`${project.title} - ${image.caption}`}
                            fill
                            className="object-contain rounded-md"
                        />
                    </div>
                    <p className="text-sm text-gray-600 text-center mt-2">{image.caption}</p>
                </div>
                ))}
              </div> : false }

              {project?.description2 && <p className="text-gray-700 md:text-xl">{project.description2}</p>}
              {project?.imageGroup2 != null && project?.imageGroup2?.length > 0 ? <div className="grid grid-cols-3 gap-4 mt-6 flex items-center justify-center">
                {project.imageGroup2.map((image, index) => (
                <div key={index} className="flex flex-col">
                    <div className="relative aspect-video">
                        <Image
                            src={image.src || "/placeholder.svg"}
                            alt={`${project.title} - ${image.caption}`}
                            fill
                            className="object-contain rounded-md"
                        />
                    </div>
                    <p className="text-sm text-gray-600 text-center mt-2">{image.caption}</p>
                </div>
                ))}
              </div> : false}

              {project?.description3 && <p className="text-gray-700 md:text-xl">{project.description3}</p>}
              
              {project?.imageGroup3 != null && project?.imageGroup3?.length > 0 ? <div className="grid grid-cols-3 gap-4 mt-6 flex items-center justify-center">
                {project.imageGroup3.map((image, index) => (
                <div key={index} className="flex flex-col">
                    <div className="relative aspect-video">
                        <Image
                            src={image.src || "/placeholder.svg"}
                            alt={`${project.title} - ${image.caption}`}
                            fill
                            className="object-contain rounded-md"
                        />
                    </div>
                    <p className="text-sm text-gray-600 text-center mt-2">{image.caption}</p>
                </div>
                ))}
              </div> : false}

              {project?.description4 && <p className="text-gray-700 md:text-xl">{project.description4}</p>}

              {project?.imageGroup4 != null && project?.imageGroup4?.length > 0 ? <div className="grid grid-cols-3 gap-4 mt-6 flex items-center justify-center">
                {project.imageGroup4.map((image, index) => (
                <div key={index} className="flex flex-col">
                    <div className="relative aspect-video">
                        <Image
                            src={image.src || "/placeholder.svg"}
                            alt={`${project.title} - ${image.caption}`}
                            fill
                            className="object-contain rounded-md"
                        />
                    </div>
                    <p className="text-sm text-gray-600 text-center mt-2">{image.caption}</p>
                </div>
                ))}
              </div> : false}

              {project?.description5 && <p className="text-gray-700 md:text-xl">{project.description5}</p>}

              {project?.imageGroup5 != null && project?.imageGroup5?.length > 0 ? <div className="grid grid-cols-3 gap-4 mt-6 flex items-center justify-center">
                {project.imageGroup5.map((image, index) => (
                <div key={index} className="flex flex-col">
                    <div className="relative aspect-video">
                        <Image
                            src={image.src || "/placeholder.svg"}
                            alt={`${project.title} - ${image.caption}`}
                            fill
                            className="object-contain rounded-md"
                        />
                    </div>
                    <p className="text-sm text-gray-600 text-center mt-2">{image.caption}</p>
                </div>
                ))}
              </div> : false}

              {project?.description6 && <p className="text-gray-700 md:text-xl">{project.description6}</p>}
              
              {project.additionalText && (
                <div>
                  <p className="text-gray-600">{project.additionalText}</p>
                </div>
              )}
              
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

