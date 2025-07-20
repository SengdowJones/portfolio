'use client'

import { Section, Container, Button } from '@/components/ui'
import { siteConfig } from '@/lib/constants'
import { ArrowRight, Mail, MapPin, Sparkles, Cloud, Award, Users } from 'lucide-react'
import Image from 'next/image'

interface HeroSectionProps {
  onEmailContact: () => void
  onScrollToProjects: () => void
}

export default function HeroSection({ onEmailContact, onScrollToProjects }: HeroSectionProps) {
  return (
    <Section className="pt-16 pb-20 relative overflow-hidden starlight-bg">
      {/* Subtle satellite flashes throughout */}
      <div className="absolute top-32 left-16 w-2 h-2 bg-blue-400/40 rounded-full satellite-flash"></div>
      <div className="absolute top-48 right-24 w-1.5 h-1.5 bg-purple-400/35 rounded-full satellite-flash-delay-1"></div>
      <div className="absolute bottom-40 left-32 w-2 h-2 bg-cyan-400/40 rounded-full satellite-flash-delay-2"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/25 rounded-full satellite-flash-delay-3"></div>
      
      {/* Lighthouse signals */}
      <div className="absolute top-20 right-16 w-2 h-2 bg-yellow-300/30 rounded-full lighthouse-signal"></div>
      <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-blue-300/25 rounded-full lighthouse-signal-delay-1"></div>
      <div className="absolute top-2/3 left-1/4 w-2 h-2 bg-purple-300/30 rounded-full lighthouse-signal-delay-2"></div>
      
      <Container size="lg">
        <div className="mx-auto max-w-6xl">
          {/* Photo at top */}
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Profile image */}
            <div>
              <div className="relative group">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 group-hover:scale-105 border border-gray-700">
                  <Image
                    src="/sengdao-profile.jpg"
                    alt="Sengdao Inthavong - Software Engineer"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 96px, 128px"
                  />
                </div>
              </div>
            </div>
            {/* Available badge */}
            <div>
              <span className="inline-flex items-center rounded-full bg-blue-950 px-4 py-2 text-xs font-medium text-blue-200 ring-1 ring-inset ring-blue-700/30 animate-fade-in-up">
                <Sparkles className="h-4 w-4 mr-2" />
                Available for new opportunities
              </span>
            </div>
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-50 font-display max-w-2xl mx-auto">
              Software engineer
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                crafting digital experiences
              </span>
            </h1>
            {/* Subheadline */}
            <p className="text-base sm:text-lg leading-7 text-gray-300 max-w-xl mx-auto text-body">
              I build digital products with React, Java, and cloud technologies.<br />
              Currently modernizing banking workflows at JPMorganChase with a focus on clean design and user experience.
            </p>
            {/* Badges row */}
            <div className="flex flex-wrap justify-center gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/80 text-xs text-blue-300 font-medium">
                <Cloud className="h-4 w-4 text-blue-400" /> AWS Certified
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/80 text-xs text-purple-300 font-medium">
                <Award className="h-4 w-4 text-purple-400" /> Award-Winning
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/80 text-xs text-yellow-300 font-medium">
                <Users className="h-4 w-4 text-yellow-400" /> Research & Mentorship
              </span>
            </div>
            {/* Location/email row */}
            <div className="flex items-center justify-center gap-6 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{siteConfig.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{siteConfig.email}</span>
              </div>
            </div>
            {/* Buttons */}
            <div className="flex items-center justify-center gap-3">
              <Button 
                variant="primary" 
                size="lg" 
                className="group text-base px-6 py-3"
                onClick={onEmailContact}
              >
                Get in touch
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base px-6 py-3"
                onClick={onScrollToProjects}
              >
                View projects
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
} 