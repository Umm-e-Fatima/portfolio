import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SYSTEM_PROMPT = `You are the AI assistant for Umm e Fatima's personal portfolio website.
You represent her professionally and answer questions about her on her behalf.

Here is everything about her:

NAME: Umm e Fatima
TITLE: AI UI Developer
EMAIL: fatimaanis809@gmail.com
GITHUB: https://github.com/Umm-e-Fatima
LINKEDIN: https://www.linkedin.com/in/umm-e-fatima/

SKILLS: React.js, Tailwind CSS, JavaScript, HTML & CSS, Git & GitHub, Prompt Engineering, Gemini AI / OpenAI API, Python

PROJECTS:
1. AI Portfolio Website (In Progress) - A personal portfolio with a live AI chatbot that answers questions about skills, projects, and availability. Built with React, Tailwind, Framer Motion, and Gemini AI.
2. Real-Time Job Board Pakistan (Coming Soon) - A job listings aggregator for the Pakistani market with filters for role, city, and salary.
3. SaaS Dashboard UI (Coming Soon) - A fully designed admin dashboard with charts, data tables, dark/light mode toggle, and sidebar navigation.

AVAILABILITY: Currently available for freelance work and open to full time opportunities.

ABOUT: Umm e Fatima is an AI UI Developer passionate about creating beautiful, intelligent interfaces that solve real problems. She specializes in building modern web applications where design meets functionality. She loves experimenting with AI integration and interactive design.

INSTRUCTIONS:
- Always be professional, friendly, and helpful
- Answer only questions related to Umm e Fatima, her skills, projects, and availability
- If asked something unrelated, politely redirect to her portfolio topics
- Keep answers concise and clear
- If asked for contact info, provide her email and LinkedIn
- Encourage visitors to use the contact form if they want to work together`

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm Umm e Fatima's AI assistant. Ask me anything about her skills, projects, or availability! 👋"
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (messages.length > 1) {
      localStorage.setItem('chatHistory', JSON.stringify(messages))
    }
  }, [messages])

  useEffect(() => {
    const saved = localStorage.getItem('chatHistory')
    if (saved) {
      setMessages(JSON.parse(saved))
    }
  }, [])

  const sendMessage = async () => {
    if (!input.trim() || loading) return

    const userMessage = { role: 'user', content: input }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setInput('')
    setLoading(true)

    try {
      const conversationHistory = updatedMessages
        .slice(1)
        .map(msg => ({
          role: msg.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: msg.content }]
        }))

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            system_instruction: {
              parts: [{ text: SYSTEM_PROMPT }]
            },
            contents: conversationHistory
          })
        }
      )

      const data = await response.json()
      const aiReply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't process that. Please try again!"

      setMessages(prev => [...prev, { role: 'assistant', content: aiReply }])
    } catch (error) {
      console.error('Gemini error:', error)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "Sorry, something went wrong. Please try again!"
      }])
    }

    setLoading(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const clearChat = () => {
    const initial = [{
      role: 'assistant',
      content: "Hi! I'm Umm e Fatima's AI assistant. Ask me anything about her skills, projects, or availability! 👋"
    }]
    setMessages(initial)
    localStorage.removeItem('chatHistory')
  }

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-yellow-500 hover:bg-yellow-600 text-black rounded-full shadow-lg shadow-yellow-500/30 flex items-center justify-center text-2xl transition-colors duration-200"
      >
        {isOpen ? '✕' : '🤖'}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-80 md:w-96 h-[500px] bg-[#111118] border border-yellow-500/20 rounded-2xl shadow-2xl shadow-yellow-500/10 flex flex-col overflow-hidden"
          >

            {/* Header */}
            <div className="bg-yellow-500/10 border-b border-yellow-500/20 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                  AI
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Fatima's AI Assistant</p>
                  <p className="text-green-400 text-xs flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse inline-block"></span>
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={clearChat}
                className="text-slate-500 hover:text-yellow-400 text-xs transition-colors duration-200"
              >
                Clear
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-yellow-500 text-black font-medium rounded-br-none'
                        : 'bg-white/5 text-slate-300 rounded-bl-none border border-white/10'
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {/* Loading dots */}
              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-2xl rounded-bl-none flex gap-1 items-center">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-white/10 px-4 py-3 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-yellow-500/50 transition-colors duration-200"
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="w-10 h-10 bg-yellow-500 hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed text-black rounded-xl flex items-center justify-center transition-colors duration-200 font-bold"
              >
                ➤
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Chatbot