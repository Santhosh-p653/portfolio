export default function Footer() {
  return (
    <footer
      className="relative py-10 px-6 text-center"
      style={{
        zIndex: 3,
        borderTop: '1px solid oklch(0.65 0.22 255 / 0.08)',
        background: 'oklch(0.08 0.02 265 / 0.8)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="text-2xl font-black mb-2"
          style={{
            background: 'linear-gradient(135deg, oklch(0.65 0.22 255), oklch(0.55 0.25 295))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Santhosh Paramasivan
        </div>
        <p className="text-xs mb-4" style={{ color: 'oklch(0.45 0.04 250)' }}>
          AI Engineer · Machine Learning · Agentic AI · LLMs · Intelligent Systems
        </p>
        <p className="text-xs" style={{ color: 'oklch(0.35 0.03 250)' }}>
          © 2024 Santhosh Paramasivan. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
