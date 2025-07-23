'use client'

import { useState } from 'react'
import { projects } from '@/lib/constants'
import { Section, Container } from '@/components/ui'
import { handleExternalLink } from '@/lib/utils'
import { Code, ExternalLink, ArrowUpRight } from 'lucide-react'

interface ProjectsSectionProps {
  addScrollRef: (el: HTMLElement | null) => void
}

export default function ProjectsSection({ addScrollRef }: ProjectsSectionProps) {
  const [loadingProject, setLoadingProject] = useState<string | null>(null)

  const handleProjectLink = async (url: string, projectTitle: string) => {
    setLoadingProject(projectTitle)
    try {
      await handleExternalLink(url)
    } finally {
      // Reset loading state after a short delay
      setTimeout(() => setLoadingProject(null), 500)
    }
  }

  return (
    <Section 
      className="py-20 starlight-bg scroll-section scroll-mt-20" 
      id="projects" 
      ref={addScrollRef}
      aria-labelledby="projects-heading"
    >
      <Container size="5xl">
        <div className="mx-auto max-w-5xl scroll-section-content">
          {/* Enhanced header with better typography */}
          <div className="text-center mb-16 scroll-reveal" ref={addScrollRef}>
            <h2 
              id="projects-heading" 
              className="text-4xl md:text-5xl font-bold text-gray-50 mb-6 font-display 
                         bg-gradient-to-r from-gray-50 to-gray-300 bg-clip-text text-transparent"
            >
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A curated selection of my most impactful work, showcasing innovation 
              in web development, cloud architecture, and user experience design.
            </p>
          </div>

          {/* Enhanced projects grid */}
          <div className="space-y-8">
            {projects.map((project, idx) => {
              const isLoading = loadingProject === project.title
              
              return (
                <article
                  key={project.title}
                  className="group relative overflow-hidden rounded-2xl border border-gray-800 
                           bg-gray-900/50 backdrop-blur-sm transition-all duration-500 ease-out
                           hover:border-gray-700 hover:bg-gray-800/50 hover:shadow-2xl 
                           hover:shadow-gray-900/50 hover:-translate-y-2 scroll-reveal"
                  ref={addScrollRef}
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                  aria-labelledby={`project-${idx}-title`}
                >
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-950/10 via-transparent to-purple-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      {/* Project content */}
                      <div className="flex-1 min-w-0 space-y-4">
                        {/* Project icon and title */}
                        <div className="flex items-start gap-4">
                          {project.icon && (
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-800 
                                           border border-gray-700 flex items-center justify-center
                                           group-hover:bg-gray-700 group-hover:border-gray-600 
                                           transition-colors duration-300">
                              <project.icon className="w-6 h-6 text-blue-400" aria-hidden="true" />
                            </div>
                          )}
                          <div className="min-w-0 flex-1">
                            <h3 
                              id={`project-${idx}-title`}
                              className="text-2xl font-bold text-gray-50 mb-2 font-display
                                       group-hover:text-blue-100 transition-colors duration-300"
                            >
                              {project.title}
                            </h3>
                            <p className="text-gray-400 text-lg font-medium">
                              {project.brief}
                            </p>
                          </div>
                        </div>

                        {/* Project description */}
                        <p className="text-gray-300 leading-relaxed text-lg">
                          {project.description}
                        </p>

                        {/* Technology tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:min-w-[140px]">
                        {project.github && (
                          <button
                            onClick={() => handleProjectLink(project.github!, project.title)}
                            disabled={isLoading}
                            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 
                                     text-sm font-medium text-gray-300 bg-gray-800 border border-gray-700
                                     rounded-lg transition-all duration-200 ease-out
                                     hover:text-gray-50 hover:bg-gray-700 hover:border-gray-600
                                     hover:shadow-md hover:scale-[1.02]
                                     focus-visible:outline-none focus-visible:ring-2 
                                     focus-visible:ring-blue-400 focus-visible:ring-offset-2
                                     focus-visible:ring-offset-gray-900
                                     disabled:opacity-50 disabled:cursor-not-allowed
                                     active:scale-95"
                            aria-label={`View source code for ${project.title}`}
                          >
                            {isLoading ? (
                              <div className="loading-spinner" aria-hidden="true" />
                            ) : (
                              <Code className="w-4 h-4" aria-hidden="true" />
                            )}
                            <span>View Code</span>
                          </button>
                        )}
                        
                        {project.link && (
                          <button
                            onClick={() => handleProjectLink(project.link!, project.title)}
                            disabled={isLoading}
                            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 
                                     text-sm font-medium text-gray-50 bg-gradient-to-r from-blue-600 to-purple-600
                                     rounded-lg transition-all duration-200 ease-out
                                     hover:from-blue-500 hover:to-purple-500 hover:shadow-lg 
                                     hover:shadow-blue-500/25 hover:scale-[1.02]
                                     focus-visible:outline-none focus-visible:ring-2 
                                     focus-visible:ring-blue-400 focus-visible:ring-offset-2
                                     focus-visible:ring-offset-gray-900
                                     disabled:opacity-50 disabled:cursor-not-allowed
                                     active:scale-95"
                            aria-label={`View live demo of ${project.title}`}
                          >
                            {isLoading ? (
                              <div className="loading-spinner border-t-white" aria-hidden="true" />
                            ) : (
                              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                            )}
                            <span>Live Demo</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-400 to-purple-400 
                                transition-all duration-500 ease-out group-hover:w-full" />
                </article>
              )
            })}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16 scroll-reveal" ref={addScrollRef}>
            <p className="text-gray-400 text-lg mb-6">
              Interested in seeing more of my work?
            </p>
            <button
              onClick={() => handleExternalLink('https://github.com/SengdowJones')}
              className="inline-flex items-center gap-2 px-6 py-3 text-gray-300 
                       border border-gray-700 rounded-lg transition-all duration-200 ease-out
                       hover:text-gray-50 hover:bg-gray-800/50 hover:border-gray-600
                       hover:shadow-md hover:scale-105
                       focus-visible:outline-none focus-visible:ring-2 
                       focus-visible:ring-blue-400 focus-visible:ring-offset-2
                       focus-visible:ring-offset-gray-900"
              aria-label="View all projects on GitHub"
            >
              <Code className="w-5 h-5" aria-hidden="true" />
              <span className="font-medium">View All Projects on GitHub</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </Container>
    </Section>
  )
} 