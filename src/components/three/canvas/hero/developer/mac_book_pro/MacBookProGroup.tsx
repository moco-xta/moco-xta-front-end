import React, { useRef } from 'react'
import * as THREE from 'three'

import MacBookProComponent from './MacBookProComponent'
import LogosForegroundGroup from './LogosForegroundGroup'
import LogosBackgroundGroup from './LogosBackgroundGroup'

export default function MacBookProGroup() {
  const macBookProComponentAndLogosForegroundGroupRef = useRef<THREE.Group>(null!)

  const macBookProGroupRef = useRef<THREE.Group>(null!)

  return (
    <group ref={macBookProGroupRef}>
      <group ref={macBookProComponentAndLogosForegroundGroupRef}>
        <MacBookProComponent />
        <LogosForegroundGroup />
      </group>
      <LogosBackgroundGroup />
    </group>
  )
}
