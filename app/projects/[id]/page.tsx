import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const projects = [
    {
      id: 'collaboration-station',
      title: "Collaboration Station | 2024 Next Work Student Design Competition Winner",
      fullDescription: "In the United States, workers have long commutes to their jobs every day. On average, they have a commute of around thirty minutes one way, equating to almost an hour lost traveling to and from their workplace. This has created a burdensome lifestyle, where it is difficult to get the most out of the day and develop a good work/life balance. After the pandemic, the opportunity to work remotely was the new norm, with over three-fourths of workers electing to work either fully remote or hybrid. While this has seen its benefits, remote workers also face challenges like social isolation, separating work and personal life, and effective communication between coworkers. Workers in this new era are forced to decide whether a tenuous commute to work is worth the social benefits or if having the flexibility to work at home is more important. Our solution, Collaboration Station, has created an environment where workers don’t have to make that decision. Collaboration Station is a modular, community-focused, mobile coworking space that provides workers with an opportunity to find a balance between long commutes and the social benefits of going into an office. These modules are easily transportable and can be placed in various locations, allowing for flexible and dynamic workplace environments. With a forward-thinking approach, this solution uses underutilized spaces within communities and also provides an alternative to lengthy car commutes. By doing so, workers are able to skip frustrating lines of traffic on the freeway with a bikeable and walkable co-working solution for workers without giving up the collaboration opportunities typically seen in an office. This localized approach supports community engagement, local business, and social interaction. Collaboration Station is made up of 3 dynamic pods: co-working, collaboration, and engagement. The co-working pod is for heads-down work within a social environment. The collaboration pod promotes sharing ideas and learning from other industries and trades. The engagement pod brings the community into the space. Local entrepreneurs and small businesses can utilize this pod to sell products.These pods also provide an extension to already existing community infrastructure, integrating into the community vs intervening. Placement near local amenities like malls, coffee shops, markets, parks, libraries, or festivals allows for a vibrant landscape surrounding the workplace. Intentionally engaging with the local sphere will help foster a sense of belonging for workers in their community and provide the social interactions that are lost while remotely working. These pods can be configured based on the needs and landscape of the location. Each pod is also capable of switching out wall panels to adapt to differing site conditions, safety requirements, and visibility requests. Collaboration Station has the capacity to adapt to future work conditions through its flexible design. By providing a balance between remote work and the traditional office this solution hopes to build stronger communities, healthier lifestyles, and more flexible work for all.",
      images: [
        "/MAIN IMAGE CS 1.png",
        "/mini image cs 1.png",
        "/mini image cs bottom 1.png",
        "/mini image CS middle 1.jpg",
        "/cs 1 1.jpg",
        "/cs 2 1.jpg",
        "/cs 3 1.jpg",
        "/cs 4 1.png",
        "/cs 5 1.png",
      ],
      additionalText: "Partners: Brayden Kirk, Hobey Stanton"
    },
    {
      id: 'ashleaf-elementary',
      title: "Ashleaf Elementary | DLR Design Studio Scholarship Winner",
      fullDescription: "Located in Box Elder, South Dakota, Ashleaf Elementary uses free address learning where students nor teachers own a space, but rather move throughout different size classrooms throughout the day. Six pods were created, one pre-k, one kindergarten, and four with a mixture of grades one through five. This creates a mentoring opportunity, as the younger students can learn from the older ones. Ashleaf also focuses on the idea of a small town school, and that is where the Main Street began. Using one corridor to connect not only the pods but the exploratory and the exterior allows for collaboration and communication between all students no matter the time of day. The site allows for that collaboration to continue throughout outdoor classrooms, an outdoor cafeteria, and STEM spaces.",
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
      additionalText: "Fall 2022 Collaborate | Professors Darin Hanigan and Vanessa Schutte | Partners: Sarah Johnson, Abby Mowbray, Jade Filbey"
    },
    {
      id: 'artisan-alley-apartments',
      title: "Artisan Alley Apartments",
      fullDescription: "Artisan Alley Apartments looks to provide a space for makers to thrive. This space is catered to those who work from home and want to continue to pursue a passion or add a second source of income via making goods. Large amenity spaces are provided for the six types of makers: arts, culinary, fabrication, textiles, welding, and woodworking. This allows for users to collaborate and learn new skills from others without having to leave the site. Retail spaces are also located in this complex throughout the central part of the site to draw others in.",
      images: [
        "/MAIN IMAGE AA (1).jpg",
        "/AA 1.jpg",
        "/AA 5.jpg",
        "/mini image AA top.jpg",
        "/mini image AA middle.jpg",
        "/mini image AA bottom.jpg",
        "/AA 2.jpg",
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
              <p className="text-gray-700">{project.fullDescription}</p>

              <div className="grid grid-cols-3 gap-4 mt-6">
                {project.images.map((image, index) => (
                  <div key={index} className="relative aspect-video">
                    <img src={image} alt={`${project.title} - Image ${index + 1}`} className="object-cover rounded-md" />
                  </div>
                ))}
              </div>
              
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

