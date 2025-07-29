'use client'

import { Section } from '@/components/ui'
import { skills, education } from '@/lib/constants'
import { Calendar, Award } from 'lucide-react'

interface AboutSectionProps {
  addScrollRef: (el: HTMLElement | null) => void
}

export default function AboutSection({ addScrollRef }: AboutSectionProps) {
  return (
    <Section variant="secondary" className="py-24 scroll-section scroll-mt-20" id="about">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="scroll-section-content">
          {/* Main About Section */}
          <div className="mb-16">
            <div className="scroll-reveal" ref={addScrollRef}>
              <h2 className="section-heading">About me</h2>
              <p className="text-lg text-gray-400 max-w-2xl mb-6">
                Computer scientist and software engineer passionate about human-centered design
              </p>
              <p className="text-gray-300 mb-4">
                Hi, I&apos;m Sengdao! I&apos;m a software engineer at JPMorgan Chase, where I modernize banking workflows through full-stack development with React and Spring Boot. I&apos;m passionate about human-centered design and creating user experiences that empower customers.
              </p>
              <p className="text-gray-300 mb-4">
                I graduated with my BS and MS in Computer Science from Northwestern University, focusing on human-computer interaction. Beyond my professional work, I&apos;ve built projects ranging from award-winning data visualizations to multiplayer web applications that have engaged thousands of users.
              </p>
            </div>
          </div>

          {/* Supporting Sections Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column: Education and Achievements */}
            <div className="flex flex-col space-y-8">
              {/* Education */}
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

              {/* Achievements */}
              <div className="scroll-reveal" ref={addScrollRef}>
                <h3 className="text-lg font-semibold mb-4 text-gray-50">Achievements</h3>
                <div className="flex flex-col gap-2 w-full">
                  <span className="achievement-card-blue">
                    <Award className="h-3.5 w-3.5 text-blue-400" />
                    Best Technology Award at WildHacks &apos;23
                  </span>
                  <span className="achievement-card-purple">
                    <Award className="h-3.5 w-3.5 text-purple-400" />
                    3rd at Hack with Google: Chicago &apos;23 ($2,000)
                  </span>
                  <span className="achievement-card-yellow">
                    <Award className="h-3.5 w-3.5 text-yellow-400" />
                    Winner of Northwestern Data Vis Contest &apos;22 ($200)
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Skills & Technologies */}
            <div className="scroll-reveal" ref={addScrollRef}>
              <h3 className="text-lg font-semibold mb-4 text-gray-50">Skills & Technologies</h3>
              <div className="space-y-4">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category} className="space-y-3">
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
          </div>
        </div>
    </Section>
  )
} 