'use client'

import { Navigation } from '@/components/ui'
import { navigation } from '@/lib/constants'
import { useScrollReveal } from '@/lib/hooks'
import { scrollToSection } from '@/lib/utils'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  const { addScrollRef } = useScrollReveal()

  return (
    <>
      <Navigation items={navigation} />
      
      <main className="min-h-screen">
        <HeroSection 
          onEmailContact={() => window.location.href = `mailto:imsengdao@gmail.com?subject=Portfolio Contact - Let's work together`}
          onScrollToProjects={() => scrollToSection('projects')}
        />

        <AboutSection addScrollRef={addScrollRef} />
        <ExperienceSection addScrollRef={addScrollRef} />
        <ProjectsSection addScrollRef={addScrollRef} />
        <ContactSection addScrollRef={addScrollRef} />
      </main>
    </>
  )
}
