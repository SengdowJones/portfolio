'use client'

import { Navigation, Section, Container, Card, CardHeader, CardTitle, CardDescription, Button } from '@/components/ui'
import { navigation, projects, experience, skills, education, achievements, siteConfig } from '@/lib/constants'
import { ArrowRight, ExternalLink, Github, Mail, Linkedin, MapPin, Calendar, Award } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Navigation items={navigation} />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <Section className="pt-32 pb-24">
          <Container size="md">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-8">
                <span className="inline-flex items-center rounded-full bg-accent-50 px-3 py-1 text-sm font-medium text-accent-800 ring-1 ring-inset ring-accent-700/10 dark:bg-accent-950 dark:text-accent-200 dark:ring-accent-700/30">
                  Available for new opportunities
                </span>
              </div>
              
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-7xl mb-8 font-display">
                Software engineer
                <br />
                <span className="text-accent-600 dark:text-accent-400">crafting digital experiences</span>
              </h1>
              
              <p className="text-xl leading-8 text-gray-800 dark:text-gray-200 mb-8 max-w-2xl mx-auto text-body">
                I build exceptional digital products with React, Java, and cloud technologies. 
                Currently modernizing banking workflows at JPMorganChase with a focus on clean design, 
                performance, and user experience.
              </p>

              <div className="flex items-center justify-center gap-6 mb-12 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{siteConfig.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>{siteConfig.email}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-4">
                <Button variant="primary" size="lg" className="group">
                  Get in touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg">
                  View projects
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* About Section */}
        <Section variant="secondary" className="py-24" id="about">
          <Container size="lg">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-50 mb-6 font-display">
                  About me
                </h2>
                <div className="space-y-6 text-body">
                  <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                    I&apos;m a software engineer with experience building modern web applications and cloud infrastructure. 
                    I specialize in React, Java, and AWS, with a passion for creating intuitive user interfaces 
                    and scalable backend systems.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                    Currently working at JPMorganChase where I&apos;m modernizing legacy banking workflows and serving 
                    as the frontend point of contact for my team. I&apos;m also an AWS Certified Cloud Practitioner 
                    with experience in event-driven architectures and infrastructure as code.
                  </p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-4 font-display">Skills & Technologies</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {skills.map((skillGroup) => (
                      <div key={skillGroup.category} className="space-y-2">
                        <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                          {skillGroup.category}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {skillGroup.items.map((skill) => (
                            <span
                              key={skill}
                              className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200 transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-4 font-display">Achievements</h3>
                  <div className="space-y-2">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Award className="h-4 w-4 text-accent-600 dark:text-accent-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Experience Section */}
        <Section className="py-24" id="experience">
          <Container size="lg">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-50 mb-12 text-center font-display">
                Experience
              </h2>
              <div className="space-y-12">
                {experience.map((job, index) => (
                  <div key={index} className="relative">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-accent-100 dark:bg-accent-900">
                      <div className="h-2 w-2 rounded-full bg-accent-600 dark:bg-accent-400"></div>
                    </div>
                    <div className="ml-16">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 font-display">{job.title}</h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
                        <span className="text-sm font-medium text-accent-600 dark:text-accent-400">{job.company}</span>
                      </div>
                      <div className="flex items-center gap-4 mb-3 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{job.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-body">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
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

        {/* Education Section */}
        <Section variant="secondary" className="py-24">
          <Container size="lg">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-50 mb-12 text-center font-display">
                Education
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {education.map((edu, index) => (
                  <Card key={index} hover>
                    <CardHeader>
                      <CardTitle className="text-lg font-display">{edu.degree}</CardTitle>
                      <CardDescription className="text-base font-medium text-gray-700 dark:text-gray-300">
                        {edu.school}
                      </CardDescription>
                    </CardHeader>
                    <div className="px-6 pb-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                          <Calendar className="h-3 w-3" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                          <MapPin className="h-3 w-3" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-700 dark:text-gray-300">
                        GPA: <span className="font-medium text-gray-900 dark:text-gray-50">{edu.gpa}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Projects Section */}
        <Section className="py-24" id="projects">
          <Container size="lg">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-50 mb-12 text-center font-display">
                Featured Projects
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <Card key={index} hover className="group">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                                                 <div>
                           <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-2 font-display group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                             {project.title}
                           </h3>
                         </div>
                        <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors" />
                      </div>
                      
                      <p className="text-gray-700 dark:text-gray-300 mb-4 text-body leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-4">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                          >
                            <Github className="h-4 w-4" />
                            <span>View code</span>
                          </a>
                        )}
                                                 {project.link && (
                           <a
                             href={project.link}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                           >
                             <ExternalLink className="h-4 w-4" />
                             <span>Live demo</span>
                           </a>
                         )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Contact Section */}
        <Section variant="secondary" className="py-24" id="contact">
          <Container size="md">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-50 mb-6 font-display">
                Let&apos;s work together
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-body leading-relaxed">
                I&apos;m always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              
              <div className="flex items-center justify-center gap-6 mb-8">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>Email me</span>
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
              </div>
              
              <Button variant="primary" size="lg" className="group">
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </Container>
        </Section>
      </main>
    </>
  )
}
