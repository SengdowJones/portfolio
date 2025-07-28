'use client'

import { Section, Button } from '@/components/ui'
import { siteConfig } from '@/lib/constants'
import { ArrowRight, Mail, Linkedin, Github } from 'lucide-react'
import { handleEmailContact, handleExternalLink } from '@/lib/utils'

interface ContactSectionProps {
  addScrollRef: (el: HTMLElement | null) => void
}

export default function ContactSection({ addScrollRef }: ContactSectionProps) {
  return (
    <Section variant="secondary" className="py-24 scroll-section scroll-mt-20" id="contact">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-15"></div>
      
        <div className="mx-auto max-w-2xl w-full text-center scroll-section-content">
          <div className="scroll-reveal" ref={addScrollRef}>
            <h2 className="section-heading">
              Let&apos;s work together
            </h2>
            <p className="text-lg text-gray-300 mb-8 text-body leading-relaxed">
              I&apos;m always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>
          
          <div className="scroll-reveal scroll-reveal-delay-1 flex items-center justify-center gap-6 mb-8" ref={addScrollRef}>
            <button
              onClick={() => handleEmailContact(siteConfig.email)}
              className="contact-button"
            >
              <Mail className="h-5 w-5" />
              <span>Email me</span>
            </button>
            <button
              onClick={() => handleExternalLink(siteConfig.linkedin)}
              className="contact-button"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </button>
            <button
              onClick={() => handleExternalLink(siteConfig.github)}
              className="contact-button"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </button>
          </div>
          
          <div className="scroll-reveal scroll-reveal-delay-1" ref={addScrollRef}>
            <Button 
              variant="primary" 
              size="md" 
              className="group text-base px-5 py-2 rounded-md"
              onClick={() => handleEmailContact(siteConfig.email)}
            >
              Get in touch
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
    </Section>
  )
} 