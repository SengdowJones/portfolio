'use client'

import { Section, Container, Button } from '@/components/ui'
import { siteConfig } from '@/lib/constants'
import { ArrowRight, Mail, MapPin, Cloud, Award, Users, ArrowDown } from 'lucide-react'
import Image from 'next/image'

interface HeroSectionProps {
  onEmailContact: () => void
  onScrollToProjects: () => void
}

export default function HeroSection({ onEmailContact, onScrollToProjects }: HeroSectionProps) {
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Section 
      className="min-h-screen flex flex-col justify-center items-center scroll-mt-20 relative overflow-hidden starlight-bg"
      role="banner"
      aria-labelledby="hero-heading"
    >
      {/* Enhanced gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-950 to-gray-950 opacity-95"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/5 via-transparent to-purple-950/5"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-cyan-950/3 via-transparent to-indigo-950/3"></div>
      
      {/* Optimized satellite flashes throughout */}
      <div className="absolute top-32 left-16 w-2 h-2 bg-blue-400/40 rounded-full satellite-flash" aria-hidden="true"></div>
      <div className="absolute top-48 right-24 w-1.5 h-1.5 bg-purple-400/35 rounded-full satellite-flash-delay-1" aria-hidden="true"></div>
      <div className="absolute bottom-40 left-32 w-2 h-2 bg-cyan-400/40 rounded-full satellite-flash-delay-2" aria-hidden="true"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/25 rounded-full satellite-flash-delay-3" aria-hidden="true"></div>
      
      {/* Enhanced lighthouse signals */}
      <div className="absolute top-20 right-16 w-2 h-2 bg-yellow-300/30 rounded-full lighthouse-signal" aria-hidden="true"></div>
      <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-blue-300/25 rounded-full lighthouse-signal-delay-1" aria-hidden="true"></div>
      <div className="absolute top-2/3 left-1/4 w-2 h-2 bg-purple-300/30 rounded-full lighthouse-signal-delay-2" aria-hidden="true"></div>
      
      <Container size="5xl">
        <div className="mx-auto max-w-5xl w-full px-4 sm:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Enhanced profile image with better accessibility */}
            <div className="fade-in-up-blur fade-delay-0">
              <div className="relative group">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden 
                               shadow-2xl transition-all duration-500 ease-out group-hover:scale-105 
                               border border-gray-700 group-hover:border-gray-600
                               group-hover:shadow-blue-500/20 group-hover:shadow-2xl">
                  <Image
                    src="/sengdao-profile.jpg"
                    alt="Sengdao Inthavong - Software Engineer and Full-Stack Developer"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority
                    sizes="(max-width: 640px) 128px, 160px"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                {/* Animated ring */}
                <div className="absolute inset-0 rounded-2xl border-2 border-blue-400/0 
                               group-hover:border-blue-400/50 transition-all duration-500 
                               group-hover:scale-110"></div>
              </div>
            </div>

            {/* Enhanced headline with better typography */}
            <div className="space-y-4">
              <h1 
                id="hero-heading"
                className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-gray-50 
                         font-display max-w-4xl mx-auto fade-in-up-blur fade-delay-2"
              >
                I&apos;m{' '}
                <span className="relative inline-block">
                  Sengdao
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 
                                 transform scale-x-0 transition-transform duration-700 ease-out 
                                 animate-[scale-x_1s_ease-out_2s_forwards]"></div>
                </span>
                .
              </h1>
              
              <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight fade-in-up-blur fade-delay-3">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 
                               bg-clip-text text-transparent bg-300% animate-gradient-x">
                  I craft digital experiences.
                </span>
              </p>
            </div>

            {/* Enhanced subheadline with better spacing */}
            <p className="text-lg sm:text-xl lg:text-2xl leading-8 text-gray-300 max-w-3xl mx-auto 
                         text-body fade-in-up-blur fade-delay-4 font-light">
              Building digital products with{' '}
              <span className="font-medium text-blue-300">React</span>,{' '}
              <span className="font-medium text-purple-300">Java</span>, and{' '}
              <span className="font-medium text-cyan-300">cloud technologies</span>.
              <br className="hidden sm:block" />
              Currently modernizing banking workflows at{' '}
              <span className="font-medium text-gray-200">JPMorganChase</span>{' '}
              with a focus on clean design and user experience.
            </p>

            {/* Enhanced achievement badges */}
            <div className="flex flex-wrap justify-center gap-4 fade-in-up-blur fade-delay-5">
              <div className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full 
                            bg-gray-800/80 backdrop-blur-sm text-sm text-blue-300 font-medium
                            border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300
                            hover:bg-gray-700/80 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                <Cloud className="h-5 w-5 text-blue-400 group-hover:animate-pulse" aria-hidden="true" />
                <span>AWS Certified</span>
              </div>
              
              <div className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full 
                            bg-gray-800/80 backdrop-blur-sm text-sm text-purple-300 font-medium
                            border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300
                            hover:bg-gray-700/80 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
                <Award className="h-5 w-5 text-purple-400 group-hover:animate-pulse" aria-hidden="true" />
                <span>Award-Winning</span>
              </div>
              
              <div className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full 
                            bg-gray-800/80 backdrop-blur-sm text-sm text-yellow-300 font-medium
                            border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300
                            hover:bg-gray-700/80 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/20">
                <Users className="h-5 w-5 text-yellow-400 group-hover:animate-pulse" aria-hidden="true" />
                <span>Research & Mentorship</span>
              </div>
            </div>

            {/* Enhanced location/email row */}
            <div className="flex items-center justify-center gap-8 text-sm text-gray-400 
                          fade-in-up-blur fade-delay-6">
              <div className="flex items-center gap-2 hover:text-gray-300 transition-colors duration-200">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>{siteConfig.location}</span>
              </div>
              <div className="flex items-center gap-2 hover:text-gray-300 transition-colors duration-200">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>{siteConfig.email}</span>
              </div>
            </div>

            {/* Enhanced call-to-action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 
                          fade-in-up-blur fade-delay-6">
              <Button 
                variant="primary" 
                size="lg" 
                className="group text-lg px-8 py-4 font-semibold min-w-[180px]
                         hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
                onClick={onEmailContact}
                aria-label="Contact Sengdao via email"
              >
                Get in touch
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 
                                     group-hover:translate-x-1" aria-hidden="true" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 font-semibold min-w-[180px]
                         hover:shadow-lg transition-all duration-300"
                onClick={onScrollToProjects}
                aria-label="View featured projects"
              >
                View projects
              </Button>
            </div>

            {/* Enhanced scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 
                          fade-in-up-blur fade-delay-6">
              <button
                onClick={scrollToAbout}
                className="flex flex-col items-center gap-2 text-gray-400 hover:text-gray-300 
                         transition-all duration-300 group focus-visible:outline-none 
                         focus-visible:ring-2 focus-visible:ring-blue-400 rounded-md p-2"
                aria-label="Scroll to about section"
              >
                <span className="text-xs font-medium uppercase tracking-wide">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center
                              group-hover:border-gray-500 transition-colors duration-300">
                  <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 
                                animate-bounce group-hover:bg-gray-500 transition-colors duration-300"></div>
                </div>
                <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
} 