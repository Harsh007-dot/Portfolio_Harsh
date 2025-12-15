export default function Contact() {
  return (
    <section id="contact" className="mt-12">
      <h2 className="text-2xl font-orbitron neon-glow">Contact</h2>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <div className="bg-[#070707]/60 border border-neonred rounded-lg p-6 scanline">
          <div className="font-sharemono text-sm text-gray-200">Email: harshadandu007@gmail.com</div>
          <div className="font-sharemono text-sm text-gray-200 mt-2">Phone: +91-9014042523</div>
          <div className="font-sharemono text-sm text-gray-200 mt-2">GitHub: github.com/yourhandle</div>
          <div className="font-sharemono text-sm text-gray-200 mt-2">LinkedIn: linkedin.com/in/yourhandle</div>
        </div>
        <form className="bg-gradient-to-b from-transparent to-black/40 border border-gray-800 rounded-lg p-6">
          <label className="block text-xs text-gray-400 font-sharemono">Message</label>
          <textarea className="w-full mt-2 bg-black/40 border border-gray-700 rounded p-2 text-sm text-gray-200 focus:outline-none neon-focus" rows="4" />
          <div className="mt-3">
            <button className="px-4 py-2 bg-neonred text-black rounded hover:brightness-110 transition">Send</button>
          </div>
        </form>
      </div>
    </section>
  )
}
