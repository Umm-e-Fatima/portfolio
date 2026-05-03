import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="relative min-h-screen bg-[#020c1b] px-6 py-24 overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-900/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-cyan-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-white mb-16 text-center"
        >
          About <span className="text-gradient">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden border border-cyan-500/20"
          >
            <img
              src="mypic.png"
              alt="Umm e Fatima"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020c1b]/60 to-transparent" />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Hi! I'm Umm e Fatima, an AI UI Developer passionate about creating beautiful,
              intelligent interfaces that solve real problems. I specialize in building modern
              web applications where design meets functionality.
            </p>

            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              I love experimenting with new technologies, especially in AI integration and
              interactive design. My journey started with a curiosity about how things work,
              and it evolved into a mission to build experiences that users love.
            </p>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring design trends, learning new tools,
              or contributing to the developer community. I believe in continuous learning and
              pushing the boundaries of what's possible on the web.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { value: '5+', label: 'Projects Built' },
                { value: '1+', label: 'Years Experience' },
                { value: '∞', label: 'Always Learning' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glass border border-cyan-500/20 rounded-xl p-4 text-center"
                >
                  <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                  <p className="text-sm text-slate-400 mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About