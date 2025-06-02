import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'RAVN - Just Food',
  description: 'Find the perfect food spots near you or along your route. Pure food discovery powered by advanced mapping and filtering.',
  keywords: 'food discovery, restaurant finder, route planning, food app, food spots, Google Maps integration',
  icons: {
    icon: '/favicon.png'
  },
  openGraph: {
    title: 'RAVN - Just Food',
    description: 'Find the perfect food spots near you or along your route. Pure food discovery.',
    type: 'website',
    locale: 'en_US',
    siteName: 'RAVN',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-primary text-white min-h-screen`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
} 