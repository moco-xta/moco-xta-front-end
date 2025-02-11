import React from 'react'
import { useTranslations } from 'next-intl'

import './index.scss'
import { helveticaNeueBoldFont } from '@/app/fonts/otf'

export default function HeadText() {
  const t = useTranslations('HOME')

  return (
    <div
      id='front_end_developer_container'
      className={`${helveticaNeueBoldFont.className}`}
    >
      <p className='dream_in_3d'>Dream</p>
      <p className='dream_in_3d'>in 3D</p>
      <p className='build_in_reality'>Build</p>
      <p className='build_in_reality'>in Reality</p>
    </div>
  )
}
