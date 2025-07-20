import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Sengdao Inthavong - Software Engineer',
    template: '%s | Sengdao Inthavong'
  },
  description: 'Software engineer passionate about building exceptional digital experiences. Specializing in modern web technologies and user-centered design.',
  keywords: ['software engineer', 'web developer', 'frontend', 'react', 'next.js', 'typescript'],
  authors: [{ name: 'Sengdao Inthavong' }],
  creator: 'Sengdao Inthavong',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sengdao.dev',
    title: 'Sengdao Inthavong - Software Engineer',
    description: 'Software engineer passionate about building exceptional digital experiences.',
    siteName: 'Sengdao Inthavong',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sengdao Inthavong - Software Engineer',
    description: 'Software engineer passionate about building exceptional digital experiences.',
    creator: '@sengdao',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  )
}
