import { ProjectNavigation } from '@/components/project-navigation'
import Link from "next/link";
import { ProjectCarousel } from "@/components/project-carousel";

interface Project {
  id: string;
  title: string;
  fullDescription: string;
  imageGroup1: { src: string; caption: string }[];
  imageGroup2?: { src: string; caption: string }[];
  imageGroup3?: { src: string; caption: string }[];
  imageGroup4?: { src: string; caption: string }[];
  imageGroup5?: { src: string; caption: string }[];
  additionalText?: string;
  description2?: string;
  description3?: string;
  description4?: string;
  description5?: string;
  description6?: string;

}

export default function ProjectDetails({ project }: { project: Project }) {
  const [title, recognition] = project.title.split(" | ");
  const images = [
    project.imageGroup1,
    project.imageGroup2,
    project.imageGroup3,
    project.imageGroup4,
    project.imageGroup5,
  ].flatMap(group => group ?? []);
  const descriptions = [
    project.fullDescription,
    project.description2,
    project.description3,
    project.description4,
    project.description5,
    project.description6,
  ].filter(Boolean);

  return (
    <main className="site-width py-6 sm:py-10">
      <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-gray-500"><Link href="/#work" className="hover:text-gray-900">Selected work</Link><span aria-hidden="true">/</span><span>{project.title.split(' | ')[0]}</span></div>
      <article>
        <ProjectCarousel key={project.id} images={images} title={project.title} />
        <div className="project-copy mx-auto max-w-3xl space-y-8 pt-10 sm:pt-16">
          <h1 className="text-3xl font-medium leading-tight tracking-tight sm:text-5xl">{title}</h1>
          {recognition && <p className="text-sm font-medium text-gray-500">{recognition}</p>}
          {descriptions.map((description, index) => (
            <p key={index} className="text-base leading-8 text-gray-600 sm:text-lg">{description}</p>
          ))}
          {project.additionalText && <p className="text-gray-600">{project.additionalText}</p>}

        </div>
      </article>
      <ProjectNavigation id={project.id} />
    </main>
  );
}
