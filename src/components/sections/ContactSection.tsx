'use client'

import { Section, Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui'
import { siteConfig } from '@/lib/constants'
import { ArrowRight, Mail, Linkedin, Github } from 'lucide-react'
import { handleEmailContact, handleExternalLink } from '@/lib/utils'

interface ContactSectionProps {
  addScrollRef: (el: HTMLElement | null) => void
}

export default function ContactSection({ addScrollRef }: ContactSectionProps) {
  return (
    <Section className="py-24 scroll-section scroll-mt-20" id="contact">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-15"></div>
      
      <div className="mx-auto max-w-6xl w-full scroll-section-content">
        {/* Main Heading Section */}
        <div className="text-center mb-16 scroll-reveal" ref={addScrollRef}>
          <h2 className="section-heading mb-4">
            Let&apos;s connect
          </h2>
          <p className="text-lg text-gray-300 text-body leading-relaxed max-w-2xl mx-auto">
            Explore my work and connect with me professionally
          </p>
        </div>

        {/* Primary Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 scroll-reveal scroll-reveal-delay-1" ref={addScrollRef}>
          {/* LinkedIn Card */}
          <Card className="card-hover bg-gray-900/50 border-gray-800">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-600/10 rounded-lg">
                  <Linkedin className="h-5 w-5 text-blue-500" />
                </div>
                <CardTitle className="text-gray-50">LinkedIn</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300">
                Connect for professional networking and opportunities.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button 
                variant="primary" 
                size="md" 
                className="group text-base px-5 py-2 rounded-md"
                onClick={() => handleExternalLink(siteConfig.linkedin)}
              >
                Connect
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>

          {/* GitHub Card */}
          <Card className="card-hover bg-gray-900/50 border-gray-800">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gray-500/10 rounded-lg">
                  <Github className="h-5 w-5 text-gray-400" />
                </div>
                <CardTitle className="text-gray-50">GitHub</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300">
                Explore my projects, contributions, and technical work.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button 
                variant="primary" 
                size="md" 
                className="group text-base px-5 py-2 rounded-md"
                onClick={() => handleExternalLink(siteConfig.github)}
              >
                View projects
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>

          {/* Email Card */}
          <Card className="card-hover bg-gray-900/50 border-gray-800">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <Mail className="h-5 w-5 text-green-400" />
                </div>
                <CardTitle className="text-gray-50">Email</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300">
                Reach out directly for collaboration, questions, or just to say hello.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button 
                variant="primary" 
                size="md" 
                className="group text-base px-5 py-2 rounded-md"
                onClick={() => handleEmailContact(siteConfig.email)}
              >
                Send email
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Section>
  )
} 