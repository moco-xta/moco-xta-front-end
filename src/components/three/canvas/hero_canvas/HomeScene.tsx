import React from 'react'
import { editable as e } from '@theatre/r3f'

import { Building001Wall } from '@/components/three/models/home/buildings/Building001Wall'

export default function HomeScene() {
  return (
    <>
      <Building001Wall />
      <e.mesh
        theatreKey='Cube'
        receiveShadow
        castShadow
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color='orange' />
      </e.mesh>
    </>
  )
}
