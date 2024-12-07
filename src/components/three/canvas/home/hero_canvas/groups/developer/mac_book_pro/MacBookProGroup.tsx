import React, { useRef } from 'react'

import MacBookProComponent from './MacBookProComponent'
import LogosForegroundGroup from './LogosForegroundGroup'
import LogosBackgroundGroup from './LogosBackgroundGroup'

interface MacBookProGroupInterface {
  timeline: GSAPTimeline
}

export default function MacBookProGroup({ timeline }: MacBookProGroupInterface) {
  const macBookProComponentAndLogosForegroundGroupRef = useRef<THREE.Group>(null!)

  return (
    <group>
      <group ref={macBookProComponentAndLogosForegroundGroupRef}>
        <MacBookProComponent />
        <LogosForegroundGroup />
      </group>
      <LogosBackgroundGroup />
    </group>
  )
}
