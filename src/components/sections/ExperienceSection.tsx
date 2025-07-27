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
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-400/75 rounded-full lighthouse-signal-delay-3"></div>
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/60 rounded-full satellite-flash-delay-1"></div>
      
      <Container size="5xl">
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
      </Container>
    </Section>
  )
} 