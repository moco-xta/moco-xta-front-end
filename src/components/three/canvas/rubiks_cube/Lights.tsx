import React from 'react'

import { lightsData } from '@/data/skills/rubiks_cube/three/lightsData'

export default function Lights() {
  return (
    <>
      {lightsData.pointLights.positions.map((position, index) => (
        <pointLight
          key={`rubiks_cube_point_light_${index}`}
          position={[position.X, position.Y, position.Z]}
          intensity={lightsData.pointLights.intensity}
        />
      ))}
    </>
  )
}
