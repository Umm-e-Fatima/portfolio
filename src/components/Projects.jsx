import { useRef } from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'AI Portfolio Website',
    description: 'A personal portfolio with a live AI chatbot that answers questions about my skills, projects, and availability. Built with React, Tailwind, and Gemini AI.',
    tags: ['React', 'Tailwind', 'Gemini AI', 'Framer Motion'],
    status: 'Completed',
    statusColor: 'text-green-400 border-green-400',
    github: 'https://github.com/Umm-e-Fatima',
    demo: null,
    number: '01',
  },
  {
    title: 'Real-Time Job Board Pakistan',
    description: 'A job listings aggregator for the Pakistani market. Filter by role, city, and salary. Solves a real local problem and is an instant talking point with recruiters.',
    tags: ['React', 'Fetch/Axios', 'Search & Filter', 'Responsive'],
    status: 'Coming Soon',
    statusColor: 'text-slate-400 border-slate-400',
    github: null,
    demo: null,
    number: '02',
  },
  {
    title: 'SaaS Dashboard UI',
    description: 'A fully designed admin dashboard with charts, data tables, dark/light mode toggle, and sidebar navigation. Built for finance or e-commerce use cases.',
    tags: ['React', 'Recharts', 'Dark Mode', 'CSS Grid'],
    status: 'Coming Soon',
    statusColor: 'text-slate-400 border-slate-400',
    github: null,
    demo: null,
    number: '03',
  },
]

function Projects() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const container = scrollRef.current
    const amount = 420
    container.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth'
    })
  }

  return (
    <section id="projects" className="relative min-h-screen bg-[#020c1b] px-6 py-24 overflow-hidden">

      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-900/20 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg">Scroll to explore my work →</p>
        </motion.div>

        {/* Scroll Arrows */}
        <div className="flex justify-end gap-3 mb-6">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 glass border border-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 hover:border-cyan-400 transition-all duration-300"
          >
            ←
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 glass border border-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 hover:border-cyan-400 transition-all duration-300"
          >
            →
          </button>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6"
          style={{
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="glass border border-cyan-500/10 hover:border-cyan-500/40 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer"
              style={{
                minWidth: '380px',
                maxWidth: '380px',
                scrollSnapAlign: 'start',
                minHeight: '420px',
              }}
            >
              <div>
                {/* Number and status */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-6xl font-bold text-cyan-500/20 leading-none">
                    {project.number}
                  </span>
                  <span className={`text-xs font-bold border rounded-full px-3 py-1 ${project.statusColor}`}>
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-2xl mb-4 leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs glass border border-cyan-500/20 text-slate-300 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom links */}
              <div className="flex gap-6 mt-8 pt-6 border-t border-white/5">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                  >
                    GitHub →
                  </a>
                ) : (
                  <span className="text-sm text-slate-600">GitHub coming soon</span>
                )}

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                  >
                    Live Demo →
                  </a>
                ) : (
                  <span className="text-sm text-slate-600">Demo coming soon</span>
                )}
              </div>

            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-cyan-500/30" />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects