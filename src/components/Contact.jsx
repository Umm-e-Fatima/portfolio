import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setSubmitted(true)
        setLoading(false)
        setFormData({ name: '', email: '', message: '' })
      })
      .catch((error) => {
        console.error('Email error:', error)
        setLoading(false)
      })
  }

  return (
    <section id="contact" className="min-h-screen bg-[#020c1b] px-6 py-20">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-white mb-4 text-center"
        >
          Get In <span className="text-cyan-400">Touch</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-slate-400 text-center mb-16 text-lg"
        >
          Have a project in mind? I would love to hear from you.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-white font-bold text-2xl mb-6">
                Let's work together
              </h3>
              <p className="text-slate-400 leading-relaxed">
                I am currently available for freelance work and open to full time opportunities.
                If you have a project that needs a creative AI UI Developer, let's talk!
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-4">

              <a
                href="mailto:fatimaanis809@gmail.com"
                className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition group"
              >
                <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 rounded-lg flex items-center justify-center text-xl">
                  📧
                </div>
                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="font-medium">fatimaanis809@gmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com/Umm-e-Fatima"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition group"
              >
                <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 rounded-lg flex items-center justify-center text-xl">
                  🐙
                </div>
                <div>
                  <p className="text-xs text-slate-500">GitHub</p>
                  <p className="font-medium">github.com/Umm-e-Fatima</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/umm-e-fatima/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition group"
              >
                <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 rounded-lg flex items-center justify-center text-xl">
                  💼
                </div>
                <div>
                  <p className="text-xs text-slate-500">LinkedIn</p>
                  <p className="font-medium">linkedin.com/in/umm-e-fatima</p>
                </div>
              </a>

            </div>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-medium">Available for work</span>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="text-center bg-cyan-500/10 border border-cyan-500/30 p-10 rounded-xl">
                <h3 className="text-white text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-slate-400">I'll get back to you soon.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-cyan-400 border border-cyan-400 px-4 py-2 rounded"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full bg-[#111118] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors duration-200"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full bg-[#111118] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors duration-200"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  style={{ resize: 'none' }}
                  className="w-full bg-[#111118] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors duration-200 resize-none"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-cyan-500 text-black py-3 rounded-lg"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>

              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact