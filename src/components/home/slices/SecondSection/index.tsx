import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './index.scss'

const SecondSection = () => {
  useEffect(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger)
  }, [])

  useGSAP(() => {
    gsap.from('#box_test_second_section', {
      x: 200,
      rotation: 360,
      duration: 2,
      scrollTrigger: {
        trigger: '.trigger',
        start: 'top 25%',
      },
    })
  })

  return (
    <section
      id='second_section'
      className='trigger'
    >
      <div
        id='box_test_second_section'
        className='box_test'
      />
    </section>
  )
}

export default SecondSection
