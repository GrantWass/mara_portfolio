'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ProjectCarousel({ images, title }: { images: (string | { src: string; caption: string })[]; title: string }) {
  const [index, setIndex] = useState(0)
  const move = (direction: number) => setIndex(current => (current + direction + images.length) % images.length)

  if (!images.length) return null

  const image = images[index]
  const src = typeof image === 'string' ? image : image.src
  const caption = typeof image === 'string' ? '' : image.caption
  const captions = images.flatMap(item => typeof item !== 'string' && item.caption ? [item.caption] : [])

  return (
    <section
      aria-label={`${title} images`}
      aria-roledescription="carousel"
      tabIndex={0}
      className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
      onKeyDown={event => {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault()
          move(event.key === 'ArrowLeft' ? -1 : 1)
        }
      }}
    >
      <div className="relative h-[42vh] min-h-64 sm:h-[62vh] sm:max-h-[760px]" role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${images.length}`}>
        <Image
          src={src}
          alt={caption || `${title} — project image ${index + 1}`}
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-contain"
          priority={index === 0}
        />
      </div>
      {captions.length > 0 && (
        <div className="grid px-6 pt-4 text-center text-sm text-gray-600">
          {/* Reserve the tallest caption at every viewport width without clipping text. */}
          {captions.map((text, captionIndex) => (
            <p key={captionIndex} aria-hidden="true" className="invisible col-start-1 row-start-1">{text}</p>
          ))}
          <p className="col-start-1 row-start-1" aria-live="polite" aria-atomic="true">{caption}</p>
        </div>
      )}
      <div className="flex items-center justify-end gap-5 border-b py-4">
        <Button type="button" variant="ghost" size="icon" aria-label="Previous image" onClick={() => move(-1)} disabled={images.length < 2}>
          <ChevronLeft aria-hidden="true" />
        </Button>
        <p className="min-w-16 text-center text-sm text-gray-600" aria-live="polite" aria-atomic="true">{index + 1} / {images.length}</p>
        <Button type="button" variant="ghost" size="icon" aria-label="Next image" onClick={() => move(1)} disabled={images.length < 2}>
          <ChevronRight aria-hidden="true" />
        </Button>
      </div>
    </section>
  )
}
