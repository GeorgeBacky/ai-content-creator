'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Wand2 } from 'lucide-react'
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <div className="pt-32 pb-8 md:pt-32 md:pb-16">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <TypeAnimation
              sequence={[
                'Create Content with AI',
                2000,
                'Protect with Blockchain',
                2000,
                'Create and Protect Your Content',
                4000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Transform your ideas into stunning content using AI, and secure your creations on the blockchain. The future of content creation is here.
          </motion.p>
          <motion.div 
            className="flex flex-col md:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button size="lg" className="flex items-center justify-center gap-2">
              <Wand2 className="w-5 h-5" />
              Start Creating
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-16 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div 
            className="aspect-video rounded-xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=80" 
              alt="AI Content Creation Platform"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero

