import React from 'react'

import IntroductionContent from './introduction_content'
import ParisMetroMap from './paris_metro_map'
import MorphingDemo from './morphing_demo'

import './index.scss'
import VideoSVG from './video_svg'
import MorphVideo from './morph_video'

export default function Introduction() {
  return (
    <section id='introduction_section'>
      <IntroductionContent />
      <ParisMetroMap />
      <MorphingDemo />
      <VideoSVG />
      <MorphVideo />
    </section>
  )
}
