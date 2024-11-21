import React, { useRef } from 'react'

import './index.scss'

export default function HeroSlice() {
  const creativeTextRef = useRef<HTMLHeadingElement>(null!)

  return (
    <section
      id='hero_slice'
      className='fullscreen'
    >
      <h2 ref={creativeTextRef}>CREATIVE</h2>
    </section>
  )
}
