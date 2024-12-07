import React, { useRef } from 'react'

import MacBookProComponent from './MacBookProComponent'
import LogosForegroundGroup from './LogosForegroundGroup'
import LogosBackgroundGroup from './LogosBackgroundGroup'

interface MacBookProInterface {
  timeline: GSAPTimeline
}

export default function MacBookPro({ timeline }: MacBookProInterface) {
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
