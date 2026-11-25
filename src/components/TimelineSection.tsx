import { useEffect, useRef } from 'react'

interface Milestone {
  phase: string
  title: string
  subtitle?: string
  desc: string
  color: string
  icon: string
  link?: string
  badge?: string
}

const milestones: Milestone[] = [
  {
    phase: '01',
    title: 'Foundations & Strong Learner',
    subtitle: 'From First Principles',
    desc: 'Mastered mathematical foundations, data structures, linear algebra, artificial neurons, loss propagation, and gradient optimization from first principles.',
    color: '255',
    icon: '📖',
    badge: 'First Principles',
  },
  {
    phase: '02',
    title: 'Deepfake Agentic AI',
    subtitle: 'Microservice Mesh Detection',
    desc: 'Engineered a multi-agent deepfake detection architecture using RetinaFace, Xception CNN, ChromaDB, and MinIO. Currently under active refinement and benchmark optimization.',
    color: '290',
    icon: '🕵️',
    link: 'https://github.com/Santhosh-p653/deepfake-agentic-ai',
    badge: 'Under Refinement',
  },
  {
    phase: '03',
    title: 'Agentverse Hackathon Winner',
    subtitle: 'Multimodal RAG & ₹3k INR Prize',
    desc: 'Won ₹3,000 INR in the Agentverse 2026 Hackathon with Multimodal RAG Assistant. Winning this unlocked an exclusive opportunity for our 2-teammate group to attend the advanced BYOM workshop.',
    color: '210',
    icon: '🏆',
    link: 'https://github.com/Santhosh-p653/rag-multimodal-assistant',
    badge: 'Hackathon Winner',
  },
  {
    phase: '04',
    title: 'GPT Transformer Case Study (BYOM)',
    subtitle: '8-Hour A100 Training from Scratch',
    desc: 'Built an LLM from scratch using PyTorch during the BYOM workshop formatted as a case study. Implemented a GPT-style transformer from scratch: propagation, gradients, linear regression, artificial neurons, weight transfer, and checkpoints. Trained on an NVIDIA A100 GPU machine for 8 hours — a monumental learning milestone.',
    color: '255',
    icon: '🧠',
    badge: 'Case Study · A100 GPU',
  },
  {
    phase: '05',
    title: 'Decision Models & Policy Gates',
    subtitle: 'HackOctober Winner (MLH x Tech4Hack)',
    desc: 'Gained hands-on exposure to decision models. Developed AlphaSource using Strands Decider 2B and AWS Bedrock to classify citizen requests and enforce safety policies before action, winning HackOctober.',
    color: '290',
    icon: '🛡️',
    link: 'https://github.com/Santhosh-p653/alphasource',
    badge: 'MLH x Tech4Hack Winner',
  },
  {
    phase: '06',
    title: 'AWS Hackathons & Cloud Production',
    subtitle: '5 Hackathons · 5+ AWS Live Deployments',
    desc: 'Competed in 5 AWS hackathons and deployed 5+ live production systems on AWS (EC2, Lightsail, Docker, Caddy, Firewall), including SIH E-Green Quanta and the m8ven-indexed Scrapling MCP server across 75+ hackathons.',
    color: '210',
    icon: '🚀',
    link: 'https://github.com/Santhosh-p653/egreen-quanta',
    badge: '5+ AWS Deployments',
  },
]

