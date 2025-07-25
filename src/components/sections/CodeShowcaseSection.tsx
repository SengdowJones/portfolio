
import { Section, Container } from '@/components/ui'
import { Cloud, Database, Terminal, Users } from 'lucide-react'

interface CodeShowcaseSectionProps {
  addScrollRef: (el: HTMLElement | null) => void;
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
        <div className="mx-auto max-w-5xl w-full px-4 sm:px-6 scroll-section-content">
          <div className="text-center mb-16">
            <div className="scroll-reveal" ref={addScrollRef}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-50 mb-4 font-display">
                What I Build
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
                Modern applications with clean architecture and exceptional user experiences
              </p>
            </div>
          </div>
          
          {/* Interactive Code Preview */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 items-center w-full max-w-full">
            <div className="w-full space-y-6 max-w-full">
              <div className="scroll-reveal scroll-reveal-delay-1" ref={addScrollRef}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-400 font-mono">portfolio.jsx</span>
                </div>
                <div className="code-block overflow-x-auto max-w-full text-xs sm:text-sm">
                  <pre className="font-mono text-left leading-relaxed whitespace-pre-wrap break-words">
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
            <div className="w-full space-y-8 max-w-full divide-y divide-gray-800">
              <div className="space-y-0">
                {/* Feature list: minimal, compact, Linear-inspired */}
                <div className="scroll-reveal scroll-reveal-delay-2" ref={addScrollRef}>
                  <div className="flex items-center gap-3 py-4">
                    <Terminal className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    <div>
                      <h3 className="text-base font-semibold text-gray-50 font-display">Full-Stack Development</h3>
                      <p className="text-gray-400 text-xs">React, JavaScript, Java, Spring Boot</p>
                    </div>
                  </div>
                </div>
                <div className="scroll-reveal scroll-reveal-delay-3" ref={addScrollRef}>
                  <div className="flex items-center gap-3 py-4">
                    <Cloud className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    <div>
                      <h3 className="text-base font-semibold text-gray-50 font-display">Cloud Architecture</h3>
                      <p className="text-gray-400 text-xs">AWS, Docker, Kubernetes, CI/CD</p>
                    </div>
                  </div>
                </div>
                <div className="scroll-reveal scroll-reveal-delay-3" ref={addScrollRef}>
                  <div className="flex items-center gap-3 py-4">
                    <Database className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    <div>
                      <h3 className="text-base font-semibold text-gray-50 font-display">Data & APIs</h3>
                      <p className="text-gray-400 text-xs">REST APIs, GraphQL, PostgreSQL</p>
                    </div>
                  </div>
                </div>
                <div className="scroll-reveal scroll-reveal-delay-4" ref={addScrollRef}>
                  <div className="flex items-center gap-3 py-4">
                    <Terminal className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    <div>
                      <h3 className="text-base font-semibold text-gray-50 font-display">UI/UX</h3>
                      <p className="text-gray-400 text-xs">Modern interfaces, accessibility, design systems</p>
                    </div>
                  </div>
                </div>
                <div className="scroll-reveal scroll-reveal-delay-5" ref={addScrollRef}>
                  <div className="flex items-center gap-3 py-4">
                    <Users className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    <div>
                      <h3 className="text-base font-semibold text-gray-50 font-display">Collaboration</h3>
                      <p className="text-gray-400 text-xs">Mentorship, teamwork, agile delivery</p>
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