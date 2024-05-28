import React from 'react'
import Image from 'next/image'

import realTime3DLogosPng from '@/assets/img/png/main_skills/real_time_3D_logos.png'

export default function RealTime3DLogos() {
  return (
    <Image
      src={realTime3DLogosPng}
      alt='Real-time 3D logos'
      sizes='100vw'
      style={{
        width: '60%',
        height: 'auto',
      }}
    />
  )
}
