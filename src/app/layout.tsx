import type { Metadata } from 'next'
import { Inter, Raleway } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/lib/theme'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const raleway = Raleway({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-raleway',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sengdao Inthavong - Software Engineer',
  description: 'Software engineer crafting digital experiences with React, Java, and cloud technologies.',
  keywords: ['software engineer', 'react', 'java', 'aws', 'full stack', 'web development'],
  authors: [{ name: 'Sengdao Inthavong' }],
  creator: 'Sengdao Inthavong',
  publisher: 'Sengdao Inthavong',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sengdao.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sengdao Inthavong - Software Engineer',
    description: 'Software engineer crafting digital experiences with React, Java, and cloud technologies.',
    url: 'https://sengdao.dev',
    siteName: 'Sengdao Inthavong',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sengdao Inthavong - Software Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sengdao Inthavong - Software Engineer',
    description: 'Software engineer crafting digital experiences with React, Java, and cloud technologies.',
    images: ['/og-image.jpg'],
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
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${raleway.variable} dark`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
        {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
