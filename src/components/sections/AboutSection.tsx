'use client'

import React from 'react'
import { Section } from '@/components/ui'
import { skills, education } from '@/lib/constants'
import { generatePhotoGalleries } from '@/lib/photoGallery'
import { Calendar, Award, GraduationCap, Trophy, Camera, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'

interface AboutSectionProps {
  addScrollRef: (el: HTMLElement | null) => void
}

export default function AboutSection({ addScrollRef }: AboutSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentGallery, setCurrentGallery] = useState<string>('')
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [imageLoading, setImageLoading] = useState<Record<string, boolean>>({})
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)

  // Generate photo galleries from the utility
  const photoGalleries = generatePhotoGalleries()

  const openGallery = (galleryKey: string) => {
    setCurrentGallery(galleryKey)
    setCurrentPhotoIndex(0)
    setIsModalOpen(true)
  }

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  const nextPhoto = useCallback(() => {
    const gallery = photoGalleries[currentGallery]
    if (gallery) {
      setCurrentPhotoIndex((prev) => (prev + 1) % gallery.photos.length)
    }
  }, [currentGallery, photoGalleries])

  const prevPhoto = useCallback(() => {
    const gallery = photoGalleries[currentGallery]
    if (gallery) {
      setCurrentPhotoIndex((prev) => (prev - 1 + gallery.photos.length) % gallery.photos.length)
    }
  }, [currentGallery, photoGalleries])

  // Keyboard navigation and focus/scroll management for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return
      switch (e.key) {
        case 'Escape':
          closeModal()
          break
        case 'ArrowLeft':
          prevPhoto()
          break
        case 'ArrowRight':
          nextPhoto()
          break
        case 'Tab': {
          const modal = document.querySelector('[data-modal]') as HTMLElement | null
          if (!modal) return
          const focusable = Array.from(modal.querySelectorAll('button, a')) as HTMLElement[]
          if (focusable.length === 0) return
          const first = focusable[0]
          const last = focusable[focusable.length - 1]
          const active = document.activeElement as HTMLElement | null
          if (e.shiftKey) {
            if (active === first) {
              e.preventDefault()
              last.focus()
            }
          } else {
            if (active === last) {
              e.preventDefault()
              first.focus()
            }
          }
          break
        }
      }
    }

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown)
      // Lock scroll and focus close on open
      document.body.style.overflow = 'hidden'
      setTimeout(() => closeButtonRef.current?.focus(), 10)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isModalOpen, closeModal, prevPhoto, nextPhoto])

  const currentGalleryData = currentGallery ? photoGalleries[currentGallery] : null

  const handleImageLoad = (key: string) => {
    setImageLoading(prev => ({ ...prev, [key]: true }))
  }

  return (
    <Section className="py-20 scroll-section scroll-mt-20" id="about">
      <div className="scroll-section-content">
        {/* Centered Header */}
        <div className="text-center mb-10 scroll-reveal" ref={addScrollRef}>
          <h2 className="section-heading">
            About me
          </h2>
          <p className="section-description">
            A quick overview of my background and expertise
          </p>
        </div>

        {/* Main About Content */}
        <div className="divide-y divide-gray-800">
          {/* About Me Section */}
          <div className="flex flex-col py-5 gap-4 scroll-reveal w-full max-w-full" ref={addScrollRef}>
            <div className="flex-1 min-w-0 w-full max-w-full">
              <div className="font-semibold text-gray-50 break-words w-full max-w-full mb-2 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-gray-400" />
                Background
              </div>
              <div className="text-gray-400 text-sm break-words w-full max-w-full mb-4">
                I&apos;m a software engineer at JPMorgan Chase, where I modernize banking workflows through full-stack development with React and Spring Boot. I&apos;m passionate about human-centered design and creating user experiences that empower customers.
              </div>
              <div className="text-gray-400 text-sm break-words w-full max-w-full">
                I graduated with my BS and MS in Computer Science from Northwestern University, focusing on human-computer interaction. Beyond my professional work, I&apos;ve built projects ranging from award-winning data visualizations to multiplayer web applications that have engaged thousands of users.
              </div>
            </div>
          </div>

          {/* Pictures Section */}
          <div className="flex flex-col py-5 gap-4 scroll-reveal w-full max-w-full" ref={addScrollRef}>
            <div className="flex-1 min-w-0 w-full max-w-full">
              <div className="font-semibold text-gray-50 break-words w-full max-w-full mb-4 flex items-center gap-2">
                <Camera className="h-5 w-5 text-gray-400" />
                Life & Adventures
              </div>
              <div className="text-gray-400 text-sm break-words w-full max-w-full mb-6">
                Here&apos;s a glimpse into my life beyond code - from hackathons and travels to hobbies and team moments. Click on any category to explore more photos.
              </div>
              
              {/* Photo Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Hackathons */}
                <button 
                  type="button"
                  aria-label="Open Hackathons photo gallery"
                  className="group relative overflow-hidden rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  onClick={() => openGallery('hackathons')}
                >
                  <Image
                    src="/life_adventures/hackathons/badhacks.jpg" 
                    alt="BadHacks 2022" 
                    priority={photoGalleries.hackathons.photos[0]?.priority || false}
                    width={500}
                    height={500}
                    sizes="(max-width: 768px) 50vw, 25vw"
                    onLoad={() => handleImageLoad('hackathons')}
                    className="aspect-square object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  {imageLoading['hackathons'] !== true && (
                    <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-lg" />
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-xs text-white font-medium">Hackathons</p>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/50 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera className="h-3 w-3 text-white" />
                  </div>
                  <div className="absolute top-2 left-2 bg-black/50 rounded-full px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs text-white">{photoGalleries.hackathons.photos.length} photos</span>
                  </div>
                </button>

                {/* Team Moments */}
                <button 
                  type="button"
                  aria-label="Open Team Moments photo gallery"
                  className="group relative overflow-hidden rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  onClick={() => openGallery('team')}
                >
                  <Image
                    src="/life_adventures/team/ieeechaos.jpg" 
                    alt="IEEE Exec Board 2024" 
                    priority={photoGalleries.team.photos[0]?.priority || false}
                    width={500}
                    height={500}
                    sizes="(max-width: 768px) 50vw, 25vw"
                    onLoad={() => handleImageLoad('team')}
                    className="aspect-square object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  {imageLoading['team'] !== true && (
                    <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-lg" />
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-xs text-white font-medium">Team Moments</p>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/50 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera className="h-3 w-3 text-white" />
                  </div>
                  <div className="absolute top-2 left-2 bg-black/50 rounded-full px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs text-white">{photoGalleries.team.photos.length} photos</span>
                  </div>
                </button>

                {/* Hobbies */}
                <button 
                  type="button"
                  aria-label="Open Hobbies photo gallery"
                  className="group relative overflow-hidden rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  onClick={() => openGallery('hobbies')}
                >
                  <Image
                    src="/life_adventures/hobbies/chess.jpg" 
                    alt="Chess Game" 
                    priority={photoGalleries.hobbies.photos[0]?.priority || false}
                    width={500}
                    height={500}
                    sizes="(max-width: 768px) 50vw, 25vw"
                    onLoad={() => handleImageLoad('hobbies')}
                    className="aspect-square object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  {imageLoading['hobbies'] !== true && (
                    <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-lg" />
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-xs text-white font-medium">Hobbies</p>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/50 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera className="h-3 w-3 text-white" />
                  </div>
                  <div className="absolute top-2 left-2 bg-black/50 rounded-full px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs text-white">{photoGalleries.hobbies.photos.length} photos</span>
                  </div>
                </button>

                {/* Travel Adventures */}
                <button 
                  type="button"
                  aria-label="Open Travel Adventures photo gallery"
                  className="group relative overflow-hidden rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  onClick={() => openGallery('travel')}
                >
                  <Image
                    src="/life_adventures/travel/sf_bridge.jpg" 
                    alt="San Francisco Bridge" 
                    priority={photoGalleries.travel.photos[0]?.priority || false}
                    width={500}
                    height={500}
                    sizes="(max-width: 768px) 50vw, 25vw"
                    onLoad={() => handleImageLoad('travel')}
                    className="aspect-square object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  {imageLoading['travel'] !== true && (
                    <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-lg" />
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-xs text-white font-medium">Travel Adventures</p>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/50 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera className="h-3 w-3 text-white" />
                  </div>
                  <div className="absolute top-2 left-2 bg-black/50 rounded-full px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs text-white">{photoGalleries.travel.photos.length} photos</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="flex flex-col py-5 gap-4 scroll-reveal w-full max-w-full" ref={addScrollRef}>
            <div className="flex-1 min-w-0 w-full max-w-full">
              <div className="font-semibold text-gray-50 break-words w-full max-w-full mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-gray-400" />
                Skills & Technologies
              </div>
              <div className="space-y-4">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category} className="space-y-3">
                    <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="tech-tag"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="border-t border-gray-800 my-12"></div>

        {/* Education and Achievements Two-Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Education Section */}
          <div className="scroll-reveal" ref={addScrollRef}>
            <div className="font-semibold text-gray-50 break-words w-full max-w-full mb-4 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-gray-400" />
              Education
            </div>
            <div className="space-y-3">
              {education.map((edu, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Calendar className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-gray-50 mb-1">{edu.degree}</div>
                    <div className="text-sm text-gray-400 mb-1">{edu.school} &bull; {edu.period}</div>
                    <div className="text-xs text-gray-500">GPA: {edu.gpa} &bull; {edu.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="scroll-reveal" ref={addScrollRef}>
            <div className="font-semibold text-gray-50 break-words w-full max-w-full mb-4 flex items-center gap-2">
              <Trophy className="h-5 w-5 text-gray-400" />
              Achievements
            </div>
            <div className="flex flex-col gap-2 w-full">
              <span className="achievement-card-blue">
                <Award className="h-3.5 w-3.5 text-blue-400" />
                Best Technology Award at WildHacks &apos;23
              </span>
              <span className="achievement-card-purple">
                <Award className="h-3.5 w-3.5 text-purple-400" />
                3rd at Hack with Google: Chicago &apos;23 ($2,000)
              </span>
              <span className="achievement-card-yellow">
                <Award className="h-3.5 w-3.5 text-yellow-400" />
                Winner of Northwestern Data Vis Contest &apos;22 ($200)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Gallery Modal */}
      {isModalOpen && currentGalleryData && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          data-modal
          role="dialog"
          aria-modal="true"
          aria-label={`${currentGalleryData.title} photo gallery`}
          onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              aria-label="Close gallery"
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              ref={closeButtonRef}
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Navigation Arrows */}
            {currentGalleryData.photos.length > 1 && (
              <>
                <button
                  onClick={prevPhoto}
                  aria-label="Previous photo"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors duration-200"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>
                <button
                  onClick={nextPhoto}
                  aria-label="Next photo"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors duration-200"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>
              </>
            )}

            {/* Photo Display */}
            <div className="relative">
              <Image
                src={currentGalleryData.photos[currentPhotoIndex].src}
                alt={currentGalleryData.photos[currentPhotoIndex].alt}
                width={1000}
                height={1000}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Photo Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                <h3 className="text-white font-semibold mb-1">{currentGalleryData.title}</h3>
                <p className="text-gray-300 text-sm">{currentGalleryData.photos[currentPhotoIndex].caption}</p>
                {currentGalleryData.photos.length > 1 && (
                  <p className="text-gray-400 text-xs mt-1">
                    {currentPhotoIndex + 1} of {currentGalleryData.photos.length}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  )
} 