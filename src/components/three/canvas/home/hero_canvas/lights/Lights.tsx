import React, { useRef } from 'react'

import DirectionalLights from './DirectionalLights'
import AmbientLight from './AmbientLight'

export default function Lights() {
  const lightsGroupRef = useRef<THREE.Group>(null!)

  return (
    <group ref={lightsGroupRef}>
      <AmbientLight />
      <DirectionalLights />
    </group>
  )
}
