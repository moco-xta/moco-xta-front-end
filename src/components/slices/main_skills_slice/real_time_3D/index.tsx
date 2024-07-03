import React from 'react'

import RealTime3DLogos from './real_time_3D_logos'
import RealTime3DTextBlock from './real_time_3D_text_block'

import './index.scss'

export default function RealTime3D() {
  return (
    <div id='real_time_3D'>
      <RealTime3DLogos />
      <RealTime3DTextBlock />
    </div>
  )
}
