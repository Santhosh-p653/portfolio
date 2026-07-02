import { useEffect, useRef } from 'react'

const skills = [
  { name: 'Python', icon: '🐍', color: '255' },
  { name: 'C++', icon: '⚙', color: '290' },
  { name: 'Java', icon: '☕', color: '210' },
  { name: 'TensorFlow', icon: '🔶', color: '255' },
  { name: 'PyTorch', icon: '🔥', color: '290' },
  { name: 'Transformers', icon: '🤗', color: '210' },
  { name: 'LangChain', icon: '🔗', color: '255' },
  { name: 'FastAPI', icon: '⚡', color: '290' },
  { name: 'Docker', icon: '🐳', color: '210' },
  { name: 'Git', icon: '🌿', color: '255' },
  { name: 'GitHub Actions', icon: '🔄', color: '290' },
  { name: 'Azure', icon: '☁', color: '210' },
  { name: 'AWS', icon: '🌩', color: '255' },
  { name: 'Vercel', icon: '▲', color: '290' },
  { name: 'Linux', icon: '🐧', color: '210' },
  { name: 'SQL', icon: '🗃', color: '255' },
  { name: 'OpenCV', icon: '👁', color: '290' },
  { name: 'NumPy', icon: '🔢', color: '210' },
  { name: 'Pandas', icon: '🐼', color: '255' },
  { name: 'Scikit-learn', icon: '📊', color: '290' },
]

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.skill-item')
    if (!items) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((el, i) => {
            setTimeout(() => {
              (el as HTMLElement).style.opacity = '1'
              ;(el as HTMLElement).style.transform = 'translateY(0) scale(1)'
            }, i * 60)
          })
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="relative py-24 px-6" style={{ zIndex: 3 }}>
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, oklch(0.55 0.25 295 / 0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div
            className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            style={{
              background: 'oklch(0.55 0.25 295 / 0.1)',
              border: '1px solid oklch(0.55 0.25 295 / 0.3)',
              color: 'oklch(0.7 0.18 295)',
            }}
          >
            Tech Stack
          </div>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight"
            style={{
              background: 'linear-gradient(135deg, oklch(0.95 0.02 240), oklch(0.55 0.25 295))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Skills & Technologies
          </h2>
          <div
            className="w-20 h-1 mx-auto mt-4 rounded-full"
            style={{ background: 'linear-gradient(90deg, oklch(0.55 0.25 295), oklch(0.65 0.22 255))' }}
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="skill-item group relative px-5 py-3 rounded-xl cursor-default"
              style={{
                opacity: 0,
                transform: 'translateY(20px) scale(0.9)',
                transition: 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                background: `oklch(0.11 0.025 265 / 0.8)`,
                border: `1px solid oklch(0.65 0.22 ${skill.color} / 0.15)`,
                backdropFilter: 'blur(10px)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = `oklch(0.65 0.22 ${skill.color} / 0.5)`
                el.style.boxShadow = `0 0 20px oklch(0.65 0.22 ${skill.color} / 0.2), 0 8px 30px oklch(0.65 0.22 ${skill.color} / 0.1)`
                el.style.transform = 'translateY(-4px) scale(1.05)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = `oklch(0.65 0.22 ${skill.color} / 0.15)`
                el.style.boxShadow = 'none'
                el.style.transform = 'translateY(0) scale(1)'
              }}
            >
              <div className="flex items-center gap-2.5">
                <span className="text-xl">{skill.icon}</span>
                <span
                  className="text-sm font-semibold tracking-wide"
                  style={{ color: `oklch(0.82 0.08 ${skill.color})` }}
                >
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
