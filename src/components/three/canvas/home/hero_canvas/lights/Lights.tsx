import React, { useRef } from 'react'
import * as THREE from 'three'

import { default as heroCanvasConstants } from '@/constants/canvas/home/heroCanvasConstants.json'

import DirectionalLights from './DirectionalLights'

import variables from '@/styles/variables.module.scss'

interface LightsInterface {
  timeline: GSAPTimeline
}

export default function Lights({ timeline }: LightsInterface) {
  const lightsGroupRef = useRef<THREE.Group>(null!)

  return (
    <group ref={lightsGroupRef}>
      <ambientLight
        color={variables.white}
        intensity={heroCanvasConstants.LIGHTS.AMBIENT_LIGHT.INTENSITY}
      />
      <DirectionalLights timeline={timeline} />
    </group>
  )
}
