import React, { useEffect, useRef } from 'react'

import './index.scss'

export default function GradientBackground() {
  const backgroundInteractiveBubbleRef = useRef()

  let curX = 0
  let curY = 0
  let tgX = 0
  let tgY = 0

  function moveBubble(event: any) {
    tgX = event.clientX
    tgY = event.clientY
    curX += (tgX - curX) / 20
    curY += (tgY - curY) / 20
    if (backgroundInteractiveBubbleRef.current)
      // @ts-ignore
      backgroundInteractiveBubbleRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`
  }

  useEffect(() => {
    window.addEventListener('mousemove', moveBubble)
    return () => {
      window.removeEventListener('mousemove', moveBubble)
    }
  }, [])

  return (
    <div className='gradient_background'>
      <img
        className='svg_background_bubble'
        src={'/img/svg/background_buble.svg'}
        alt="background_bubble"
      />
      {[...Array(5)].map((_, index) => (
        <div key={`background_bubble_${index + 1}`} className={`background_bubble_${index + 1}`}></div>
      ))}
      <div
        ref={backgroundInteractiveBubbleRef as any}
        className='background_interactive_bubble'
      />
    </div>
  )
}
