'use client'

import { Section } from '@/components/ui'
import { skills, education } from '@/lib/constants'
import { Calendar, Award, GraduationCap, Trophy } from 'lucide-react'

interface AboutSectionProps {
  addScrollRef: (el: HTMLElement | null) => void
}

export default function AboutSection({ addScrollRef }: AboutSectionProps) {
  return (
    <Section className="py-20 scroll-section scroll-mt-20" id="about">
      <div className="scroll-section-content">
        {/* Centered Header */}
        <div className="text-center mb-10 scroll-reveal" ref={addScrollRef}>
          <h2 className="section-heading">
            About me
          </h2>
          <p className="section-description">
            A quick overview of my background and expertise
          </p>
        </div>

        {/* Main About Content */}
        <div className="divide-y divide-gray-800">
          {/* About Me Section */}
          <div className="flex flex-col py-5 gap-4 scroll-reveal w-full max-w-full" ref={addScrollRef}>
            <div className="flex-1 min-w-0 w-full max-w-full">
              <div className="font-semibold text-gray-50 break-words w-full max-w-full mb-2">Background</div>
              <div className="text-gray-400 text-sm break-words w-full max-w-full mb-4">
                I&apos;m a software engineer at JPMorgan Chase, where I modernize banking workflows through full-stack development with React and Spring Boot. I&apos;m passionate about human-centered design and creating user experiences that empower customers.
              </div>
              <div className="text-gray-400 text-sm break-words w-full max-w-full">
                I graduated with my BS and MS in Computer Science from Northwestern University, focusing on human-computer interaction. Beyond my professional work, I&apos;ve built projects ranging from award-winning data visualizations to multiplayer web applications that have engaged thousands of users.
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="flex flex-col py-5 gap-4 scroll-reveal w-full max-w-full" ref={addScrollRef}>
            <div className="flex-1 min-w-0 w-full max-w-full">
              <div className="font-semibold text-gray-50 break-words w-full max-w-full mb-4">Skills & Technologies</div>
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

        {/* Education and Achievements Two-Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Education Section */}
          <div className="scroll-reveal" ref={addScrollRef}>
            <div className="font-semibold text-gray-50 break-words w-full max-w-full mb-4 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-gray-400" />
              Education
            </div>
            <div className="space-y-3">
              {education.map((edu, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Calendar className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-gray-50 mb-1">{edu.degree}</div>
                    <div className="text-sm text-gray-400 mb-1">{edu.school} &bull; {edu.period}</div>
                    <div className="text-xs text-gray-500">GPA: {edu.gpa} &bull; {edu.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="scroll-reveal" ref={addScrollRef}>
            <div className="font-semibold text-gray-50 break-words w-full max-w-full mb-4 flex items-center gap-2">
              <Trophy className="h-5 w-5 text-gray-400" />
              Achievements
            </div>
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
      </div>
    </Section>
  )
} 