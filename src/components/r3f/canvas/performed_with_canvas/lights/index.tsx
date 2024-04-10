import React from 'react'
import * as THREE from 'three'

import { default as rubiksCubeConstants } from '@/constants/rubiksCubeConstants.json'

export default function Lights() {
  return (
    <>
      {rubiksCubeConstants.LIGHTS.POSITIONS.map((position, index) => {
        const vector3Position = new THREE.Vector3(
          position[0],
          position[1],
          position[2],
        )
        return (
          <pointLight
            key={`performed_with_light_${index}`}
            position={vector3Position}
            intensity={rubiksCubeConstants.LIGHTS.INTENSITY}
            castShadow
          />
        )
      })}
    </>
  )
}
