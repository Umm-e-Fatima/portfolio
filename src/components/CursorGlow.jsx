import { useEffect, useRef } from 'react'

function CursorGlow() {
  const dotRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const glow = glowRef.current

    const moveCursor = (e) => {
      const x = e.clientX
      const y = e.clientY

      dot.style.left = x + 'px'
      dot.style.top = y + 'px'

      glow.style.left = x + 'px'
      glow.style.top = y + 'px'
    }

    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={glowRef} className="cursor-glow" />
    </>
  )
}

export default CursorGlow