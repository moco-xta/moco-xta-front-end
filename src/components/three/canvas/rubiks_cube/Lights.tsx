import React from 'react'
import { Environment } from '@react-three/drei'

// import { lightsData } from '@/data/skills/rubiks_cube/three/lightsData'

import { default as imgConstants } from '@/constants/assets/imgConstants.json'

export default function Lights() {
  return (
    <>
      <ambientLight intensity={2} />
      <Environment
        files={imgConstants.EXR.STUDIO_001}
        // environmentIntensity={0.75}
      />
      {/* {lightsData.pointLights.positions.map((position, index) => (
        <pointLight
          key={`rubiks_cube_point_light_${index}`}
          position={[position.X, position.Y, position.Z]}
          intensity={lightsData.pointLights.intensity}
          castShadow
        />
      ))} */}
    </>
  )
}
