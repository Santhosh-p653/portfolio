import { useEffect, useRef } from 'react'

const specializations = [
  {
    icon: '🧠',
    title: 'Machine Learning',
    desc: 'Building and deploying production ML systems at scale.',
    color: '255',
  },
  {
    icon: '🤖',
    title: 'Agentic AI',
    desc: 'Designing autonomous multi-agent AI pipelines.',
    color: '290',
  },
  {
    icon: '💬',
    title: 'Large Language Models',
    desc: 'Fine-tuning and orchestrating frontier LLMs.',
    color: '210',
  },
  {
    icon: '📚',
    title: 'Retrieval-Augmented Generation',
    desc: 'RAG architectures for accurate, grounded AI systems.',
    color: '255',
  },
  {
    icon: '👁',
    title: 'Computer Vision',
    desc: 'Deep learning models for visual understanding.',
    color: '290',
  },
  {
    icon: '☁',
    title: 'Cloud AI',
    desc: 'Scalable AI deployments on Azure and AWS.',
    color: '210',
  },
  {
    icon: '⚡',
    title: 'Backend Engineering',
    desc: 'High-performance APIs and microservices.',
    color: '255',
  },
  {
    icon: '🚀',
    title: 'AI System Design',
    desc: 'End-to-end intelligent system architecture.',
    color: '290',
  },
]

function useIntersection(ref: React.RefObject<Element | null>, threshold = 0.1) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('animate-fade-up')
          el.classList.remove('opacity-0', 'translate-y-8')
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, threshold])
}

function SpecCard({ item, index }: { item: typeof specializations[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }, index * 80)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={cardRef}
      className="card-hover glass rounded-2xl p-6 cursor-default"
      style={{
        opacity: 0,
        transform: 'translateY(30px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div
        className="text-3xl mb-4 w-12 h-12 flex items-center justify-center rounded-xl"
        style={{
          background: `oklch(0.65 0.22 ${item.color} / 0.1)`,
          border: `1px solid oklch(0.65 0.22 ${item.color} / 0.25)`,
          boxShadow: `0 0 15px oklch(0.65 0.22 ${item.color} / 0.15)`,
        }}
      >
        {item.icon}
      </div>
      <h3
        className="text-base font-bold mb-2"
        style={{ color: `oklch(0.85 0.1 ${item.color})` }}
      >
        {item.title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.6 0.04 250)' }}>
        {item.desc}
      </p>
    </div>
  )
}

export default function AboutSection() {
  const headingRef = useRef<HTMLDivElement>(null)
  useIntersection(headingRef)

  return (
    <section id="about" className="relative py-24 px-6" style={{ zIndex: 3 }}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div
          ref={headingRef}
          className="text-center mb-16 opacity-0 translate-y-8"
          style={{ transition: 'opacity 0.8s ease, transform 0.8s ease' }}
        >
          <div
            className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            style={{
              background: 'oklch(0.65 0.22 255 / 0.1)',
              border: '1px solid oklch(0.65 0.22 255 / 0.3)',
              color: 'oklch(0.65 0.22 255)',
            }}
          >
            Specializations
          </div>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight"
            style={{
              background: 'linear-gradient(135deg, oklch(0.95 0.02 240), oklch(0.65 0.22 255) 50%, oklch(0.55 0.25 295))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Areas of Expertise
          </h2>
          <div
            className="w-20 h-1 mx-auto mt-4 rounded-full"
            style={{
              background: 'linear-gradient(90deg, oklch(0.65 0.22 255), oklch(0.55 0.25 295))',
            }}
          />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {specializations.map((item, i) => (
            <SpecCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
