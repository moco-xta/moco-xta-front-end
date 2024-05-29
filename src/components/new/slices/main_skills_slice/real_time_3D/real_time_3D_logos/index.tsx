import React from 'react'
import Image from 'next/image'

import realTime3DLogosPng from '@/assets/img/png/main_skills/real_time_3D_logos.png'

import './index.scss'

export default function RealTime3DLogos() {
  return (
    <Image
      id='real_time_3D_logos'
      src={realTime3DLogosPng}
      alt='Real-time 3D logos'
      sizes='100vw'
    />
  )
}
