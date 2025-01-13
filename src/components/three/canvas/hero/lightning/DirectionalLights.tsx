import React, { useRef } from 'react'
import * as THREE from 'three'

import { directionalLightsDefaultValues } from '@/data/hero/three/lightning/directionalLightsData'

export default function DirectionalLights() {
  const directionalLightsGroupRef = useRef<THREE.Group>(null!)

  return (
    <group ref={directionalLightsGroupRef}>
      {directionalLightsDefaultValues().map((directionalLightData, index) => (
        <directionalLight
          key={`hero_canvas_directional_light_${index}`}
          {...directionalLightData}
        />
      ))}
    </group>
  )
}
