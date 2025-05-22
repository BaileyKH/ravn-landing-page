'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiMessageSquare, FiClock, FiInstagram } from 'react-icons/fi'
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const contactMethods = [
    {
      icon: FiMail,
      title: 'Email Us',
      description: 'Get in touch via email',
      action: 'ravnapp.team@gmail.com',
      link: 'mailto:ravnapp.team@gmail.com'
    },
    {
      icon: FiMessageSquare,
      title: 'Support',
      description: 'Need help with RAVN?',
      action: 'ravnapp.team@gmail.com',
      link: 'mailto:ravnapp.team@gmail.com'
    }
  ]

  const socialLinks = [
    {
      icon: FiInstagram,
      name: 'Instagram',
      handle: '@ravnapp',
      link: 'https://instagram.com/ravnapp'
    },
    {
      icon: FaXTwitter,
      name: 'Twitter',
      handle: '@ravnapp',
      link: 'https://twitter.com/ravnapp'
    }
  ]

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
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
                Get in Touch
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-accent-light bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Have questions about RAVN? We&rsquo;d love to hear from you and help shape the future of food discovery.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-6 mb-16"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="group relative bg-gray-dark/80 backdrop-blur-xl p-8 rounded-2xl border border-accent/20 
                         hover:border-accent/40 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent-light/5 rounded-2xl opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <method.icon className="text-2xl text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                  <p className="text-gray-400 mb-4">{method.description}</p>
                  <p className="text-accent font-medium group-hover:text-accent-light transition-colors">
                    {method.action}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-2">
              <FiClock className="text-accent" />
              <span className="text-gray-300">Average response time: 24 hours</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-6"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Follow Us</h3>
            <div className="flex justify-center items-center gap-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="group flex items-center gap-x-2 text-gray-400 hover:text-accent transition-colors"
                >
                  <social.icon className="text-xl" />
                  <span>{social.handle}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
} 