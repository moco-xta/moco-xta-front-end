import React, { useRef } from 'react'

import IntroductionContent from './introduction_content'
import ParisMetroMap from './paris_metro_map'
// import MorphingDemo from './morphing_demo'
// import VideoSVG from './video_svg'
// import MorphVideo from './morph_video'
// import DeformedVideo from './introduction_content/deformed_video'
// import NewVideoDeform from './introduction_content/new_test_video_deform'

import './index.scss'

export default function Introduction() {
  const introductionSectionRef = useRef<HTMLElement>(null!)

  return (
    <section
      ref={introductionSectionRef}
      id='introduction_section'
    >
      {/* <DeformedVideo /> */}
      {/* <NewVideoDeform /> */}
      <IntroductionContent introductionSectionRef={introductionSectionRef} />
      <ParisMetroMap />
      {/* <MorphVideo introductionSectionRef={introductionSectionRef} /> */}
      {/* <MorphingDemo /> */}
      {/* <VideoSVG /> */}
    </section>
  )
}
