import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import IntroductionContent from './introduction_content'
import ParisMetroMap from './paris_metro_map'

import './index.scss'
import styles from '@/styles/variables.module.scss'

export default function Introduction() {
  return (
    <section id='introduction_section'>
      <IntroductionContent />
      <ParisMetroMap />
    </section>
  )
}
