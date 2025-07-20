export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Hi, I&apos;m <span className="text-accent-600">Sengdao Inthavong</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-foreground-secondary">
              Software engineer passionate about building exceptional digital experiences. 
              Specializing in modern web technologies and user-centered design.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#contact"
                className="btn btn-primary px-6 py-3 text-base"
              >
                Get in touch
              </a>
              <a
                href="#work"
                className="btn btn-ghost px-6 py-3 text-base"
              >
                View my work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-background-secondary">
        <div className="container">
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
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="section">
        <div className="container">
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
              {/* Project cards will go here */}
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-foreground">Project 1</h3>
                <p className="mt-2 text-sm text-foreground-secondary">
                  [Project description will go here]
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-foreground">Project 2</h3>
                <p className="mt-2 text-sm text-foreground-secondary">
                  [Project description will go here]
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-foreground">Project 3</h3>
                <p className="mt-2 text-sm text-foreground-secondary">
                  [Project description will go here]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-background-secondary">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Get in touch
            </h2>
            <p className="mt-4 text-lg text-foreground-secondary">
              I&apos;m always interested in hearing about new opportunities and exciting projects.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="mailto:hello@sengdao.dev"
                className="btn btn-primary px-6 py-3 text-base"
              >
                Send me an email
              </a>
              <a
                href="https://linkedin.com/in/sengdao"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost px-6 py-3 text-base"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
