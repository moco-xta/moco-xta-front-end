import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import './index.scss'

const FirstSection = () => {
  useEffect(() => {
    gsap.registerPlugin(useGSAP)
  }, [])

  useGSAP(() => {
    gsap.from('#box_test_first_section', {
      x: 200,
      rotation: 360,
      duration: 2,
      delay: 5,
    })
  })

  return (
    <section id='first_section'>
      <div
        id='box_test_first_section'
        className='box_test'
      />
    </section>
  )
}

export default FirstSection
