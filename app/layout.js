import './globals.css'
import Head from 'next/head'

export const metadata = {
  title: 'Harsha Vardhan Dandu — Cyberpunk Portfolio',
  description: 'Harsha Vardhan Dandu — Java Developer | AI & ML Engineer | Researcher',
  openGraph: {
    title: 'Harsha Vardhan Dandu — Cyberpunk Portfolio',
    description: 'AI/ML graduate, researcher, published at IDECT 2024 (Springer).',
    url: 'https://example.com',
    siteName: 'Harsha Dandu Portfolio'
  },
  keywords: ['AI', 'Machine Learning', 'NLP', 'Java', 'Python', 'Sentiment Analysis', 'Research']
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Share+Tech+Mono&display=swap" rel="stylesheet" />
      </Head>
      <body className="bg-cyberbg text-gray-100">
        <div className="grid-background" />
        {children}
      </body>
    </html>
  )
}
