'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FiHome, FiHelpCircle, FiArrowLeft } from 'react-icons/fi'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen pt-32 bg-primary overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-light/20 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
        <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <span className="text-[150px] md:text-[200px] font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent leading-none">
                404
              </span>
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white to-accent-light bg-clip-text text-transparent">
                Page Not Found
              </span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            >
              Oops! The page you&rsquo;re looking for seems to have wandered off the menu.
              Let&rsquo;s help you find your way back.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col md:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/"
                className="group relative px-8 py-4 rounded-lg overflow-hidden bg-accent transition-all duration-300 hover:bg-accent-light hover:scale-105 hover:shadow-lg w-full md:w-auto"
              >
                <div className="relative z-10 flex items-center justify-center gap-2">
                  <FiHome className="text-xl" />
                  <span className="font-medium">Back to Home</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                href="/contact"
                className="group px-8 py-4 rounded-lg border border-accent/20 hover:border-accent/40 transition-all duration-300 flex items-center justify-center gap-2 w-full md:w-auto"
              >
                <FiHelpCircle className="text-xl text-accent group-hover:text-accent-light" />
                <span className="font-medium text-gray-300 group-hover:text-white">Get Help</span>
              </Link>
              <button
                onClick={() => window.history.back()}
                className="group px-8 py-4 rounded-lg border border-accent/20 hover:border-accent/40 transition-all duration-300 flex items-center justify-center gap-2 w-full md:w-auto"
              >
                <FiArrowLeft className="text-xl text-accent group-hover:text-accent-light" />
                <span className="font-medium text-gray-300 group-hover:text-white">Go Back</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  )
} 