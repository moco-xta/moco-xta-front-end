import React, { useRef } from 'react'

import IntroductionContent from './introduction_content'
import ParisMetroMap from './paris_metro_map'
// import MorphingDemo from './morphing_demo'
// import VideoSVG from './video_svg'
// import MorphVideo from './morph_video'

import './index.scss'

export default function Introduction() {
  const introductionSectionRef = useRef<HTMLElement>(null!)

  return (
    <section
      ref={introductionSectionRef}
      id='introduction_section'
    >
      <IntroductionContent introductionSectionRef={introductionSectionRef} />
      <ParisMetroMap />
      {/* <MorphingDemo /> */}
      {/* <VideoSVG /> */}
      {/* <MorphVideo introductionSectionRef={introductionSectionRef} /> */}
    </section>
  )
}
