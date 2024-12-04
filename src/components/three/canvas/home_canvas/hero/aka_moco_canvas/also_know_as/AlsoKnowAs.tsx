import React, { useRef } from 'react'
import * as THREE from 'three'

import AlsoText from '../texts/AlsoText'
import KnowText from '../texts/KnowText'
import AsText from '../texts/AsText'

export default function AlsoKnowAs() {
  const alsoKnowAsGroupRef = useRef<THREE.Group>(null!)

  return (
    <group
      ref={alsoKnowAsGroupRef}
      position={new THREE.Vector3(0, -5, 0)}
      rotation={new THREE.Euler(0, 0, THREE.MathUtils.degToRad(-180))}
    >
      <AlsoText />
      <KnowText />
      <AsText />
    </group>
  )
}
