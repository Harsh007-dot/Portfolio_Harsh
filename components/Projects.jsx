const projects = [
  { title: 'Sentiment Analysis & Text Classification (RNN)', desc: 'Comparative analysis between sentiment analysis pipelines and RNN models. Data cleaning, model evaluation, and visualization. Published at IDECT 2024 (Springer).', link: 'https://link.springer.com/chapter/10.1007/978-981-96-5223-5_43' },
  { title: 'AI Chat Agent', desc: 'CLI-based conversational agent using LangChain and LLaMA3 (via Ollama) with streaming tokens and modular dialogue components.', link: '#' },
  { title: 'E-Notice Board (ESP8266)', desc: 'Real-time notice board using ESP8266 and MQTT with a web dashboard.', link: '#' }
]

export default function Projects() {
  return (
    <section id="projects" className="mt-12">
      <h2 className="text-2xl font-orbitron neon-glow">Projects</h2>
      <div className="mt-4 grid md:grid-cols-3 gap-4">
        {projects.map((p) => (
          <a key={p.title} className="block p-4 rounded-lg border border-neonred bg-[#070707]/50 hover:scale-105 transform transition" href={p.link}>
            <h3 className="font-orbitron text-sm text-neonred">{p.title}</h3>
            <p className="mt-2 text-sm text-gray-300 font-sharemono">{p.desc}</p>
          </a>
        ))}
      </div>
      <div className="mt-6 bg-[#070707]/40 border border-gray-800 rounded-md p-4">
        <h4 className="font-orbitron text-sm text-neonred">Publications & Research</h4>
        <p className="mt-2 text-sm text-gray-300 font-sharemono">Presented <a className="text-neonred underline" href="https://link.springer.com/chapter/10.1007/978-981-96-5223-5_43" target="_blank">"Enhancing Text Data Classification through Sentiment Analysis & RNNs"</a> at IDECT 2024 (Springer), Kuala Lumpur.</p>
      </div>
    </section>
  )
}
