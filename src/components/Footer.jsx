import {motion} from 'framer-motion'
function Footer(){
    const currentYear=new Date().getFullYear()
    return (
        <footer className="bg-[#020c1b] border-t border-white/10 px-6 py-10">
            <div className="max-w-5xl mx-auto">

                {/* top row */}
                <motion.div
                    initial={{opacity:0,y:20}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:0.8}}
                    viewport={{once:true}}
                    className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8"
                >
                    {/* name */}
                    <span className="text-2xl font-bold text-yellow">
                        Umm e Fatima
                    </span>
                    {/* Nav links */}
                    <div className="flex gap-6 flex-wrap justify-center">
                        <a href="#hero" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm">Home</a>
                        <a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm">About</a>
                        <a href="#skills" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm">Skills</a>
                        <a href="#projects" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm">Projects</a>
                        <a href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm">Contact</a>
                    </div>
                    {/* social icons */}
                    <div className="flex gap-4">
                        <a
                            href="https://github.com/Umm-e-Fatima"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200"
                        >
                            🐙
                        </a>
                        <a
                            href="https://www.linkedin.com/in/umm-e-fatima/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200"
                        >
                            💼
                        </a>
                        <a
                         href="mailto:fatimaanis809@gmail.com"
                         className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200"
                        >
                           📧 
                        </a>
                   </div>
                </motion.div>
            </div>
        </footer>
    )
}
export default Footer