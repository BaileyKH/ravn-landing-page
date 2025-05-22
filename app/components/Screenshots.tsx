'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Screenshots = () => {
  return (
    <div className="relative h-[600px] w-full max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute left-1/2 -translate-x-[280px] top-0 w-[240px] h-[480px] transform -rotate-12 z-10"
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary z-10" />
          <Image
            src="/nearme.png"
            alt="RAVN App Screenshot 1"
            fill
            className="object-cover rounded-3xl"
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute left-1/2 -translate-x-1/2 w-[280px] h-[560px] z-20"
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary z-10" />
          <Image
            src="/home.png"
            alt="RAVN App Screenshot 2"
            fill
            className="object-cover rounded-3xl"
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="absolute left-1/2 translate-x-[40px] top-0 w-[240px] h-[480px] transform rotate-12 z-10"
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary z-10" />
          <Image
            src="/otw.png"
            alt="RAVN App Screenshot 3"
            fill
            className="object-cover rounded-3xl"
          />
        </div>
      </motion.div>
    </div>
  )
}

export default Screenshots 