'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FiClock, FiArrowLeft } from 'react-icons/fi'
import Link from 'next/link'

interface ComingSoonProps {
  title?: string
  description?: string
  backLink?: string
  backText?: string
}

export default function ComingSoon({
  title = 'Coming Soon',
  description = "We're working hard to bring you something amazing. Stay tuned!",
  backLink = '/',
  backText = 'Back to Home'
}: ComingSoonProps) {
  return (
    <main className="min-h-screen pt-32 bg-primary overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-light/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
        <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link
              href={backLink}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
            >
              <FiArrowLeft className="text-xl" />
              <span>{backText}</span>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 rounded-full bg-accent/10 border border-accent/20 
                        flex items-center justify-center mx-auto mb-8"
            >
              <FiClock className="text-3xl text-accent" />
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white to-accent-light bg-clip-text text-transparent">
                {title}
              </span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
            >
              {description}
            </motion.p>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="relative h-2 max-w-md mx-auto bg-gray-dark/50 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '60%' }}
                transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-accent to-accent-light rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  )
} 