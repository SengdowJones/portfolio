'use client'

import { projects } from '@/lib/constants'
import { Section, Container } from '@/components/ui'
import { handleExternalLink } from '@/lib/utils'
import { Code, ExternalLink } from 'lucide-react'

interface ProjectsSectionProps {
  addScrollRef: (el: HTMLElement | null) => void;
}

export default function ProjectsSection({ addScrollRef }: ProjectsSectionProps) {
  return (
    <Section className="py-20 starlight-bg scroll-section scroll-mt-20" id="projects" ref={addScrollRef}>
      <Container size="5xl">
        <div className="mx-auto max-w-5xl scroll-section-content">
          <div className="text-center mb-10 scroll-reveal" ref={addScrollRef}>
            <h2 className="section-heading">
              Featured Projects
            </h2>
            <p className="section-description">
              A quick overview of my projects.
            </p>
          </div>
          <div className="divide-y divide-gray-800">
            {projects.map((project, idx) => {
              return (
                <div key={project.title} className="flex flex-col md:flex-row items-center justify-between py-5 gap-4 scroll-reveal w-full max-w-full" ref={addScrollRef} style={{ transitionDelay: `${idx * 0.1}s` }}>
                  <div className="flex-1 min-w-0 w-full max-w-full">
                    <div className="font-semibold text-gray-50 break-words w-full max-w-full">{project.title}</div>
                    <div className="text-gray-400 text-sm break-words w-full max-w-full">{project.brief}</div>
                    <div className="flex flex-wrap gap-2 mt-2 w-full max-w-full break-words">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2 md:mt-0">
                    {project.github && (
                      <button
                        onClick={() => handleExternalLink(project.github!)}
                        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors font-medium cursor-pointer"
                      >
                        <Code className="h-4 w-4" />
                        <span>View code</span>
                      </button>
                    )}
                    {project.link && (
                      <button
                        onClick={() => handleExternalLink(project.link!)}
                        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors font-medium cursor-pointer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Live demo</span>
                      </button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
} 