import { Navigation, Section, Container, Card, CardHeader, CardTitle, CardDescription, Button } from '@/components/ui'
import { navigation, projects } from '@/lib/constants'

export default function Home() {
  return (
    <>
      <Navigation items={navigation} />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <Section>
          <Container size="md">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl animate-fade-in-up">
                Hi, I&apos;m <span className="text-accent-600">Sengdao Inthavong</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-foreground-secondary animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Software engineer passionate about building exceptional digital experiences. 
                Specializing in modern web technologies and user-centered design.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <Button variant="primary" size="lg">
                  Get in touch
                </Button>
                <Button variant="outline" size="lg">
                  View my work
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* About Section */}
        <Section variant="secondary">
          <Container size="md">
            <div className="mx-auto max-w-4xl">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  About me
                </h2>
                <p className="mt-4 text-lg text-foreground-secondary">
                  I&apos;m a software engineer with a passion for creating beautiful, functional, and accessible digital experiences.
                </p>
              </div>
              <div className="mt-16 grid gap-8 lg:grid-cols-2">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground">Background</h3>
                  <p className="text-foreground-secondary">
                    [Your background and experience will go here]
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground">Skills</h3>
                  <p className="text-foreground-secondary">
                    [Your technical skills and expertise will go here]
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Work Section */}
        <Section>
          <Container size="md">
            <div className="mx-auto max-w-4xl">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Featured work
                </h2>
                <p className="mt-4 text-lg text-foreground-secondary">
                  A selection of projects I&apos;ve worked on recently.
                </p>
              </div>
              <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <Card key={project.title} hover className="interactive">
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Contact Section */}
        <Section variant="gradient">
          <Container size="sm">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Get in touch
              </h2>
              <p className="mt-4 text-lg text-foreground-secondary">
                I&apos;m always interested in hearing about new opportunities and exciting projects.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button variant="primary" size="lg">
                  Send me an email
                </Button>
                <Button variant="outline" size="lg">
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </>
  )
}
