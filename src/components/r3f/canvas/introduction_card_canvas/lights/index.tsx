import React from 'react'

import { default as introductionConstants } from '@/constants/introductionConstants.json'

export default function Lights() {
  return (
    <>
      <ambientLight
        position={[0, 5, 0]}
        intensity={2}
      />
      {introductionConstants.SCENE.POINT_LIGHTS.POSITIONS.map(
        (point_light, index) => (
          <pointLight
            key={`ìntroduction_scene_point_light_${index}`}
            position={[point_light.X, point_light.Z, point_light.Y]}
            intensity={introductionConstants.SCENE.POINT_LIGHTS.INTENSITY}
            castShadow
          />
        ),
      )}
    </>
  )
}
