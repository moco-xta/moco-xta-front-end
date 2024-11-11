import React from 'react'
import * as THREE from 'three'
import { editable as e } from '@theatre/r3f'

import { Building001Wall } from '@/components/three/models/home/buildings/Building001Wall'
import { ExoMarket } from '../../models/home/buildings/ExoMarket'
import { Box } from '@react-three/drei'

export default function HomeScene() {
  return (
    <>
      <Building001Wall />
      <ExoMarket />
      {/* <e.mesh
        theatreKey='Cube'
        receiveShadow
        castShadow
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color='orange' />
      </e.mesh> */}
      <Box
        args={[3, 20, 3]}
        position={[0, 10, -20]}
        rotation={[0, THREE.MathUtils.radToDeg(33), 0]}
        receiveShadow
        castShadow
      />
    </>
  )
}
