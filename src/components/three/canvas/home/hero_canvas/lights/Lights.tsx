import React, { useRef } from 'react'
import * as THREE from 'three'

import { default as heroCanvasConstants } from '@/constants/three/home/hero/heroCanvasConstants.json'

import DirectionalLights from './DirectionalLights'

import variables from '@/styles/variables.module.scss'

export default function Lights() {
  const lightsGroupRef = useRef<THREE.Group>(null!)

  return (
    <group ref={lightsGroupRef}>
      <ambientLight
        color={variables.white}
        intensity={heroCanvasConstants.LIGHTS.AMBIENT_LIGHT.INTENSITY}
      />
      <DirectionalLights />
    </group>
  )
}
