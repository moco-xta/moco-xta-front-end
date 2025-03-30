import React, { useRef } from 'react'

import IntroductionContent from './introduction_content'
import ParisMetroMap from './paris_metro_map'
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
      {/* <ReelCanvas /> */}
    </section>
  )
}
