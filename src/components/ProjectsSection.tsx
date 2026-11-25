import { useEffect, useRef } from 'react'

interface Project {
  title: string
  description: string
  tags: string[]
  github: string
  live: string | null
  color: string
  featured: boolean
  badge?: string
  icon?: string
}

const projects: Project[] = [
  {
    title: 'E-Green Quanta (SIH 2026)',
    badge: 'SIH 2026 · AWS Live',
    icon: '🌱',
    description: 'Quantum-inspired traffic route optimization engine & dispatch dashboard (SIH 2026). Benchmarks QPSO and Quantum Walk over 70+ km regional road network. Deployed on AWS behind Caddy and firewall.',
    tags: ['FastAPI', 'PostgreSQL', 'AWS', 'Docker', 'Caddy', 'SIH 2026'],
    github: 'https://github.com/Santhosh-p653/egreen-quanta',
    live: 'http://13.205.230.193/',
    color: '210',
    featured: true,
  },
  {
    title: 'AlphaSource',
    badge: 'HackOctober Winner (MLH)',
    icon: '🛡️',
    description: 'Winner of HackOctober (MLH x Tech4Hack) — Bilingual (English/Tamil) developer policy gate and welfare scheme assistant powered by Strands Decider 2B and AWS Bedrock to classify requests before execution.',
    tags: ['MLH Winner', 'Decision Models', 'AWS Bedrock', 'Strands SDK', 'FastAPI'],
    github: 'https://github.com/Santhosh-p653/alphasource',
    live: null,
    color: '290',
    featured: true,
  },
  {
    title: 'Multimodal RAG Assistant',
    badge: 'Agentverse Winner (₹3k INR)',
    icon: '🧠',
    description: 'Agentverse 2026 Hackathon Winner (₹3,000 INR prize) — Retrieval-Augmented multimodal assistant with hybrid Qdrant/BM25 retrieval, Whisper STT, Sarvam AI Indic voice synthesis, and LangGraph diagnostic reasoning.',
    tags: ['Agentverse Winner', 'RAG', 'LangGraph', 'Qdrant', 'FastAPI'],
    github: 'https://github.com/Santhosh-p653/rag-multimodal-assistant',
    live: null,
    color: '255',
    featured: true,
  },
  {
    title: 'Scrapling MCP Server',
    badge: 'm8ven Indexed · AWS',
    icon: '⚡',
    description: 'Knowledge ingestion FastMCP server indexed in the m8ven repository. Provides AI agents and IDEs unified web scraping, documentation crawling, GitHub ingestion, and PDF extraction. Deployed on AWS Lightsail.',
    tags: ['MCP Server', 'FastMCP', 'AWS Lightsail', 'Web Scraping', 'm8ven'],
    github: 'https://github.com/Santhosh-p653/scrapling',
    live: null,
    color: '210',
    featured: true,
  },
  {
    title: 'Doc2Site',
    badge: 'Techcommon Hacks Winner',
    icon: '📄',
    description: 'Techcommon Hacks Winner — Transforms documentation and PDFs into responsive static web platforms with incremental generation, search indexing, and automated CI/CD pipeline.',
    tags: ['Techcommon Winner', 'Node.js', 'Static Site', 'GitHub Pages'],
    github: 'https://github.com/Santhosh-p653/doc2site',
    live: 'https://santhosh-p653.github.io/doc2site/Santhosh.html',
    color: '255',
    featured: false,
  },
  {
    title: 'Deepfake Agentic AI',
    badge: 'Under Refinement',
    icon: '🤖',
    description: 'AI-powered multi-agent deepfake detection system leveraging RetinaFace, Xception CNN, and ChromaDB. Currently under active refinement with ongoing architectural upgrades.',
    tags: ['Under Refinement', 'Computer Vision', 'Deep Learning', 'LangGraph', 'Python'],
    github: 'https://github.com/Santhosh-p653/deepfake-agentic-ai',
    live: null,
    color: '290',
    featured: false,
  },
  {
    title: 'ShoppyAI',
    badge: 'HuggingFace Live',
    icon: '🛒',
    description: 'AI-powered shopping assistant with intelligent recommendations, natural language product search, and personalized conversational commerce.',
    tags: ['AI', 'NLP', 'FastAPI', 'Gradio', 'HuggingFace'],
    github: 'https://github.com/Santhosh-p653/shoppyai',
    live: 'https://santhosh11042007-shoppyai.hf.space/',
    color: '210',
    featured: false,
  },
  {
    title: 'Cascade Prevention',
    badge: 'Cloud-Native DevOps',
    icon: '🛡️',
    description: 'AI-assisted DevOps platform detecting application timeout cascades, monitoring service health telemetry, and isolating failures with circuit breakers and fallback mechanisms.',
    tags: ['DevOps', 'FastAPI', 'Circuit Breaker', 'Telemetry', 'Docker'],
    github: 'https://github.com/Santhosh-p653/cascade-prevention',
    live: null,
    color: '255',
    featured: false,
  },
  {
    title: 'Smart Grid',
    badge: 'Fault Tolerance',
    icon: '🔌',
    description: 'Grid management platform for administrators and operators — handles fault tolerance and real-time transformer status monitoring across the power grid.',
    tags: ['Spring Boot', 'MySQL', 'Next.js', 'Fault Tolerance'],
    github: 'https://github.com/Santhosh-p653/smart-grid',
    live: null,
    color: '290',
    featured: false,
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
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
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      style={{
        opacity: 0,
        transform: 'translateY(40px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
        background: 'oklch(0.11 0.025 265 / 0.7)',
        backdropFilter: 'blur(20px)',
        border: `1px solid oklch(0.65 0.22 ${project.color} / 0.15)`,
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'translateY(-8px)'
        el.style.borderColor = `oklch(0.65 0.22 ${project.color} / 0.5)`
        el.style.boxShadow = `0 20px 60px oklch(0.65 0.22 ${project.color} / 0.2), 0 0 40px oklch(0.65 0.22 ${project.color} / 0.08)`
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'translateY(0)'
        el.style.borderColor = `oklch(0.65 0.22 ${project.color} / 0.15)`
        el.style.boxShadow = 'none'
      }}
      onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
    >
      {/* Top glow bar */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, oklch(0.65 0.22 ${project.color} / 0.8), transparent)` }}
      />

      {/* Shimmer effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden"
      >
        <div
          style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(105deg, transparent 40%, oklch(0.65 0.22 ${project.color} / 0.04) 50%, transparent 60%)`,
          }}
        />
      </div>

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4 gap-2">
          <div className="flex items-center gap-2.5 flex-wrap">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
              style={{
                background: `oklch(0.65 0.22 ${project.color} / 0.1)`,
                border: `1px solid oklch(0.65 0.22 ${project.color} / 0.3)`,
              }}
            >
              {project.icon ?? (project.color === '255' ? '🤖' : project.color === '290' ? '🧠' : '⚡')}
            </div>
            {project.badge && (
              <span
                className="text-[11px] font-bold px-2.5 py-0.5 rounded-full"
                style={{
                  background: `oklch(0.65 0.22 ${project.color} / 0.12)`,
                  border: `1px solid oklch(0.65 0.22 ${project.color} / 0.35)`,
                  color: `oklch(0.85 0.15 ${project.color})`,
                }}
              >
                {project.badge}
              </span>
            )}
          </div>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200"
                style={{
                  background: `oklch(0.65 0.22 ${project.color} / 0.15)`,
                  border: `1px solid oklch(0.65 0.22 ${project.color} / 0.4)`,
                  color: `oklch(0.75 0.18 ${project.color})`,
                }}
                onMouseEnter={e => {
                  ;(e.currentTarget as HTMLElement).style.background = `oklch(0.65 0.22 ${project.color} / 0.25)`
                }}
                onMouseLeave={e => {
                  ;(e.currentTarget as HTMLElement).style.background = `oklch(0.65 0.22 ${project.color} / 0.15)`
                }}
              >
                Live ↗
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200"
              style={{
                background: `oklch(0.65 0.22 ${project.color} / 0.15)`,
                border: `1px solid oklch(0.65 0.22 ${project.color} / 0.4)`,
                color: `oklch(0.75 0.18 ${project.color})`,
              }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLElement).style.background = `oklch(0.65 0.22 ${project.color} / 0.25)`
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLElement).style.background = `oklch(0.65 0.22 ${project.color} / 0.15)`
              }}
            >
              GitHub ↗
            </a>
          </div>
        </div>

        {/* Title */}
        <h3
          className="text-lg font-bold mb-2 group-hover:text-current transition-colors duration-300"
          style={{ color: `oklch(0.88 0.08 ${project.color})` }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed mb-4" style={{ color: 'oklch(0.58 0.04 250)' }}>
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{
                background: `oklch(0.65 0.22 ${project.color} / 0.08)`,
                border: `1px solid oklch(0.65 0.22 ${project.color} / 0.2)`,
                color: `oklch(0.7 0.12 ${project.color})`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 px-6" style={{ zIndex: 3 }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 50%, oklch(0.65 0.22 255 / 0.03) 0%, transparent 70%)',
        }}
      />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div
            className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            style={{
              background: 'oklch(0.65 0.22 255 / 0.1)',
              border: '1px solid oklch(0.65 0.22 255 / 0.3)',
              color: 'oklch(0.65 0.22 255)',
            }}
          >
            Featured Work & Hackathon Winners
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
            Projects & Systems
          </h2>
          <div
            className="w-20 h-1 mx-auto mt-4 rounded-full"
            style={{ background: 'linear-gradient(90deg, oklch(0.65 0.22 255), oklch(0.55 0.25 295))' }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
