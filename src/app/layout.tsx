import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://lumina.ai'),
  title: 'Lumina AI — Holographic Intelligence Platform',
  description: 'Futuristic AI platform that blends holographic clarity with metallic precision. Explore a new surface of intelligence.',
  icons: {
    icon: '/logo.svg'
  },
  openGraph: {
    title: 'Lumina AI — Holographic Intelligence Platform',
    description: 'Explore a new surface of intelligence.',
    images: ['/og.png']
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
