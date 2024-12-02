import React from 'react'
import { Environment } from '@react-three/drei'

import { default as mocoCanvasConstants } from '@/constants/canvas/home/mocoCanvasConstants.json'
import { default as imgConstants } from '@/constants/assets/imgConstants.json'

export default function Lights() {
  return (
    <>
      <ambientLight intensity={mocoCanvasConstants.LIGHTS.AMBIENT_LIGHT.INTENSITY} />
      <Environment files={imgConstants.HDRS.HERO_ENVIRONMENT} />
    </>
  )
}
