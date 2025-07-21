'use client'

import { Section, Container, Card } from '@/components/ui'
import { projects } from '@/lib/constants'
import { ExternalLink, Code } from 'lucide-react'
import { handleExternalLink } from '@/lib/utils'

interface ProjectsSectionProps {
  addScrollRef: (el: HTMLElement | null) => void
}

export default function ProjectsSection({ addScrollRef }: ProjectsSectionProps) {
  return (
    <Section className="py-24 starlight-bg scroll-section" id="projects">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      {/* Satellite flash in projects */}
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-cyan-400/30 rounded-full satellite-flash-delay-3"></div>
      <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-yellow-300/25 rounded-full lighthouse-signal-delay-1"></div>
      
      <Container size="lg">
        <div className="mx-auto max-w-6xl scroll-section-content">
          <div className="text-center mb-16">
            <div className="scroll-reveal" ref={addScrollRef}>
              <h2 className="text-3xl font-bold text-gray-50 mb-4 font-display">
                Featured Projects
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                A selection of projects showcasing my skills and approach to development
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} hover className="group scroll-reveal" ref={addScrollRef} style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-50 mb-2 font-display group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-body leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="tech-tag"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4">
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
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
} 