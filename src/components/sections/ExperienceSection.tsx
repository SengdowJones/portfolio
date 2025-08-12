'use client'

import { Section } from '@/components/ui'
import { experience } from '@/lib/constants'
import { Calendar, MapPin } from 'lucide-react'

interface ExperienceSectionProps {
  addScrollRef: (el: HTMLElement | null) => void
}

export default function ExperienceSection({ addScrollRef }: ExperienceSectionProps) {
  return (
    <Section className="py-24 md:py-28 scroll-section scroll-mt-24" id="experience">
        <div className="scroll-section-content">
          <div className="text-center mb-12 scroll-reveal" ref={addScrollRef}>
            <h2 className="section-heading">
              Experience
            </h2>
            <p className="section-description">
              My journey in software engineering, from internships to full-time roles
            </p>
          </div>
          <div className="divide-y divide-gray-800">
            {experience.map((job, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start justify-between py-6 md:py-8 gap-4 scroll-reveal w-full max-w-full" ref={addScrollRef} style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="flex-1 min-w-0 w-full max-w-full">
                  <div className="font-semibold text-gray-50 break-words w-full max-w-full mb-1">{job.title}</div>
                  <div className="text-blue-400 text-sm break-words w-full max-w-full mb-2">{job.company}</div>
                  <div className="text-gray-400 text-sm break-words w-full max-w-full mb-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="h-4 w-4 flex-shrink-0" />
                      <span>{job.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <div className="text-gray-300 text-sm break-words w-full max-w-full mb-3">{job.description}</div>
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
    </Section>
  )
} 