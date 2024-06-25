import React from 'react'
import { useControls } from 'leva'

import { default as aboutConstants } from '@/constants/new/canvas/aboutConstants.json'

export default function AboutCanvasLights() {
  const ambientLigthsConfig = useControls('AMBIENT LIGHTS: Config', {
    color: '#fcf8ef',
    intensity: {
      value: aboutConstants.LIGHTS.AMBIENT_LIGHT.INTENSITY,
      min: 0,
      max: 10,
      step: 0.01,
    },
  })

  return <ambientLight {...ambientLigthsConfig} />
}
