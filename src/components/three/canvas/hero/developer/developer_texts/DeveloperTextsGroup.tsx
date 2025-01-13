import React, { useRef } from 'react'
import * as THREE from 'three'

import AText from './texts/AText'
import FrontText from './texts/FrontText'
import EndText from './texts/EndText'
import DeveloperText from './texts/DeveloperText'

export default function DeveloperTextsGroup() {
  const developerTextsGroupRef = useRef<THREE.Group>(null!)

  return (
    <group ref={developerTextsGroupRef}>
      <AText />
      <FrontText />
      <EndText />
      <DeveloperText />
    </group>
  )
}
