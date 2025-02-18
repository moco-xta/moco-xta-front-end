import React from 'react'
import { isMobile } from 'react-device-detect'

import './index.scss'
import { helveticaNeueBoldFont } from '@/app/fonts/otf'

export default function HeadText() {
  return (
    <div
      id='front_end_developer_container'
      className={`${helveticaNeueBoldFont.className} ${!isMobile ? 'slogan_container_large' : 'slogan_container_small'}`}
    >
      <p
        id='dream_in_3d'
        className={`slogan ${!isMobile ? 'slogan_large' : 'slogan_small'}`}
      >
        Dream
      </p>
      <p
        id='dream_in_3d'
        className={`slogan ${!isMobile ? 'slogan_large' : 'slogan_small'}`}
      >
        in 3D
      </p>
      <p
        id='build_in_reality'
        className={`slogan ${!isMobile ? 'slogan_large' : 'slogan_small'}`}
      >
        Build
      </p>
      <p
        id='build_in_reality'
        className={`slogan ${!isMobile ? 'slogan_large' : 'slogan_small'}`}
      >
        in Reality
      </p>
    </div>
  )
}
