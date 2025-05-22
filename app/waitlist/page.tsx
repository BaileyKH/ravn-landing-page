'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCheck, FiStar, FiMessageCircle } from 'react-icons/fi'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Connect to backend for waitlist
    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
    }, 3000)
  }

  const features = [
    { icon: FiStar, title: 'Early Access', description: 'Be among the first to experience RAVN' },
    { icon: FiMessageCircle, title: 'Direct Channel', description: 'Shape the future of RAVN with direct feedback' },
  ]

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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
                Limited Spots Available
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
              <span className="bg-gradient-to-r from-white to-accent-light bg-clip-text text-transparent">
                Be First in Line
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the exclusive waitlist and be part of the future of food discovery.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-accent-light/30 blur-2xl" />
            <div className="relative bg-gray-dark/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-accent/20 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-grow">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-6 py-4 bg-primary/50 border border-accent/20 rounded-xl
                               text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                               focus:ring-accent focus:border-transparent transition-all text-lg"
                      placeholder="Enter your email"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-8 py-4 rounded-xl flex items-center justify-center gap-2 text-lg font-medium
                              transition-all duration-300 shadow-lg cursor-pointer ${
                                submitted 
                                  ? 'bg-green-600 hover:bg-green-700' 
                                  : 'bg-accent hover:bg-accent-light'
                              }`}
                    type="submit"
                  >
                    {submitted ? (
                      <>
                        <FiCheck className="text-xl" />
                        <span>You're In!</span>
                      </>
                    ) : (
                      <>
                        <span>Join Now</span>
                        <FiArrowRight className="text-xl" />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
              <div className="mt-12 grid md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <feature.icon className="text-2xl text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center space-y-4"
          >
            <p className="text-2xl text-gray-300">
              <span className="text-accent font-semibold">300+</span> food enthusiasts already joined
            </p>
            <p className="text-gray-400">Limited spots available. Don't miss out!</p>
          </motion.div>
        </div>
      </div>
    </main>
  )
} 