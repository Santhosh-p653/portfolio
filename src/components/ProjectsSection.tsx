import { useEffect, useRef } from 'react'

const projects = [
  {
    title: 'Deepfake Agentic AI',
    description: 'AI-powered multi-agent deepfake detection system leveraging advanced computer vision and ensemble models for real-time media authenticity verification.',
    tags: ['Agentic AI', 'Computer Vision', 'Deep Learning', 'Python'],
    github: 'https://github.com/Santhosh-p653/deepfake-agentic-ai',
    live: null,
    color: '255',
    featured: true,
  },
  {
    title: 'Multimodal RAG Assistant',
    description: 'Retrieval-Augmented multimodal assistant using modern LLM pipelines. Processes text, images and documents for intelligent Q&A.',
    tags: ['RAG', 'LLM', 'Multimodal', 'LangChain'],
    github: 'https://github.com/Santhosh-p653/rag-multimodal-assistant',
    live: null,
    color: '290',
    featured: true,
  },
  {
    title: 'ShoppyAI',
    description: 'AI-powered shopping assistant with intelligent recommendations, natural language product search, and personalized user experience.',
    tags: ['AI', 'NLP', 'Recommendations', 'FastAPI'],
    github: 'https://github.com/Santhosh-p653/shoppyai',
    live: 'https://santhosh11042007-shoppyai.hf.space/',
    color: '210',
    featured: false,
  },
  {
    title: 'Attendance Management',
    description: 'Intelligent attendance management platform with modern backend architecture, automated tracking, and analytics dashboard.',
    tags: ['Backend', 'Python', 'Database', 'API'],
    github: 'https://github.com/Santhosh-p653/Attendance',
    live: null,
    color: '255',
    featured: false,
  },
  {
    title: 'Doc2Site',
    description: 'Transform documents into beautiful websites automatically using AI — converts PDFs, Markdown, and documents into full static sites.',
    tags: ['AI', 'Document Processing', 'Web Generation', 'LLM'],
    github: 'https://github.com/Santhosh-p653/doc2site',
    live: null,
    color: '290',
    featured: false,
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
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
          }, index * 100)
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
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
            style={{
              background: `oklch(0.65 0.22 ${project.color} / 0.1)`,
              border: `1px solid oklch(0.65 0.22 ${project.color} / 0.3)`,
            }}
          >
            {project.color === '255' ? '🤖' : project.color === '290' ? '🧠' : '⚡'}
          </div>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                Live Demo ↗
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
            Featured Work
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
            Projects
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
