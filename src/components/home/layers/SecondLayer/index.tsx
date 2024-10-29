import React from 'react'

import FirstSection from '@/components/home/slices/FirstSection'
import SecondSection from '@/components/home/slices/SecondSection'
import Parallax from '../../slices/Parallax'

import './index.scss'

export default function SecondLayer() {
  return (
    <div id='home_second_layer'>
      {/* <FirstSection />
      <SecondSection /> */}
      <Parallax
        speed={1}
        className='self-start'
      >
        <FirstSection />
      </Parallax>
      <Parallax
        speed={-2}
        className='self-end overflow-hidden'
      >
        <SecondSection />
      </Parallax>
    </div>
  )
}
