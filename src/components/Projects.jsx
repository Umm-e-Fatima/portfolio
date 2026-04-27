import { motion } from 'framer-motion'

const projects = [
  {
    title: 'AI Portfolio Website',
    description:
      'A personal portfolio with a live AI chatbot that answers questions about my skills, projects, and availability. Built with React, Tailwind, and Gemini AI.',
    tags: ['React', 'Tailwind', 'Gemini AI', 'Framer Motion'],
    status: 'In Progress',
    statusColor: 'text-yellow-400 border-yellow-400',
    github: 'https://github.com',
    demo: null,
    gradient: 'from-yellow-500/20 to-yellow-600/5',
  },
  {
    title: 'Real-Time Job Board Pakistan',
    description:
      'A job listings aggregator for Pakistani market. Filter by role, city, and salary. Solves a real local problem and is a instant talking point with recruiters.',
    tags: ['React', 'Fetch/Axios', 'Search & Filter', 'Responsive'],
    status: 'Coming Soon',
    statusColor: 'text-slate-400 border-slate-400',
    github: null,
    demo: null,
    gradient: 'from-blue-500/20 to-blue-600/5',
  },
  {
    title: 'SaaS Dashboard UI',
    description:
      'A fully designed admin dashboard with charts, data tables, dark/light mode toggle, and sidebar navigation. Built for finance or e-commerce use cases.',
    tags: ['React', 'Recharts', 'Dark Mode', 'CSS Grid'],
    status: 'Coming Soon',
    statusColor: 'text-slate-400 border-slate-400',
    github: null,
    demo: null,
    gradient: 'from-green-500/20 to-green-600/5',
  },
]

function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-[#0a0a0f] px-6 py-20">
      <div className="max-w-5xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-white mb-4 text-center"
        >
          My <span className="text-yellow-400">Projects</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-slate-400 text-center mb-16 text-lg"
        >
          Things I have built and things I am building
        </motion.p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`bg-gradient-to-br ${project.gradient} bg-[#111118] border border-white/10 rounded-xl p-6 flex flex-col justify-between group cursor-pointer`}
            >
              
              {/* Top */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-bold text-xl leading-tight">
                    {project.title}
                  </h3>
                  <span
                    className={`text-xs font-bold border rounded-full px-3 py-1 ml-2 shrink-0 ${project.statusColor}`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-white/5 border border-white/10 text-slate-300 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom — Links */}
              <div className="flex gap-4 mt-auto">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
                  >
                    GitHub →
                  </a>
                ) : (
                  <span className="text-sm text-slate-600">
                    GitHub coming soon
                  </span>
                )}

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
                  >
                    Live Demo →
                  </a>
                ) : (
                  <span className="text-sm text-slate-600">
                    Demo coming soon
                  </span>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects