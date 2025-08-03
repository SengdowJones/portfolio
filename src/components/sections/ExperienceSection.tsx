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
        <div className="mx-auto max-w-4xl scroll-section-content">
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
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="relative scroll-reveal w-full max-w-full" ref={addScrollRef} style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="timeline-dot">
                  <div className="timeline-dot-inner"></div>
                </div>
                <div className="timeline-content">
                  <h3 className="job-title">{job.title}</h3>
                  <div className="job-meta">
                    <span className="job-company">{job.company}</span>
                    <span className="job-meta-separator">•</span>
                    <div className="job-meta-item">
                      <Calendar className="h-4 w-4" />
                      <span>{job.period}</span>
                    </div>
                    <span className="job-meta-separator">•</span>
                    <div className="job-meta-item">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <p className="job-description">{job.description}</p>
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