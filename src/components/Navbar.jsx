import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 px-8 py-4 flex items-center justify-between transition-all duration-500 ${
        scrolled ? 'glass border-b border-cyan-500/10' : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <motion.span
        whileHover={{ scale: 1.05 }}
        className="text-2xl font-bold shine-text cursor-pointer"
      >
        Umm e Fatima
      </motion.span>

      {/* Nav Links */}
      <ul className="hidden md:flex gap-8 list-none">
        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-slate-400 hover:text-cyan-400 transition-all duration-300 text-sm font-medium relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
            </a>
          </li>
        ))}
      </ul>

      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => document.querySelector('.fixed.bottom-6.right-6').click()}
        className="glow-pulse bg-cyan-500 hover:bg-cyan-400 text-black px-5 py-2 rounded-full font-bold text-sm transition-all duration-300"
      >
        Chat with AI ✨
      </motion.button>
    </motion.nav>
  )
}

export default Navbar