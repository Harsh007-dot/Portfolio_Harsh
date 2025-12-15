const skills = [
  { name: 'Java', level: 90 },
  { name: 'Python', level: 85 },
  { name: 'AI/ML', level: 88 },
  { name: 'NLP', level: 83 },
  { name: 'SQL', level: 80 },
  { name: 'Git', level: 86 },
  { name: 'CI/CD', level: 78 },
  { name: 'Testing', level: 82 }
]

import { useEffect, useState } from 'react'

export default function Skills() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section id="skills" className="mt-12">
      <h2 className="text-2xl font-orbitron neon-glow">Skills</h2>
      <div className="mt-4 grid sm:grid-cols-2 gap-4">
        {skills.map((s) => (
          <div key={s.name} className="p-4 bg-[#070707]/50 border border-gray-800 rounded-md">
            <div className="flex justify-between items-center">
              <div className="text-sm font-sharemono text-gray-200">{s.name}</div>
              <div className="text-xs text-gray-400">{s.level}%</div>
            </div>
            <div className="mt-2 h-2 bg-gray-900 rounded-full overflow-hidden border border-neonred">
              <div className={`h-full bg-neonred transition-all duration-1000`} style={{ width: mounted ? `${s.level}%` : '0%', boxShadow: '0 0 12px rgba(255,0,60,0.6)' }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
