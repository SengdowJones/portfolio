'use client'

import { Section } from '@/components/ui'
import { skills, education } from '@/lib/constants'
import { Calendar, Award, Code, GraduationCap, Trophy } from 'lucide-react'

interface AboutSectionProps {
  addScrollRef: (el: HTMLElement | null) => void
}

export default function AboutSection({ addScrollRef }: AboutSectionProps) {
  return (
    <Section variant="secondary" className="py-24 scroll-section scroll-mt-20" id="about">
      {/* Enhanced grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      <div className="scroll-section-content">
        {/* Main About Content */}
        <div className="max-w-6xl mx-auto">
          {/* Hero About Card */}
          <div className="scroll-reveal mb-16" ref={addScrollRef}>
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-12">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-50 mb-4 font-display">
                    About Me
                  </h2>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Software engineer with a passion for building modern, scalable applications that make a difference.
                  </p>
                  <div className="space-y-4 text-gray-300">
                    <p className="leading-relaxed">
                      I&apos;m a software engineer with experience building modern web applications and cloud infrastructure. 
                      I specialize in React, Java, and AWS, with a passion for creating intuitive user interfaces and scalable backend systems.
                    </p>
                    <p className="leading-relaxed">
                      Currently working at JPMorganChase where I&apos;m modernizing legacy banking workflows. 
                      I&apos;m also an AWS Certified Cloud Practitioner with experience in event-driven architectures and infrastructure as code.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Code Snippet Card */}
          <div className="scroll-reveal scroll-reveal-delay-1 mb-16" ref={addScrollRef}>
            <div className="bg-gray-950/80 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden">
              <div className="code-window-controls bg-gray-900/80 border-b border-gray-800/50">
                <div className="code-window-dots">
                  <div className="code-window-dot-red"></div>
                  <div className="code-window-dot-yellow"></div>
                  <div className="code-window-dot-green"></div>
                </div>
                <span className="code-window-title">portfolio.jsx</span>
              </div>
              <div className="p-6">
                <pre className="font-mono text-left leading-relaxed whitespace-pre-wrap break-words text-sm md:text-base">
                  <code>
                    <span className="text-purple-400">import</span> <span className="text-blue-400">React</span> <span className="text-purple-400">from</span> <span className="text-green-400">&apos;react&apos;</span>;
                    {"\n"}
                    {"\n"}
                    <span className="text-purple-400">const</span> <span className="text-blue-400">Portfolio</span> = () =&gt; {'{'}
                    {"\n  return (\n    "}
                      <span className="text-blue-400">&lt;main</span> <span className="text-yellow-400">className</span>=<span className="text-green-400">&apos;modern-ui&apos;</span><span className="text-blue-400">&gt;</span>{"\n      "}
                        <span className="text-blue-400">&lt;Hero</span> <span className="text-yellow-400">name</span>=<span className="text-green-400">&apos;Sengdao&apos;</span> <span className="text-blue-400">/&gt;</span>{"\n      "}
                        <span className="text-blue-400">&lt;Projects</span> <span className="text-yellow-400">tech</span>=<span className="text-green-400">&apos;React, Java, AWS&apos;</span> <span className="text-blue-400">/&gt;</span>{"\n      "}
                        <span className="text-blue-400">&lt;Experience</span> <span className="text-yellow-400">company</span>=<span className="text-green-400">&apos;JPMorganChase&apos;</span> <span className="text-blue-400">/&gt;</span>{"\n    "}
                      <span className="text-blue-400">&lt;/main&gt;</span>{"\n  );\n"}
                    {'}'};
                    {"\n\n"}
                    <span className="text-purple-400">export default</span> <span className="text-blue-400">Portfolio</span>;
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* Skills and Achievements Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Skills Card */}
            <div className="scroll-reveal scroll-reveal-delay-2" ref={addScrollRef}>
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Code className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-50 font-display">Skills & Technologies</h3>
                </div>
                <div className="space-y-6">
                  {skills.map((skillGroup) => (
                    <div key={skillGroup.category} className="space-y-3">
                      <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                        {skillGroup.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 bg-gray-800/50 border border-gray-700/50 rounded-lg text-sm text-gray-200 hover:bg-gray-700/50 hover:border-gray-600/50 transition-all duration-200"
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

            {/* Achievements Card */}
            <div className="scroll-reveal scroll-reveal-delay-3" ref={addScrollRef}>
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <Trophy className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-50 font-display">Achievements</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                    <Award className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-50 mb-1">Best Technology Award</h4>
                      <p className="text-sm text-gray-300">WildHacks &apos;23</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                    <Award className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-50 mb-1">3rd Place Winner</h4>
                      <p className="text-sm text-gray-300">Hack with Google: Chicago &apos;23 ($2,000)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                    <Award className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-50 mb-1">Data Visualization Winner</h4>
                      <p className="text-sm text-gray-300">Northwestern Data Vis Contest &apos;22 ($200)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="scroll-reveal scroll-reveal-delay-4" ref={addScrollRef}>
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-50 font-display">Education</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {education.map((edu, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-gray-800/30 border border-gray-700/50 rounded-xl hover:bg-gray-800/50 transition-all duration-200">
                    <Calendar className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-50 mb-1">{edu.degree}</h4>
                      <p className="text-sm text-gray-300 mb-1">{edu.school}</p>
                      <p className="text-xs text-gray-400 mb-1">{edu.period}</p>
                      <p className="text-xs text-gray-500">GPA: {edu.gpa} &bull; {edu.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
} 