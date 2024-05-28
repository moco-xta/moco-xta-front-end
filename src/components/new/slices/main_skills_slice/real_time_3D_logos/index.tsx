import React from 'react'
import Image from 'next/image'

import { default as imgConstants } from '@/constants/new/assets/imgConstants.json'

export default function RealTime3DLogos() {
  return (
    <Image
      src={imgConstants.HERO.MAIN_SKILLS.REAL_TIME_3D_LOGOS}
      width={950}
      height={115}
      alt=''
    />
  )
}
