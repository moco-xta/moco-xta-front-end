import React from 'react'

import { default as rubiksCubeConstants } from '@/constants/canvas/rubiksCubeConstants.json'

export default function Lights() {
  return (
    <>
      {rubiksCubeConstants.LIGHTS.POINT_LIGHTS.POSITIONS.map((position, index) => (
        <pointLight
          key={`rubiks_cube_point_light_${index}`}
          position={[position.X, position.Y, position.Z]}
          intensity={rubiksCubeConstants.LIGHTS.POINT_LIGHTS.INTENSITY}
        />
      ))}
    </>
  )
}
