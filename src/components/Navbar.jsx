import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0f]/80 backdrop-blur-md border-b border-yellow-900/30'
          : 'bg-transparent'
      }`}
    >

      {/* Logo */}
      <span className="text-2xl font-bold text-yellow-400">
        Umm e Fatima
      </span>

      {/* Nav Links */}
      <ul className="flex gap-8 list-none">
        <li><a href="#hero" className="text-slate-300 hover:text-yellow-400 transition-colors duration-200">Home</a></li>
        <li><a href="#about" className="text-slate-300 hover:text-yellow-400 transition-colors duration-200">About</a></li>
        <li><a href="#skills" className="text-slate-300 hover:text-yellow-400 transition-colors duration-200">Skills</a></li>
        <li><a href="#projects" className="text-slate-300 hover:text-yellow-400 transition-colors duration-200">Projects</a></li>
        <li><a href="#contact" className="text-slate-300 hover:text-yellow-400 transition-colors duration-200">Contact</a></li>
      </ul>

      {/* Chat Button */}
      <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
        Chat with AI
      </button>

    </motion.nav>
  )
}

export default Navbar