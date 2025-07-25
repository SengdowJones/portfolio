'use client'

import { Section, Container } from '@/components/ui'
import { experience } from '@/lib/constants'
import { Calendar, MapPin } from 'lucide-react'

interface ExperienceSectionProps {
  addScrollRef: (el: HTMLElement | null) => void
}

export default function ExperienceSection({ addScrollRef }: ExperienceSectionProps) {
  return (
    <Section className="py-24 starlight-bg scroll-section scroll-mt-20" id="experience">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-15"></div>
      
      {/* Lighthouse signal in experience */}
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-400/25 rounded-full lighthouse-signal-delay-3"></div>
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-cyan-400/20 rounded-full satellite-flash-delay-1"></div>
      
      <Container size="5xl">
        <div className="mx-auto max-w-4xl scroll-section-content">
          <div className="text-center mb-16">
            <div className="scroll-reveal" ref={addScrollRef}>
              <h2 className="text-3xl font-bold text-gray-50 mb-4 font-display">
                Experience
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                My journey in software engineering, from internships to full-time roles
              </p>
            </div>
          </div>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="relative scroll-reveal w-full max-w-full" ref={addScrollRef} style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="absolute left-0 top-0 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-blue-950 transition-colors">
                  <div className="h-2.5 w-2.5 rounded-full bg-blue-400"></div>
                </div>
                <div className="ml-0 md:ml-16 w-full max-w-full">
                  <h3 className="text-xl font-semibold text-gray-50 font-display break-words w-full max-w-full mb-2">{job.title}</h3>
                  <div className="flex items-center gap-6 mb-3 text-sm text-gray-400 w-full max-w-full flex-wrap">
                    <span className="text-base font-medium text-blue-400 break-words">{job.company}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{job.period}</span>
                    </div>
                    <span className="text-sm text-gray-500">•</span>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4 text-body break-words w-full max-w-full">{job.description}</p>
                  <div className="flex flex-wrap gap-2 w-full max-w-full break-words">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="tech-tag"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
} 