"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
                    <div className="relative aspect-video cursor-pointer">
                        <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.caption}
                            fill
                            onClick={() => setSelectedImage(image.src)}
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
                    <div className="relative aspect-video cursor-pointer">
                        <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.caption}
                            fill
                            onClick={() => setSelectedImage(image.src)}
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
                    <div className="relative aspect-video  cursor-pointer">
                        <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.caption}
                            fill
                            onClick={() => setSelectedImage(image.src)}
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
                    <div className="relative aspect-video  cursor-pointer">
                        <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.caption}
                            fill
                            onClick={() => setSelectedImage(image.src)}
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
                    <div className="relative aspect-video cursor-pointer">
                        <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.caption}
                            fill
                            onClick={() => setSelectedImage(image.src)}
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

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative p-4">
            <button
              className="absolute top-5 right-5 text-white text-3xl font-bold cursor-pointer bg-black bg-opacity-50 rounded-full px-3"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <Image src={selectedImage} alt="Enlarged view" width={800} height={600} className="rounded-lg shadow-lg" />
          </div>
        </div>
      )}
    </div>
  );
}
