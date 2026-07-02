import { useEffect, useRef } from 'react'

const contacts = [
  {
    platform: 'GitHub',
    handle: 'Santhosh-p653',
    href: 'https://github.com/Santhosh-p653',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.09.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.532 1.03 1.532 1.03.891 1.529 2.341 1.089 2.91.833.091-.647.349-1.086.635-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.254-.448-1.27.097-2.646 0 0 .84-.269 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.338 1.909-1.295 2.747-1.026 2.747-1.026.547 1.376.202 2.394.1 2.646.64.699 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.308.678.917.678 1.852 0 1.335-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    ),
    color: '255',
    action: 'View Profile',
  },
  {
    platform: 'LinkedIn',
    handle: 'santhosh-paramasivan',
    href: 'https://www.linkedin.com/in/santhosh-paramasivan-27962332a',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    color: '210',
    action: 'Connect',
  },
  {
    platform: 'Email',
    handle: 'santhosh11042007@gmail.com',
    href: 'mailto:santhosh11042007@gmail.com',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    color: '290',
    action: 'Send Email',
  },
  {
    platform: 'Phone',
    handle: '+91 9715803110',
    href: 'tel:+919715803110',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 13.5 19.79 19.79 0 0 1 1.08 4.82 2 2 0 0 1 3.05 2.6h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 10.5a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 17.5l.92-.58z"/>
      </svg>
    ),
    color: '255',
    action: 'Call',
  },
]

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.contact-card')
    if (!items) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((el, i) => {
            setTimeout(() => {
              (el as HTMLElement).style.opacity = '1'
              ;(el as HTMLElement).style.transform = 'translateY(0) scale(1)'
            }, i * 100)
          })
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="relative py-24 px-6" style={{ zIndex: 3 }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 100%, oklch(0.65 0.22 255 / 0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div
            className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            style={{
              background: 'oklch(0.65 0.22 255 / 0.1)',
              border: '1px solid oklch(0.65 0.22 255 / 0.3)',
              color: 'oklch(0.65 0.22 255)',
            }}
          >
            Get In Touch
          </div>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
            style={{
              background: 'linear-gradient(135deg, oklch(0.95 0.02 240), oklch(0.65 0.22 255) 50%, oklch(0.55 0.25 295))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Contact
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: 'oklch(0.6 0.04 250)' }}>
            Ready to build intelligent systems together. Let's connect.
          </p>
          <div
            className="w-20 h-1 mx-auto mt-4 rounded-full"
            style={{ background: 'linear-gradient(90deg, oklch(0.65 0.22 255), oklch(0.55 0.25 295))' }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {contacts.map((c) => (
            <a
              key={c.platform}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="contact-card group relative rounded-2xl p-6 flex items-center gap-4 no-underline"
              style={{
                opacity: 0,
                transform: 'translateY(20px) scale(0.96)',
                transition: 'opacity 0.5s ease, transform 0.4s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                background: 'oklch(0.11 0.025 265 / 0.7)',
                border: `1px solid oklch(0.65 0.22 ${c.color} / 0.15)`,
                backdropFilter: 'blur(16px)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(-4px) scale(1.01)'
                el.style.borderColor = `oklch(0.65 0.22 ${c.color} / 0.5)`
                el.style.boxShadow = `0 15px 50px oklch(0.65 0.22 ${c.color} / 0.2), 0 0 30px oklch(0.65 0.22 ${c.color} / 0.08)`
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(0) scale(1)'
                el.style.borderColor = `oklch(0.65 0.22 ${c.color} / 0.15)`
                el.style.boxShadow = 'none'
              }}
            >
              {/* Icon */}
              <div
                className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `oklch(0.65 0.22 ${c.color} / 0.1)`,
                  border: `1px solid oklch(0.65 0.22 ${c.color} / 0.3)`,
                  color: `oklch(0.75 0.18 ${c.color})`,
                  boxShadow: `0 0 20px oklch(0.65 0.22 ${c.color} / 0.15)`,
                }}
              >
                {c.icon}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: `oklch(0.6 0.1 ${c.color})` }}>
                  {c.platform}
                </div>
                <div className="text-sm font-semibold truncate" style={{ color: 'oklch(0.85 0.04 250)' }}>
                  {c.handle}
                </div>
              </div>

              {/* Action arrow */}
              <div
                className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0"
                style={{ color: `oklch(0.65 0.22 ${c.color})` }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
