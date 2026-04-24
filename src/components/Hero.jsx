import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function Hero() {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'AI UI Developer'
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(displayText + fullText[index])
        setIndex(index + 1)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [index, displayText, fullText])

  return (
    <section id="hero" className="min-h-screen bg-[#0a0a0f] pt-20 px-6 flex items-center justify-center">
      <div className="max-w-4xl text-center">

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-7xl font-bold text-white mb-4"
        >
          Umm e Fatima
        </motion.h1>

        {/* Typewriter Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6 h-16"
        >
          {displayText}
          <span className="animate-pulse">|</span>
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto"
        >
          I build beautiful, intelligent interfaces where AI and design meet. 
          Chat with my AI assistant to learn more about my work.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex gap-6 justify-center flex-wrap"
        >
          <a
            href="#projects"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            View My Work
          </a>

          <button
            className="border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 font-bold px-8 py-3 rounded-lg transition-all duration-200"
          >
            Chat with My AI
          </button>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero