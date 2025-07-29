// Function to scroll to a section
export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Function to handle email contact
export function handleEmailContact(email: string) {
  window.location.href = `mailto:${email}?subject=Portfolio Contact - Let's work together`
}

// Function to handle external links
export function handleExternalLink(url: string) {
  window.open(url, '_blank', 'noopener,noreferrer')
} 