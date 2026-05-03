import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const titles = ['AI UI Developer', 'React Developer', 'Creative Coder', 'Prompt Engineer']

function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [titleIndex, setTitleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const currentTitle = titles[titleIndex]
    const timer = setTimeout(() => {
      if (!deleting) {
        if (charIndex < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          setTimeout(() => setDeleting(true), 1500)
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentTitle.slice(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          setDeleting(false)
          setTitleIndex((titleIndex + 1) % titles.length)
        }
      }
    }, deleting ? 50 : 100)

    return () => clearTimeout(timer)
  }, [charIndex, deleting, titleIndex])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020c1b]">

      {/* Wave blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="wave-animate absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-900/40 blur-3xl" />
        <div className="wave-animate-slow absolute top-20 right-0 w-80 h-80 rounded-full bg-cyan-900/20 blur-3xl" />
        <div className="wave-animate absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-blue-800/30 blur-3xl" />
        <div className="wave-animate-slow absolute -bottom-20 right-1/4 w-96 h-96 rounded-full bg-indigo-900/30 blur-3xl" />
      </div>

      {/* Floating dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="float-dot absolute w-1.5 h-1.5 rounded-full bg-cyan-400/40"
            style={{
              left: `${10 + i * 8}%`,
              top: `${20 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${3 + i * 0.3}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass border border-cyan-500/20 rounded-full px-4 py-2 mb-8"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-slate-300">Available for work</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight"
        >
          Umm e{' '}
          <span className="text-gradient">Fatima</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-4xl font-bold text-slate-300 mb-8 h-12"
        >
          <span className="text-cyan-400">{displayText}</span>
          <span className="text-cyan-400 animate-pulse">|</span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          I build beautiful, intelligent interfaces where AI and design meet.
          Chat with my AI assistant to learn more about my work.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="glow-pulse bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-full transition-all duration-300"
          >
            View My Work →
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('.fixed.bottom-6.right-6').click()}
            className="glass border border-cyan-500/30 text-cyan-400 hover:border-cyan-400 font-bold px-8 py-4 rounded-full transition-all duration-300"
          >
            Chat with My AI 🤖
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-cyan-500/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-cyan-400 rounded-full"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero