import {motion} from 'framer-motion'
const skills=[
    {name:'React.js',icon:'⚛️',level:75},
    { name: 'Tailwind CSS', icon: '🎨', level: 85 },
    { name: 'JavaScript', icon: '📜', level: 70 },
    { name: 'HTML & CSS', icon: '🌐', level: 90 },
    { name: 'Git & GitHub', icon: '🐙', level: 80 },
    { name: 'Prompt Engineering', icon: '🤖', level: 90 },
    { name: 'Gemini AI / OpenAI', icon: '✨', level: 85 },
    { name: 'Python', icon: '🐍', level: 65 },
]
function Skills(){
    return(
        <section id="skills" className="min-h-screen-bg-[#0a0a0f] px-6 py-20">
            <div className="max-w-5xl mx-auto">
                {/* section title */}
                <motion.h2
                    initial={{opacity:0,y:20}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:0.8}}
                    viewport={{once:true}}
                    className="text-5xl md:text-6xl font-bold text-white mb-4 text-center"
                >
                    My <span className="text-yellow-400">Skills</span>
                </motion.h2>
                {/* subtitle */}
                <motion.p
                    initial={{opacity:0,y:20}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:0.8,delay:0.2}}
                    viewport={{once:true}}
                    className="text-slate-400 text-center mb-16 text-lg"
                >
                    Technologies and tools I work with
                </motion.p>

                {/* skills grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill,i)=>(
                        <motion.div
                            key={skill.name}
                            initial={{opacity:0,y:30}}
                            whileInView={{opacity:1,delay:i*0.1}}
                            viewport={{once:true}}
                            whileHover={{scale:1.05,y:-5}}
                            className="bg-[#111118] border border-yellow-500/20 rounded-xl p-6 flex flex-col items-center gap-4 cursor-pointer group"
                        >
                            {/* icons */}
                            <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                                {skill.icon}
                            </div>

                            {/* skill name */}
                            <h3 className="text-white font-bold text-lg text-center">
                                {skill.name}
                            </h3>

                            {/* progress bar */}
                            <div className="w-full bg-[#1e1e2e] rounded-full h-2">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-yellow-400 h-2 rounded-full"
                                />
                            </div>

                            {/* percentage */}
                            <span className="text-yellow-400 font-bold text-sm">
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