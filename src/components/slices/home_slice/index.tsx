import React from 'react'

import Overlay from './Overlay'

import FirstLayer from '@/components/home/layers/FirstLayer'
import SecondLayer from '@/components/home/layers/SecondLayer'

import './index.scss'

export default function HomeSlice() {
  return (
    <section id='home_slice'>
      {/* <Overlay /> */}
      <FirstLayer />
      <SecondLayer />
    </section>
  )
}
