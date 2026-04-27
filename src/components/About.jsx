import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="min-h-screen bg-[#0a0a0f] px-6 py-20">
      <div className="max-w-5xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-white mb-16 text-center"
        >
          About <span className="text-yellow-400">Me</span>
        </motion.h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 md:h-[500px] rounded-xl border border-yellow-500/30 overflow-hidden"
          >
            <img
              src="/my pic.png"
              alt="Umm e Fatima"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>

          {/* Right Side - Bio */}
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

            {/* Highlight Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 text-center"
              >
                <div className="text-3xl font-bold text-yellow-400">5+</div>
                <p className="text-sm text-slate-400 mt-2">Projects Built</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 text-center"
              >
                <div className="text-3xl font-bold text-yellow-400">1+</div>
                <p className="text-sm text-slate-400 mt-2">Years Experience</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 text-center"
              >
                <div className="text-3xl font-bold text-yellow-400">∞</div>
                <p className="text-sm text-slate-400 mt-2">Always Learning</p>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About