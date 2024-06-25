import React from 'react'

import { default as aboutConstants } from '@/constants/new/canvas/aboutConstants.json'

export default function AboutCanvasLights() {
  return (
    <ambientLight intensity={aboutConstants.LIGHTS.AMBIENT_LIGHT.INTENSITY} />
  )
}
