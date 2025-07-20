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
                <span className="inline-flex items-center rounded-full bg-accent-50 px-3 py-1 text-sm font-medium text-accent-700 ring-1 ring-inset ring-accent-700/10">
                  Available for new opportunities
                </span>
              </div>
              
              <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl mb-8">
                Software engineer
                <br />
                <span className="text-accent-600">crafting digital experiences</span>
              </h1>
              
              <p className="text-xl leading-8 text-gray-600 mb-8 max-w-2xl mx-auto">
                I build exceptional digital products with React, Java, and cloud technologies. 
                Currently modernizing banking workflows at JPMorganChase with a focus on clean design, 
                performance, and user experience.
              </p>

              <div className="flex items-center justify-center gap-6 mb-12 text-sm text-gray-500">
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
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                  About me
                </h2>
                <div className="space-y-6 text-gray-600">
                  <p className="text-lg leading-relaxed">
                    I&apos;m a software engineer with experience building modern web applications and cloud infrastructure. 
                    I specialize in React, Java, and AWS, with a passion for creating intuitive user interfaces 
                    and scalable backend systems.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Currently working at JPMorganChase where I&apos;m modernizing legacy banking workflows and serving 
                    as the frontend point of contact for my team. I&apos;m also an AWS Certified Cloud Practitioner 
                    with experience in event-driven architectures and infrastructure as code.
                  </p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills & Technologies</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {skills.map((skillGroup) => (
                      <div key={skillGroup.category} className="space-y-2">
                        <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                          {skillGroup.category}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {skillGroup.items.map((skill) => (
                            <span
                              key={skill}
                              className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-700"
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Achievements</h3>
                  <div className="space-y-2">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Award className="h-4 w-4 text-accent-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{achievement}</span>
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
              <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">
                Experience
              </h2>
              <div className="space-y-12">
                {experience.map((job, index) => (
                  <div key={index} className="relative">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-accent-100">
                      <div className="h-2 w-2 rounded-full bg-accent-600"></div>
                    </div>
                    <div className="ml-16">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm font-medium text-accent-600">{job.company}</span>
                      </div>
                      <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{job.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600"
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
              <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">
                Education
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {education.map((edu, index) => (
                  <Card key={index} hover>
                    <CardHeader>
                      <CardTitle className="text-lg">{edu.degree}</CardTitle>
                      <CardDescription className="text-base font-medium text-gray-700">
                        {edu.school}
                      </CardDescription>
                    </CardHeader>
                    <div className="px-6 pb-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Calendar className="h-3 w-3" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <MapPin className="h-3 w-3" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        GPA: <span className="font-medium text-gray-900">{edu.gpa}</span>
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
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                  Featured projects
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  A selection of projects I&apos;ve worked on, showcasing my approach to 
                  design, development, and problem-solving.
                </p>
              </div>
              
              <div className="grid gap-8 md:grid-cols-2">
                {projects.map((project) => (
                  <Card key={project.title} hover className="group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                              <Github className="h-4 w-4" />
                            </a>
                          )}
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <div className="px-6 pb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
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
          <Container size="sm">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                Let&apos;s work together
              </h2>
              <p className="text-lg text-gray-600 mb-12">
                I&apos;m always interested in hearing about new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out.
              </p>
              
              <div className="flex items-center justify-center gap-6">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="group"
                  onClick={() => window.location.href = `mailto:${siteConfig.email}`}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Send email
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open(`https://${siteConfig.linkedin}`, '_blank')}
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </>
  )
}