export default function TimelineSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.timeline-item')
    if (!items) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = parseInt((entry.target as HTMLElement).dataset.index ?? '0')
            setTimeout(() => {
              (entry.target as HTMLElement).style.opacity = '1'
              ;(entry.target as HTMLElement).style.transform = 'translateX(0)'
            }, idx * 150)
          }
        })
      },
      { threshold: 0.2 }
    )
    items.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="timeline" className="relative py-24 px-6" style={{ zIndex: 3 }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 60% at 50% 50%, oklch(0.55 0.25 295 / 0.03) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div
            className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            style={{
              background: 'oklch(0.55 0.25 295 / 0.1)',
              border: '1px solid oklch(0.55 0.25 295 / 0.3)',
              color: 'oklch(0.7 0.18 295)',
            }}
          >
            The Journey
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
            Evolution Path
          </h2>
          <div
            className="w-20 h-1 mx-auto mt-4 rounded-full"
            style={{ background: 'linear-gradient(90deg, oklch(0.55 0.25 295), oklch(0.65 0.22 255))' }}
          />
        </div>

        <div className="relative">
          {/* Center line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
            style={{
              background: 'linear-gradient(180deg, transparent, oklch(0.65 0.22 255 / 0.4) 10%, oklch(0.65 0.22 255 / 0.4) 90%, transparent)',
            }}
          />

          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div
                key={m.phase}
                className="timeline-item flex items-center gap-6 md:gap-0"
                data-index={i}
                style={{
                  opacity: 0,
                  transform: i % 2 === 0 ? 'translateX(-30px)' : 'translateX(30px)',
                  transition: 'opacity 0.6s ease, transform 0.6s ease',
                  flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
                }}
              >
                {/* Card */}
                <div
                  className="flex-1 md:max-w-[45%] rounded-2xl p-5 group cursor-default"
                  style={{
                    background: 'oklch(0.11 0.025 265 / 0.7)',
                    border: `1px solid oklch(0.65 0.22 ${m.color} / 0.2)`,
                    backdropFilter: 'blur(16px)',
                    transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = `oklch(0.65 0.22 ${m.color} / 0.5)`
                    el.style.boxShadow = `0 0 30px oklch(0.65 0.22 ${m.color} / 0.15)`
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = `oklch(0.65 0.22 ${m.color} / 0.2)`
                    el.style.boxShadow = 'none'
                  }}
                >
                  <div className="flex items-center justify-between mb-2 gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{m.icon}</span>
                      <span
                        className="text-xs font-bold tracking-widest"
                        style={{ color: `oklch(0.6 0.12 ${m.color})` }}
                      >
                        PHASE {m.phase}
                      </span>
                    </div>
                    {m.badge && (
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                        style={{
                          background: `oklch(0.65 0.22 ${m.color} / 0.12)`,
                          border: `1px solid oklch(0.65 0.22 ${m.color} / 0.35)`,
                          color: `oklch(0.85 0.15 ${m.color})`,
                        }}
                      >
                        {m.badge}
                      </span>
                    )}
                  </div>
                  <h3
                    className="text-lg font-bold mb-0.5"
                    style={{ color: `oklch(0.88 0.1 ${m.color})` }}
                  >
                    {m.title}
                  </h3>
                  {m.subtitle && (
                    <div
                      className="text-xs font-medium mb-2"
                      style={{ color: `oklch(0.7 0.14 ${m.color})` }}
                    >
                      {m.subtitle}
                    </div>
                  )}
                  <p className="text-sm leading-relaxed" style={{ color: 'oklch(0.58 0.04 250)' }}>
                    {m.desc}
                  </p>
                  {m.link && (
                    <div className="mt-3">
                      <a
                        href={m.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 hover:underline"
                        style={{ color: `oklch(0.75 0.18 ${m.color})` }}
                      >
                        View on GitHub ↗
                      </a>
                    </div>
                  )}
                </div>

                {/* Center dot */}
                <div className="hidden md:flex flex-shrink-0 w-12 items-center justify-center">
                  <div
                    className="w-4 h-4 rounded-full animate-pulse-glow"
                    style={{
                      background: `oklch(0.65 0.22 ${m.color})`,
                      boxShadow: `0 0 15px oklch(0.65 0.22 ${m.color} / 0.6), 0 0 30px oklch(0.65 0.22 ${m.color} / 0.3)`,
                    }}
                  />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1 md:max-w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
