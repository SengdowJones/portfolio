'use client'

import { Section, Container } from '@/components/ui'

interface StatsSectionProps {
  addScrollRef: (el: HTMLElement | null) => void
}

export default function StatsSection({ addScrollRef }: StatsSectionProps) {
  return (
    <Section className="py-16 border-t border-gray-800 starlight-bg">
      {/* Lighthouse signal in stats */}
      <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-yellow-300/25 rounded-full lighthouse-signal-delay-1"></div>
      <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-blue-400/20 rounded-full satellite-flash-delay-2"></div>
      
      <Container size="lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="group scroll-reveal" ref={addScrollRef}>
            <div className="text-3xl font-bold text-gray-50 mb-2 group-hover:text-blue-400 transition-colors">3+</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
          <div className="group scroll-reveal scroll-reveal-delay-1" ref={addScrollRef}>
            <div className="text-3xl font-bold text-gray-50 mb-2 group-hover:text-blue-400 transition-colors">15+</div>
            <div className="text-sm text-gray-400">Projects Completed</div>
          </div>
          <div className="group scroll-reveal scroll-reveal-delay-2" ref={addScrollRef}>
            <div className="text-3xl font-bold text-gray-50 mb-2 group-hover:text-blue-400 transition-colors">100%</div>
            <div className="text-sm text-gray-400">Client Satisfaction</div>
          </div>
          <div className="group scroll-reveal scroll-reveal-delay-3" ref={addScrollRef}>
            <div className="text-3xl font-bold text-gray-50 mb-2 group-hover:text-blue-400 transition-colors">AWS</div>
            <div className="text-sm text-gray-400">Cloud Certified</div>
          </div>
        </div>
      </Container>
    </Section>
  )
} 