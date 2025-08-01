'use client'

import { Section, Button, StarfieldBackground } from '@/components/ui'
import { siteConfig } from '@/lib/constants'
import { ArrowRight, Mail, MapPin } from 'lucide-react'

interface HeroSectionProps {
  onEmailContact: () => void
  onScrollToAbout: () => void
}

export default function HeroSection({ onEmailContact, onScrollToAbout }: HeroSectionProps) {
  return (
    <Section className="min-h-screen flex flex-col justify-center items-center scroll-mt-20 relative overflow-hidden pt-safe sm:pt-16">
      {/* Starfield background with truly random distribution */}
      <StarfieldBackground starCount={120} />
      
      {/* Glassmorphism backdrop for entire hero section */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950/30 via-gray-900/20 to-gray-950/30 backdrop-blur-[1px] border border-gray-800/40 shadow-2xl"></div>
      
      {/* Orbiting elements for space effect */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large orbiting orb */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-orbit-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-purple-400/20 rounded-full animate-orbit-medium"></div>
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-yellow-400/25 rounded-full animate-orbit-fast"></div>
        
        {/* Medium orbiting orbs */}
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400/15 rounded-full animate-orbit-slow-delayed"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-pink-400/20 rounded-full animate-orbit-medium-delayed"></div>
        
        {/* Small floating particles */}
        <div className="absolute top-1/5 left-1/5 w-0.5 h-0.5 bg-white/40 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-1/5 right-1/5 w-0.5 h-0.5 bg-white/30 rounded-full animate-float-medium"></div>
        <div className="absolute top-3/4 left-1/2 w-0.5 h-0.5 bg-white/25 rounded-full animate-float-fast"></div>
      </div>
      
        <div className="w-full relative z-10">
          <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">
            {/* Headline */}
            <h1 className="headline">
              <div className="animate-subtle-fade stagger-0">
                I&apos;m Sengdao.
                <br />
                <span className="bg-gradient-to-r from-indigo-500 via-blue-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent animate-gradient">
                  I design experiences.
                </span>
              </div>
            </h1>
            {/* Subheadline */}
            {/* <p className="subheadline animate-subtle-fade stagger-1">
              I specialize in <strong>React, JavaScript, and modern web technologies</strong>, working as a full-stack engineer at JPMorganChase where I build scalable user interfaces with a focus on performance and user-centric development.
            </p> */}
            {/* Badges row */}
            {/* <div className="flex flex-wrap justify-start gap-2 sm:gap-4 animate-subtle-fade stagger-2">
              <span className="badge badge-blue">
                <Cloud className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" /> AWS Certified
              </span>
              <span className="badge badge-purple">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" /> Award-Winning
              </span>
              <span className="badge badge-yellow">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" /> Research & Mentorship
              </span>
            </div> */}
            {/* Location/email row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-gray-400 animate-subtle-fade stagger-2">
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-2 pb-8 sm:pb-0 animate-gentle-fade stagger-6">
              <Button 
                variant="primary"
                size="md" 
                className="group text-base px-8 py-4 w-full sm:w-auto"
                onClick={onEmailContact}
              >
                Get in touch
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="md" 
                className="text-base px-8 py-4 w-full sm:w-auto border-2 hover:bg-gray-800/20 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={onScrollToAbout}
              >
                About me
              </Button>
            </div>
          </div>
        </div>
    </Section>
  )
} 