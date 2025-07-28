'use client'

import { Section, Button, StarfieldBackground } from '@/components/ui'
import { siteConfig } from '@/lib/constants'
import { ArrowRight, Mail, MapPin, Cloud, Award, Users } from 'lucide-react'

interface HeroSectionProps {
  onEmailContact: () => void
  onScrollToProjects: () => void
}

export default function HeroSection({ onEmailContact, onScrollToProjects }: HeroSectionProps) {
  return (
    <Section className="min-h-screen flex flex-col justify-start sm:justify-center items-center scroll-mt-20 relative overflow-hidden pt-safe pt-16 sm:pt-20">
      {/* Starfield background with truly random distribution */}
      <StarfieldBackground starCount={120} />
      
      {/* Glassmorphism backdrop for entire hero section */}
      <div className="absolute inset-0 bg-gray-950/20 backdrop-blur-[0.5px] border border-gray-800/30 rounded-2xl shadow-2xl"></div>
      
        <div className="w-full relative z-10">
          <div className="flex flex-col items-start text-left space-y-6 sm:space-y-8 pt-8 sm:pt-0">
            {/* Headline */}
            <h1 className="headline">
              <div className="animate-subtle-fade stagger-0">
                I&apos;m Sengdao.
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  I design experiences.
                </span>
              </div>
            </h1>
            {/* Subheadline */}
            <p className="subheadline animate-subtle-fade stagger-1">
              I specialize in React, JavaScript, and modern web technologies, working as a fullstack engineer at JPMorganChase where I build scalable user interfaces with a focus on performance and accessibility.
            </p>
            {/* Badges row */}
            <div className="flex flex-wrap justify-start gap-2 sm:gap-4 animate-subtle-fade stagger-2">
              <span className="badge badge-blue">
                <Cloud className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" /> AWS Certified
              </span>
              <span className="badge badge-purple">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" /> Award-Winning
              </span>
              <span className="badge badge-yellow">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" /> Research & Mentorship
              </span>
            </div>
            {/* Location/email row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4 sm:gap-8 text-sm text-gray-400 animate-subtle-fade stagger-3">
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
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-3 sm:gap-4 mt-2 pb-8 sm:pb-0 animate-subtle-fade stagger-5">
              <Button 
                variant="primary" 
                size="md" 
                className="group text-base px-6 py-3 w-full sm:w-auto"
                onClick={onEmailContact}
              >
                Get in touch
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="md" 
                className="text-base px-6 py-3 w-full sm:w-auto"
                onClick={onScrollToProjects}
              >
                View projects
              </Button>
            </div>
          </div>
        </div>
    </Section>
  )
} 