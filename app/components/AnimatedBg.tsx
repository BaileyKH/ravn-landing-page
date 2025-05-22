'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const AnimatedBg = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-dark via-primary to-primary" />
      <div className='absolute top-170 lg:top-1/2 -translate-y-1/2 -left-50'>
        <Image 
            src='/logo.png' 
            alt='Ravn Logo' 
            width={900} 
            height={900}
            className='opacity-30'
          /> 
      </div>
      <div className='hidden lg:block absolute top-1/2 -translate-y-1/2 -right-50'>
        <Image 
            src='/logo.png' 
            alt='Ravn Logo' 
            width={900} 
            height={900}
            className='opacity-30 scale-x-[-1] utility class'
          /> 
      </div>
      <div className="absolute top-20 left-[20%] w-[300px] h-[300px] rounded-full bg-accent/20 blur-[100px]" />
      <div className="absolute bottom-40 right-[15%] w-[250px] h-[250px] rounded-full bg-accent-light/20 blur-[80px]" />
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
              background: 'linear-gradient(45deg, #CC1014, #FF1418)',
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              opacity: 0.1,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              delay: i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
      <div 
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: `radial-gradient(#CC1014 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary" />
    </div>
  )
}

export default AnimatedBg 