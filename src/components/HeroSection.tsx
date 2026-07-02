import { useEffect, useRef, useState } from 'react'

const roles = [
  'AI Engineer',
  'Machine Learning Expert',
  'LLM Architect',
  'Agentic AI Builder',
  'Computer Vision Engineer',
]

function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), speed)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setWordIdx(w => (w + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return words[wordIdx].substring(0, charIdx)
}

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const typeText = useTypewriter(roles)

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return
      const scrollY = window.scrollY
      heroRef.current.style.transform = `translateY(${scrollY * 0.3}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ zIndex: 3 }}
    >
      {/* Background city image with parallax */}
      <div
        ref={heroRef}
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}city-bg.webp)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.45) saturate(1.2)',
        }}
      />

      {/* Dark overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, oklch(0.05 0.03 265 / 0.85) 0%, oklch(0.05 0.02 265 / 0.5) 50%, oklch(0.05 0.04 290 / 0.7) 100%)',
          zIndex: 1,
        }}
      />

      {/* Rain effect overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, oklch(0.65 0.22 255 / 0.015) 2px, oklch(0.65 0.22 255 / 0.015) 3px)',
          zIndex: 2,
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 w-full flex flex-col lg:flex-row items-center gap-12" style={{ zIndex: 5 }}>
        {/* Left: Text */}
        <div className="flex-1 text-left">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 animate-fade-up"
            style={{
              border: '1px solid oklch(0.65 0.22 255 / 0.4)',
              background: 'oklch(0.65 0.22 255 / 0.08)',
              color: 'oklch(0.65 0.22 255)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            Available for opportunities
          </div>

          {/* Name */}
          <h1
            className="text-5xl md:text-7xl font-black leading-none tracking-tight mb-4 animate-fade-up delay-100"
            style={{
              background: 'linear-gradient(135deg, oklch(0.95 0.02 240) 0%, oklch(0.75 0.18 210) 40%, oklch(0.65 0.22 255) 70%, oklch(0.55 0.25 295) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Santhosh
            <br />
            Paramasivan
          </h1>

          {/* Typewriter */}
          <div className="text-xl md:text-2xl font-semibold mb-2 h-8 animate-fade-up delay-200" style={{ color: 'oklch(0.65 0.22 255)' }}>
            {typeText}
            <span
              className="inline-block w-0.5 h-6 ml-1 align-middle animate-pulse"
              style={{ background: 'oklch(0.65 0.22 255)' }}
            />
          </div>

          {/* Subtitle tags */}
          <div className="flex flex-wrap gap-2 mb-4 animate-fade-up delay-300">
            {['Machine Learning', 'Agentic AI', 'Large Language Models', 'Intelligent Systems'].map(tag => (
              <span
                key={tag}
                className="text-xs font-medium px-3 py-1 rounded-full"
                style={{
                  background: 'oklch(0.55 0.25 295 / 0.1)',
                  border: '1px solid oklch(0.55 0.25 295 / 0.3)',
                  color: 'oklch(0.75 0.18 295)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Tagline */}
          <p
            className="text-base md:text-lg mb-8 max-w-lg animate-fade-up delay-400"
            style={{ color: 'oklch(0.7 0.04 250)', lineHeight: 1.7 }}
          >
            Designing intelligent systems that solve real-world problems.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-up delay-500">
            <button
              onClick={() => handleScroll('#projects')}
              className="group relative px-8 py-3.5 rounded-full font-semibold text-sm overflow-hidden transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, oklch(0.65 0.22 255), oklch(0.55 0.25 295))',
                color: 'white',
                boxShadow: '0 0 30px oklch(0.65 0.22 255 / 0.4)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 50px oklch(0.65 0.22 255 / 0.6), 0 0 20px oklch(0.55 0.25 295 / 0.4)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px) scale(1.02)'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px oklch(0.65 0.22 255 / 0.4)'
                ;(e.currentTarget as HTMLElement).style.transform = 'none'
              }}
            >
              <span className="relative z-10">Explore Projects</span>
            </button>

            <a
              href="https://github.com/Santhosh-p653"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
              style={{
                border: '1px solid oklch(0.65 0.22 255 / 0.5)',
                color: 'oklch(0.65 0.22 255)',
                background: 'oklch(0.65 0.22 255 / 0.05)',
              }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLElement).style.background = 'oklch(0.65 0.22 255 / 0.12)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 25px oklch(0.65 0.22 255 / 0.3)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLElement).style.background = 'oklch(0.65 0.22 255 / 0.05)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                ;(e.currentTarget as HTMLElement).style.transform = 'none'
              }}
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/santhosh-paramasivan-27962332a"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
              style={{
                border: '1px solid oklch(0.55 0.25 295 / 0.5)',
                color: 'oklch(0.7 0.18 295)',
                background: 'oklch(0.55 0.25 295 / 0.05)',
              }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLElement).style.background = 'oklch(0.55 0.25 295 / 0.12)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 25px oklch(0.55 0.25 295 / 0.3)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLElement).style.background = 'oklch(0.55 0.25 295 / 0.05)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                ;(e.currentTarget as HTMLElement).style.transform = 'none'
              }}
            >
              LinkedIn
            </a>

            <button
              onClick={() => handleScroll('#contact')}
              className="px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
              style={{
                border: '1px solid oklch(0.75 0.18 210 / 0.5)',
                color: 'oklch(0.75 0.18 210)',
                background: 'oklch(0.75 0.18 210 / 0.05)',
              }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLElement).style.background = 'oklch(0.75 0.18 210 / 0.12)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 25px oklch(0.75 0.18 210 / 0.3)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLElement).style.background = 'oklch(0.75 0.18 210 / 0.05)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                ;(e.currentTarget as HTMLElement).style.transform = 'none'
              }}
            >
              Contact
            </button>
          </div>
        </div>

        {/* Right: Hero image */}
        <div className="flex-shrink-0 relative w-80 lg:w-96 xl:w-[440px] animate-fade-in delay-300">
          {/* Orbit rings */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              border: '1px solid oklch(0.65 0.22 255 / 0.15)',
              top: '-10%', left: '-10%', right: '-10%', bottom: '-10%',
            }}
          />
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              border: '1px solid oklch(0.55 0.25 295 / 0.1)',
              top: '-25%', left: '-25%', right: '-25%', bottom: '-25%',
            }}
          />

          {/* Orbiting elements */}
          <div className="absolute inset-0" style={{ top: '-10%', left: '-10%', right: '-10%', bottom: '-10%' }}>
            {[
              { label: 'ML', delay: '0s', color: '255' },
              { label: 'LLM', delay: '-4s', color: '290' },
              { label: 'CV', delay: '-8s', color: '210' },
            ].map((item, i) => (
              <div
                key={i}
                className="absolute w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold"
                style={{
                  top: '50%', left: '50%',
                  marginTop: -20, marginLeft: -20,
                  animation: `orbit ${8 + i * 4}s linear infinite`,
                  animationDelay: item.delay,
                  background: `oklch(0.65 0.22 ${item.color} / 0.15)`,
                  border: `1px solid oklch(0.65 0.22 ${item.color} / 0.5)`,
                  color: `oklch(0.75 0.18 ${item.color})`,
                  boxShadow: `0 0 15px oklch(0.65 0.22 ${item.color} / 0.3)`,
                }}
              >
                {item.label}
              </div>
            ))}
          </div>

          {/* Character image */}
          <div
            className="relative rounded-2xl overflow-hidden animate-float-slow"
            style={{
              boxShadow: '0 0 60px oklch(0.65 0.22 255 / 0.3), 0 0 120px oklch(0.55 0.25 295 / 0.15)',
              border: '1px solid oklch(0.65 0.22 255 / 0.2)',
            }}
          >
            <img
              src={`${import.meta.env.BASE_URL}anime-hero.webp`}
              alt="Santhosh Paramasivan - AI Engineer"
              className="w-full object-cover"
              style={{ height: 480 }}
            />
            {/* Scan line effect */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(transparent 50%, oklch(0.65 0.22 255 / 0.02) 50%)',
                backgroundSize: '100% 4px',
              }}
            />
            {/* Bottom gradient */}
            <div
              className="absolute bottom-0 left-0 right-0 h-32"
              style={{
                background: 'linear-gradient(transparent, oklch(0.09 0.02 265 / 0.8))',
              }}
            />
          </div>

          {/* Floating hologram cards */}
          <div
            className="absolute -left-12 top-20 px-3 py-2 rounded-lg text-xs font-mono animate-float"
            style={{
              background: 'oklch(0.11 0.025 265 / 0.8)',
              border: '1px solid oklch(0.65 0.22 255 / 0.3)',
              color: 'oklch(0.65 0.22 255)',
              backdropFilter: 'blur(10px)',
              animationDelay: '0.5s',
            }}
          >
            <div className="text-muted-foreground mb-0.5" style={{ color: 'oklch(0.5 0.04 250)', fontSize: 10 }}>NEURAL NET</div>
            <div>99.2% accuracy</div>
          </div>

          <div
            className="absolute -right-8 bottom-32 px-3 py-2 rounded-lg text-xs font-mono animate-float"
            style={{
              background: 'oklch(0.11 0.025 265 / 0.8)',
              border: '1px solid oklch(0.55 0.25 295 / 0.3)',
              color: 'oklch(0.7 0.18 295)',
              backdropFilter: 'blur(10px)',
              animationDelay: '1.2s',
            }}
          >
            <div style={{ color: 'oklch(0.5 0.04 250)', fontSize: 10 }}>AGENTS LIVE</div>
            <div>5 running</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
        style={{ zIndex: 5 }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: 'oklch(0.5 0.04 250)' }}>Scroll</span>
        <div
          className="w-6 h-10 rounded-full flex items-start justify-center pt-2"
          style={{ border: '2px solid oklch(0.65 0.22 255 / 0.3)' }}
        >
          <div
            className="w-1 h-2.5 rounded-full animate-bounce"
            style={{ background: 'oklch(0.65 0.22 255)', animationDelay: '0.3s' }}
          />
        </div>
      </div>
    </section>
  )
}
