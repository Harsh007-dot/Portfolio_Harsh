export default function About() {
  return (
    <section id="about" className="mt-12">
      <h2 className="text-2xl font-orbitron neon-glow">About</h2>
      <div className="mt-4 grid md:grid-cols-2 gap-6">
        <div className="bg-[#070707]/60 border border-neonred rounded-lg p-6 scanline">
          <p className="text-gray-300 font-sharemono">Artificial Intelligence and Machine Learning graduate proficient in data analytics and model development. Experienced in Python, SQL, Power BI, and Excel for data cleaning, visualization, and reporting. Strong background in statistical analysis, predictive modeling, and NLP with hands-on experience deploying models and integrating ML with edge devices.</p>
          <div className="mt-4 text-sm text-gray-400 font-sharemono">
            <div><strong>Education:</strong> B.Tech in AI & ML, Saveetha University • 2025 • CGPA 7.8/10</div>
            <div className="mt-1"><strong>Published:</strong> IDECT 2024 (Springer) — Sentiment Analysis & RNN study</div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-transparent to-black/40 border border-gray-800 rounded-lg p-6">
          <h3 className="font-orbitron text-sm text-neonred">Core Skills</h3>
          <ul className="mt-3 text-sm text-gray-300 font-sharemono list-disc ml-5">
            <li>Programming: Python, SQL, Java</li>
            <li>Libraries: Pandas, NumPy, Scikit-learn, TensorFlow, NLTK</li>
            <li>Tools: Power BI, Excel, Jupyter, Git</li>
            <li>Data: EDA, Data Cleaning, Dashboards, Predictive Modeling</li>
            <li>Certifications: OCI Generative AI, OCI Data Science, AI Vector Search</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
