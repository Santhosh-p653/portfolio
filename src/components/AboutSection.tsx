import { useEffect, useRef } from 'react'

const specializations = [
  {
    icon: '🌱',
    title: 'Strong Learner & Foundations',
    desc: 'Learning from first principles: loss propagation, gradients, linear regression, artificial neurons, and transfer checkpoints.',
    color: '255',
  },
  {
    icon: '🤖',
    title: 'Agentic AI & Decision Models',
    desc: 'Hands-on exposure to decision models (Strands Decider 2B), policy gates, and autonomous multi-agent pipelines.',
    color: '290',
  },
  {
    icon: '🧠',
    title: 'LLM Architecture & Training',
    desc: 'Built custom GPT-style transformer from scratch with PyTorch, trained on NVIDIA A100 GPUs (8 hrs).',
    color: '210',
  },
  {
    icon: '📚',
    title: 'Retrieval-Augmented Generation',
    desc: 'Production multimodal RAG with hybrid dense/sparse search & voice layer — Agentverse 2026 Winner.',
    color: '255',
  },
  {
    icon: '☁',
    title: 'AWS & Cloud Deployments',
    desc: '5+ live deployments on AWS (EC2, Lightsail, Docker, Caddy, Firewall) across 5 AWS hackathons.',
    color: '290',
  },
  {
    icon: '🏆',
    title: 'Hackathon Competitor & Winner',
    desc: 'Competed in 75+ hackathons. Winner of HackOctober (MLH x Tech4Hack), Agentverse, and Techcommon.',
    color: '210',
  },
  {
    icon: '👁',
    title: 'Computer Vision & Media Forensics',
    desc: 'Deepfake detection with RetinaFace, Xception CNNs, and ChromaDB (actively under refinement).',
    color: '255',
  },
  {
    icon: '⚡',
    title: 'Production Backend & Security',
    desc: 'High-performance FastAPI, PostgreSQL, Caddy reverse proxy, Docker, and firewall security.',
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
