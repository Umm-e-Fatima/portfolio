import { motion } from 'framer-motion'

const skills = [
  { name: 'React.js', level: 75, color: '#00d4ff' },
  { name: 'Tailwind CSS', level: 85, color: '#38bdf8' },
  { name: 'JavaScript', level: 70, color: '#60a5fa' },
  { name: 'HTML & CSS', level: 90, color: '#00bfff' },
  { name: 'Git & GitHub', level: 80, color: '#818cf8' },
  { name: 'Prompt Engineering', level: 90, color: '#34d399' },
  { name: 'Gemini AI / OpenAI', level: 85, color: '#00d4ff' },
  { name: 'Python', level: 65, color: '#60a5fa' },
]

function Skills() {
  return (
    <section id="skills" className="relative min-h-screen bg-[#020c1b] px-6 py-24 overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-900/20 blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-slate-400 text-lg">Technologies I work with</p>
        </motion.div>

        {/* Vertical Stack */}
        <div className="flex flex-col gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, x: 6 }}
              className="relative rounded-2xl p-5 flex items-center gap-6 transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: `1px solid ${skill.color}30`,
                boxShadow: `0 0 20px ${skill.color}10, inset 0 0 20px ${skill.color}05`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 0 30px ${skill.color}30, inset 0 0 30px ${skill.color}10`
                e.currentTarget.style.borderColor = `${skill.color}70`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = `0 0 20px ${skill.color}10, inset 0 0 20px ${skill.color}05`
                e.currentTarget.style.borderColor = `${skill.color}30`
              }}
            >
              {/* Skill name */}
              <span className="text-white font-semibold text-lg w-48 shrink-0">
                {skill.name}
              </span>

              {/* Bar */}
              <div className="flex-1 bg-white/5 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, delay: i * 0.08, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className="h-2 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${skill.color}60, ${skill.color})`,
                    boxShadow: `0 0 8px ${skill.color}80`
                  }}
                />
              </div>

              {/* Percentage */}
              <span
                className="text-sm font-bold w-10 text-right shrink-0"
                style={{ color: skill.color }}
              >
                {skill.level}%
              </span>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills