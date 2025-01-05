import React from 'react'

import { default as laboratoireClayRenderConstants } from '@/constants/three/about/laboratoire/laboratoireClayRenderConstants.json'

export default function Lights() {
  return (
    <>
      <ambientLight intensity={laboratoireClayRenderConstants.LIGHTS.AMBIENT_LIGHT.INTENSITY} />
    </>
  )
}
