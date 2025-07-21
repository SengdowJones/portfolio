'use client'

import { Section, Container } from '@/components/ui'
import { skills, education, achievements } from '@/lib/constants'
import { Calendar } from 'lucide-react'

interface AboutSectionProps {
  addScrollRef: (el: HTMLElement | null) => void
}

export default function AboutSection({ addScrollRef }: AboutSectionProps) {
  return (
    <Section variant="secondary" className="py-24 starlight-bg scroll-section scroll-mt-20" id="about">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      {/* Satellite flash in about section */}
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400/30 rounded-full satellite-flash-delay-2"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-purple-400/25 rounded-full lighthouse-signal-delay-3"></div>
      <Container size="5xl">
        <div className="mx-auto max-w-5xl scroll-section-content grid md:grid-cols-2 gap-16 items-start">
          {/* Left: About me and Education */}
          <div className="flex flex-col space-y-10 min-w-0">
            <div className="scroll-reveal" ref={addScrollRef}>
              <h2 className="text-3xl font-bold text-gray-50 mb-4 font-display">About me</h2>
              <p className="text-lg text-gray-400 max-w-2xl mb-6">
                Software engineer with a passion for building modern, scalable applications
              </p>
              <p className="text-gray-300 mb-4">
                I&apos;m a software engineer with experience building modern web applications and cloud infrastructure. I specialize in React, Java, and AWS, with a passion for creating intuitive user interfaces and scalable backend systems.
              </p>
              <p className="text-gray-300">
                Currently working at JPMorganChase where I&apos;m modernizing legacy banking workflows. I&apos;m also an AWS Certified Cloud Practitioner with experience in event-driven architectures and infrastructure as code.
              </p>
            </div>
            <div className="scroll-reveal" ref={addScrollRef}>
              <h3 className="text-lg font-semibold mb-4 text-gray-50">Education</h3>
              <div className="space-y-3">
                {education.map((edu, idx) => (
                  <div key={idx} className="feature-card flex items-start gap-3 px-4 py-3 scroll-reveal" ref={addScrollRef}>
                    <Calendar className="h-4 w-4 text-gray-400 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-50 mb-1">{edu.degree}</div>
                      <div className="text-sm text-gray-400 mb-1">{edu.school} &bull; {edu.period}</div>
                      <div className="text-xs text-gray-500">GPA: {edu.gpa} &bull; {edu.location}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right: Skills & Technologies and Achievements */}
          <div className="flex flex-col items-start space-y-10 w-full">
            <div className="scroll-reveal" ref={addScrollRef}>
              <h3 className="text-lg font-semibold mb-4 text-gray-50">Skills & Technologies</h3>
              <div className="space-y-3">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category} className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2 max-w-full md:max-w-[420px] lg:max-w-[520px] xl:max-w-[600px] 2xl:max-w-[700px]">
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
            <div className="scroll-reveal" ref={addScrollRef}>
              <h3 className="text-lg font-semibold mb-4 text-gray-50">Achievements</h3>
              <div className="flex flex-col gap-3 w-full">
                {achievements.map((achievement, idx) => {
                  const Icon = achievement.icon;
                  return (
                    <span
                      key={idx}
                      className={`achievement-chip flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${achievement.colorClass}`}
                    >
                      <Icon className={`h-4 w-4 ${achievement.iconClass}`} />
                      {achievement.label}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
} 