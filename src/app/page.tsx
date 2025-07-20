'use client'

import { Navigation, Section, Container, Card, CardHeader, CardTitle, CardDescription, Button } from '@/components/ui'
import { navigation, projects, experience, skills, education, achievements, siteConfig } from '@/lib/constants'
import { ArrowRight, ExternalLink, Github, Mail, Linkedin, MapPin, Calendar, Award } from 'lucide-react'
import { useEffect, useRef, useCallback } from 'react'
import HeroSection from '@/components/sections/HeroSection'
import CodeShowcaseSection from '@/components/sections/CodeShowcaseSection'
import StatsSection from '@/components/sections/StatsSection'

export default function Home() {
  const scrollRefs = useRef<(HTMLElement | null)[]>([])
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Initialize the observer
  const initObserver = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    // Ensure IntersectionObserver is available
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed')
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -100px 0px' // Start revealing slightly before element enters viewport
        }
      )

      // Observe all current refs
      scrollRefs.current.forEach((ref) => {
        if (ref && observerRef.current) {
          observerRef.current.observe(ref)
        }
      })
    }
  }, [])

  useEffect(() => {
    // Initialize observer on mount with a longer delay to ensure hero is visible first
    const initTimer = setTimeout(() => {
      initObserver()
    }, 300) // Increased delay to ensure hero section is visible

    // Fallback: Force reveal all elements after a longer delay only if needed
    const fallbackTimer = setTimeout(() => {
      scrollRefs.current.forEach((ref) => {
        if (ref && !ref.classList.contains('revealed')) {
          ref.classList.add('revealed')
        }
      })
    }, 3000) // Longer fallback time - only as emergency backup

    // Cleanup on unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
      clearTimeout(initTimer)
      clearTimeout(fallbackTimer)
    }
  }, [initObserver])

  const addScrollRef = useCallback((el: HTMLElement | null) => {
    if (el && !scrollRefs.current.includes(el)) {
      scrollRefs.current.push(el)
      // Observe the new element immediately
      if (observerRef.current) {
        observerRef.current.observe(el)
      }
    }
  }, [])

  // Function to scroll to a section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Function to handle email contact
  const handleEmailContact = () => {
    window.location.href = `mailto:${siteConfig.email}?subject=Portfolio Contact - Let's work together`
  }

  // Function to handle external links
  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <Navigation items={navigation} />
      
      <main className="min-h-screen">
        <HeroSection 
          onEmailContact={handleEmailContact}
          onScrollToProjects={() => scrollToSection('projects')}
        />

        <CodeShowcaseSection addScrollRef={addScrollRef} />

        <StatsSection addScrollRef={addScrollRef} />

        {/* About Section - Linear-inspired with scroll reveal */}
        <Section variant="secondary" className="py-24 starlight-bg scroll-section" id="about">
          {/* Grid pattern background */}
          <div className="absolute inset-0 grid-pattern opacity-20"></div>
          
          {/* Satellite flash in about section */}
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400/30 rounded-full satellite-flash-delay-2"></div>
          <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-purple-400/25 rounded-full lighthouse-signal-delay-3"></div>
          
          <Container size="lg">
            <div className="mx-auto max-w-4xl scroll-section-content">
              <div className="text-center mb-16">
                <div className="scroll-reveal" ref={addScrollRef}>
                  <h2 className="text-3xl font-bold text-gray-50 mb-4 font-display">
                    About me
                  </h2>
                  <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    Software engineer with a passion for building modern, scalable applications
                  </p>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-6 text-body">
                  <div className="scroll-reveal scroll-reveal-delay-1" ref={addScrollRef}>
                    <p className="text-lg leading-relaxed text-gray-300">
                      I&apos;m a software engineer with experience building modern web applications and cloud infrastructure. 
                      I specialize in React, Java, and AWS, with a passion for creating intuitive user interfaces 
                      and scalable backend systems.
                    </p>
                  </div>
                  <div className="scroll-reveal scroll-reveal-delay-2" ref={addScrollRef}>
                    <p className="text-lg leading-relaxed text-gray-300">
                      Currently working at JPMorganChase where I&apos;m modernizing legacy banking workflows and serving 
                      as the frontend point of contact for my team. I&apos;m also an AWS Certified Cloud Practitioner 
                      with experience in event-driven architectures and infrastructure as code.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="scroll-reveal scroll-reveal-delay-1" ref={addScrollRef}>
                    <h3 className="text-lg font-semibold text-gray-50 mb-4 font-display">Skills & Technologies</h3>
                    <div className="space-y-4">
                      {skills.map((skillGroup) => (
                        <div key={skillGroup.category} className="space-y-2">
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

                  <div className="scroll-reveal scroll-reveal-delay-2" ref={addScrollRef}>
                    <h3 className="text-lg font-semibold text-gray-50 mb-4 font-display">Achievements</h3>
                    <div className="space-y-2">
                      {achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg feature-card">
                          <Award className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Experience Section - Linear-inspired with scroll reveal */}
        <Section className="py-24 starlight-bg scroll-section" id="experience">
          {/* Grid pattern background */}
          <div className="absolute inset-0 grid-pattern opacity-15"></div>
          
          {/* Lighthouse signal in experience */}
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-400/25 rounded-full lighthouse-signal-delay-3"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-cyan-400/20 rounded-full satellite-flash-delay-1"></div>
          
          <Container size="lg">
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
                  <div key={index} className="relative group scroll-reveal" ref={addScrollRef} style={{ transitionDelay: `${index * 0.1}s` }}>
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-blue-950 group-hover:bg-blue-900 transition-colors">
                      <div className="h-2.5 w-2.5 rounded-full bg-blue-400"></div>
                    </div>
                    <div className="ml-16">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-xl font-semibold text-gray-50 font-display group-hover:text-blue-400 transition-colors">{job.title}</h3>
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-base font-medium text-blue-400">{job.company}</span>
                      </div>
                      <div className="flex items-center gap-6 mb-3 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{job.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed mb-4 text-body">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
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

        {/* Education Section - Linear-inspired */}
        <Section variant="secondary" className="py-24 starlight-bg scroll-section">
          <Container size="lg">
            <div className="mx-auto max-w-4xl scroll-section-content">
              <div className="text-center mb-16">
                <div className="scroll-reveal" ref={addScrollRef}>
                  <h2 className="text-3xl font-bold text-gray-50 mb-4 font-display">
                    Education
                  </h2>
                  <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    Academic background in computer science
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {education.map((edu, index) => (
                  <Card key={index} hover className="group scroll-reveal" ref={addScrollRef} style={{ transitionDelay: `${index * 0.1}s` }}>
                    <CardHeader>
                      <CardTitle className="text-lg font-display">{edu.degree}</CardTitle>
                      <CardDescription className="text-base font-medium text-gray-300">
                        {edu.school}
                      </CardDescription>
                    </CardHeader>
                    <div className="px-6 pb-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                      <div className="text-base text-gray-300">
                        GPA: <span className="font-bold text-gray-50">{edu.gpa}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Projects Section - Linear-inspired with scroll reveal */}
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
                            <Github className="h-4 w-4" />
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

        {/* Contact Section - Linear-inspired with scroll reveal */}
        <Section variant="secondary" className="py-24 starlight-bg scroll-section" id="contact">
          {/* Grid pattern background */}
          <div className="absolute inset-0 grid-pattern opacity-15"></div>
          
          {/* Lighthouse signal in contact */}
          <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-yellow-300/20 rounded-full lighthouse-signal"></div>
          <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-blue-400/15 rounded-full satellite-flash-delay-2"></div>
          
          <Container size="md">
            <div className="mx-auto max-w-2xl text-center scroll-section-content">
              <div className="scroll-reveal" ref={addScrollRef}>
                <h2 className="text-3xl font-bold text-gray-50 mb-6 font-display">
                  Let&apos;s work together
                </h2>
                <p className="text-lg text-gray-300 mb-8 text-body leading-relaxed">
                  I&apos;m always interested in new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>
              
              <div className="flex items-center justify-center gap-6 mb-8">
                <button
                  onClick={handleEmailContact}
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors text-base font-medium cursor-pointer"
                >
                  <Mail className="h-5 w-5" />
                  <span>Email me</span>
                </button>
                <button
                  onClick={() => handleExternalLink(siteConfig.linkedin)}
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors text-base font-medium cursor-pointer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </button>
                <button
                  onClick={() => handleExternalLink(siteConfig.github)}
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors text-base font-medium cursor-pointer"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </button>
              </div>
              
              <div className="scroll-reveal scroll-reveal-delay-1" ref={addScrollRef}>
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="group text-lg px-8 py-4"
                  onClick={handleEmailContact}
                >
                  Get in touch
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </>
  )
}
