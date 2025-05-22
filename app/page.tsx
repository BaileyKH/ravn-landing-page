'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaRoute, FaFilter } from 'react-icons/fa'
import { MdRestaurant, MdLocationOn, MdDirections } from 'react-icons/md'
import Screenshots from './components/Screenshots'
import AnimatedBg from './components/AnimatedBg'

// FaApple

export default function Home() {
  
  return (
    <main className="min-h-screen">
      <section className="relative min-h-screen pt-32 flex flex-col items-center justify-start overflow-hidden">
        <AnimatedBg />
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
                Coming Soon on iOS
              </span>
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-2"
            >
              <span className="inline-block bg-gradient-to-r from-white to-accent-light bg-clip-text text-transparent">
                Discover Food
              </span>
              <br />
              <span className="inline-block bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent leading-tight">
                Along Your Journey
              </span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Find the perfect food spots near you or along your route.  
              <span className="text-accent"> Just Food, </span> 
              when and where you need it.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center gap-4 mb-16"
            >
              <Link
                href="/waitlist"
                className="group relative px-8 py-4 rounded-lg overflow-hidden bg-accent transition-all duration-300 hover:bg-accent-light hover:scale-105 hover:shadow-lg"
              >
                <div className="relative z-10 flex items-center gap-2">
                  {/* <FaApple className="text-2xl" /> */}
                  <span className="font-medium">Join the Waitlist</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          >
            <Screenshots />
          </motion.div>
        </div>
      </section>
      <section className="py-20 bg-gray-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Discover Food,{' '}
            <span className="text-accent">Your Way</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-light p-6 rounded-xl"
              >
                <feature.icon className="text-4xl text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Start Your Food Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Download RAVN and discover amazing food spots wherever your journey takes you.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center gap-4"
          >
            <Link
              href="/waitlist"
              className="bg-accent hover:bg-accent-light text-white px-8 py-4 rounded-lg flex items-center gap-2 transition-colors"
            >
              {/* <FaApple className="text-2xl" /> */}
              Join the Waitlist
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

const features = [
  {
    title: 'Nearby Discovery',
    description: 'Find restaurants near your current location with real-time updates and detailed information.',
    icon: MdLocationOn,
  },
  {
    title: 'Route Planning',
    description: 'Discover food spots along your driving route, so you never have to backtrack when hungry.',
    icon: FaRoute,
  },
  {
    title: 'Smart Filtering',
    description: 'Filter by price, distance, and whether restaurants are open now.',
    icon: FaFilter,
  },
  {
    title: 'Instant Directions',
    description: 'Get directions with one tap using your preferred maps application.',
    icon: MdDirections,
  },
  {
    title: 'No Login Required',
    description: 'Start discovering food spots immediately - no account needed.',
    icon: MdRestaurant,
  },
] 