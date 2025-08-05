'use client'

import { Section } from '@/components/ui'
import { experience } from '@/lib/constants'
import { Calendar, MapPin } from 'lucide-react'

interface ExperienceSectionProps {
  addScrollRef: (el: HTMLElement | null) => void
}

export default function ExperienceSection({ addScrollRef }: ExperienceSectionProps) {
  return (
    <Section className="py-24 scroll-section scroll-mt-20" id="experience">
        <div className="mx-auto max-w-4xl scroll-section-content flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="text-center mb-16">
              <div className="scroll-reveal" ref={addScrollRef}>
                <h2 className="section-heading">
                  Experience
                </h2>
                <p className="section-description">
                  My journey in software engineering, from internships to full-time roles
                </p>
              </div>
            </div>
            <div className="space-y-8 relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 timeline-line hidden md:block"></div>
              
              {experience.map((job, index) => (
                <div key={index} className="relative scroll-reveal w-full" ref={addScrollRef} style={{ transitionDelay: `${index * 0.1}s` }}>
                  {/* Timeline indicator */}
                  <div className="timeline-indicator">
                    <div className="w-2 h-2 rounded-full bg-white/80"></div>
                  </div>
                  
                  <div className="timeline-content ml-0 md:ml-12">
                    <h3 className="job-title">{job.title}</h3>
                    <div className="job-meta">
                      <span className="job-company">{job.company}</span>
                      <div className="flex flex-col gap-1">
                        <div className="job-meta-item">
                          <Calendar className="h-4 w-4 flex-shrink-0" />
                          <span className="whitespace-nowrap">{job.period}</span>
                        </div>
                        <div className="job-meta-item">
                          <MapPin className="h-4 w-4 flex-shrink-0" />
                          <span className="whitespace-nowrap">{job.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="job-description overflow-visible">{job.description}</p>
                    <div className="flex flex-wrap gap-2 w-full">
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
        </div>
    </Section>
  )
} 