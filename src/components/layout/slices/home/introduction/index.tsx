import React, { useRef } from 'react'

import IntroductionContent from './introduction_content'
import ParisMetroMap from './paris_metro_map'
import Parallax from '@/components/lib/parallax'
import ReelCanvas from '@/components/three/canvas/reel/ReelCanvas'

import './index.scss'

export default function Introduction() {
  const containerRef = useRef<HTMLElement>(null!)

  return (
    <section
      ref={containerRef}
      id='introduction_section'
    >
      <IntroductionContent containerRef={containerRef} />
      <ParisMetroMap />
      <Parallax id='reel_canvas_parallax' speed={5} style={{ width: '100vw', paddingTop: '-10vw' }}>
        <ReelCanvas />
      </Parallax>
    </section>
  )
}
