import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oman Real Estate - Find Your Dream Property',
  description: 'Discover luxury villas, apartments, and commercial properties in Muscat, Salalah, and across Oman. Professional real estate platform with advanced search and map integration.',
  keywords: 'Oman real estate, properties for sale, villas, apartments, Muscat, Salalah, real estate Oman, property listings',
  authors: [{ name: 'Oman Real Estate' }],
  creator: 'Oman Real Estate Platform',
  publisher: 'Oman Real Estate',
  metadataBase: new URL('https://yourdomain.com'),
  openGraph: {
    title: 'Oman Real Estate - Find Your Dream Property',
    description: 'Discover luxury villas, apartments, and commercial properties in Muscat, Salalah, and across Oman.',
    url: 'https://yourdomain.com',
    siteName: 'Oman Real Estate',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Oman Real Estate - Properties for Sale and Rent',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oman Real Estate - Find Your Dream Property',
    description: 'Discover luxury villas, apartments, and commercial properties in Muscat, Salalah, and across Oman.',
    images: ['/og-image.jpg'],
    creator: '@omanrealestate',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}