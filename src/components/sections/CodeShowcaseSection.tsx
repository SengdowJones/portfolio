'use client'

import { Section, Container } from '@/components/ui'
import { Cloud, Database, Terminal, Users } from 'lucide-react'

interface CodeShowcaseSectionProps {
  addScrollRef: (el: HTMLElement | null) => void
}

export default function CodeShowcaseSection({ addScrollRef }: CodeShowcaseSectionProps) {
  return (
    <Section className="py-24 relative overflow-hidden starlight-bg scroll-section scroll-mt-20" id="code-showcase">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      {/* Satellite flashes in code section */}
      <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-blue-400/35 rounded-full satellite-flash-delay-1"></div>
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-purple-400/30 rounded-full lighthouse-signal-delay-2"></div>
      <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-cyan-400/25 rounded-full satellite-flash-delay-3"></div>
      
      <Container size="5xl">
        <div className="mx-auto max-w-6xl scroll-section-content">
          <div className="text-center mb-16">
            <div className="scroll-reveal" ref={addScrollRef}>
              <h2 className="text-3xl font-bold text-gray-50 mb-4 font-display">
                What I Build
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Modern applications with clean architecture and exceptional user experiences
              </p>
            </div>
          </div>
          
          {/* Interactive Code Preview */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="scroll-reveal scroll-reveal-delay-1" ref={addScrollRef}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-400 font-mono">portfolio.tsx</span>
                </div>
                
                <div className="code-block">
                  <pre className="font-mono text-sm text-left leading-relaxed">
                    <code>
                      <span className="text-purple-400">import</span> <span className="text-blue-400">React</span> <span className="text-purple-400">from</span> <span className="text-green-400">&quot;react&quot;</span>;
                      {"\n"}
                      <span className="text-purple-400">import</span> {'{ '}<span className="text-blue-400">NextJS</span>, <span className="text-blue-400">TypeScript</span>{' }'} <span className="text-purple-400">from</span> <span className="text-green-400">&quot;@/stack&quot;</span>;
                      {"\n\n"}
                      <span className="text-purple-400">const</span> <span className="text-blue-400">Portfolio</span> = () =&gt; {'{'}
                      {"\n  return (\n    "}
                        <span className="text-blue-400">&lt;main</span> <span className="text-yellow-400">className</span>=<span className="text-green-400">&quot;modern-ui&quot;</span><span className="text-blue-400">&gt;</span>{"\n      "}
                          <span className="text-blue-400">&lt;Hero</span> <span className="text-yellow-400">name</span>=<span className="text-green-400">&quot;Sengdao&quot;</span> <span className="text-blue-400">/&gt;</span>{"\n      "}
                          <span className="text-blue-400">&lt;Projects</span> <span className="text-yellow-400">tech</span>=<span className="text-green-400">&quot;React, Java, AWS&quot;</span> <span className="text-blue-400">/&gt;</span>{"\n      "}
                          <span className="text-blue-400">&lt;Experience</span> <span className="text-yellow-400">company</span>=<span className="text-green-400">&quot;JPMorganChase&quot;</span> <span className="text-blue-400">/&gt;</span>{"\n    "}
                        <span className="text-blue-400">&lt;/main&gt;</span>{"\n  );\n"}
                      {'}'};
                      {"\n\n"}
                      <span className="text-purple-400">export default</span> <span className="text-blue-400">Portfolio</span>;
                    </code>
                  </pre>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="scroll-reveal scroll-reveal-delay-2" ref={addScrollRef}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                      <Terminal className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-50 font-display">Full-Stack Development</h3>
                      <p className="text-gray-400">React, JavaScript, Java, Spring Boot</p>
                    </div>
                  </div>
                </div>
                
                <div className="scroll-reveal scroll-reveal-delay-3" ref={addScrollRef}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl">
                      <Cloud className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-50 font-display">Cloud Architecture</h3>
                      <p className="text-gray-400">AWS, Docker, Kubernetes, CI/CD</p>
                    </div>
                  </div>
                </div>
                
                <div className="scroll-reveal scroll-reveal-delay-3" ref={addScrollRef}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                      <Database className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-50 font-display">Data & APIs</h3>
                      <p className="text-gray-400">REST APIs, GraphQL, PostgreSQL</p>
                    </div>
                  </div>
                </div>
                {/* Linear-inspired feature grid additions */}
                <div className="scroll-reveal scroll-reveal-delay-4" ref={addScrollRef}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-xl">
                      <Terminal className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-50 font-display">UI/UX</h3>
                      <p className="text-gray-400">Modern interfaces, accessibility, design systems</p>
                    </div>
                  </div>
                </div>
                <div className="scroll-reveal scroll-reveal-delay-5" ref={addScrollRef}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-green-400 to-blue-400 rounded-xl">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-50 font-display">Collaboration</h3>
                      <p className="text-gray-400">Mentorship, teamwork, agile delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
} 