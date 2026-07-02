import { useEffect, useRef } from 'react'

export default function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = glowRef.current
    if (!el) return
    let x = 0, y = 0, targetX = 0, targetY = 0
    let rafId: number

    const handleMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
    }

    function animate() {
      x += (targetX - x) * 0.08
      y += (targetY - y) * 0.08
      if (el) {
        el.style.left = `${x}px`
        el.style.top = `${y}px`
      }
      rafId = requestAnimationFrame(animate)
    }
    animate()
    window.addEventListener('mousemove', handleMove)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      style={{
        position: 'fixed',
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, oklch(0.65 0.22 255 / 0.04) 0%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 2,
        transition: 'opacity 0.3s',
      }}
    />
  )
}
