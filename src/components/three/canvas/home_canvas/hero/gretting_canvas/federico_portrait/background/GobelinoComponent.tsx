import React, { useRef } from 'react'
import * as THREE from 'three'

import SkyComponent from './SkyComponent'

interface GobelinoConponentInterface {
  timeline: GSAPTimeline
}

export default function GobelinoComponent({ timeline }: GobelinoConponentInterface) {
  const gobelinoGroupRef = useRef<THREE.Group>(null!)

  return (
    <group
      ref={gobelinoGroupRef}
      position={new THREE.Vector3(0, 0, 0)}
    >
      <SkyComponent timeline={timeline} />
    </group>
  )
}
