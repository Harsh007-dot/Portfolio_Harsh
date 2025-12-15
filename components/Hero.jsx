import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function Typing({ lines, speed = 80 }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')

  useEffect(() => {
    let mounted = true
    const line = lines[index % lines.length]
    let i = 0
    setText('')
    const id = setInterval(() => {
      if (!mounted) return
      i++
      setText(line.slice(0, i))
      if (i === line.length) {
        setTimeout(() => setIndex((s) => s + 1), 800)
        clearInterval(id)
      }
    }, speed)
    return () => { mounted = false; clearInterval(id) }
  }, [index, lines, speed])

  return <span className="text-neonred">{text}<span className="blink">|</span></span>
}

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/60 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-orbitron leading-tight neon-glitch">Harsha Vardhan Dandu</h1>
            <p className="mt-3 text-neonred font-sharemono">Java Developer | AI & ML Engineer | Researcher</p>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 text-sm bg-[#070707]/60 border border-neonred px-4 py-3 rounded-md font-sharemono scanline">
              <Typing lines={["$ python run_sentiment.py --model rnn", "$ python chat_agent.py --backend=llama3", "$ monitor --device esp8266 --mqtt"]} />
            </motion.div>

            <div className="mt-6 flex gap-3">
              <a className="px-4 py-2 border border-neonred rounded-md text-sm hover:scale-105 transition transform neon-focus" href="#projects">Projects</a>
              <a className="px-4 py-2 border border-gray-700 rounded-md text-sm hover:scale-105 transition transform" href="#contact">Contact</a>
            </div>
          </div>

          <div className="relative">
            <div className="h-56 md:h-72 bg-gradient-to-br from-black/50 to-[#1b0000] border border-neonred rounded-lg p-4 scanline flex items-center justify-center">
              <div className="text-center text-xs text-gray-300 opacity-90">
                <div className="font-sharemono">Hologram Preview</div>
                <div className="mt-4 text-sm">Animated grid & subtle 3D depth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
