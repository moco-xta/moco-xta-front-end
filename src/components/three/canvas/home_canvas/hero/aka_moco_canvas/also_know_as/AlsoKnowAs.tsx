import React, { useRef } from 'react'
import AlsoText from '../texts/AlsoText'
import KnowText from '../texts/KnowText'
import AsText from '../texts/AsText'

export default function AlsoKnowAs() {
  const alsoKnowAsGroupRef = useRef<THREE.Group>(null!)

  return (
    <group ref={alsoKnowAsGroupRef}>
      <AlsoText />
      <KnowText />
      <AsText />
    </group>
  )
}
