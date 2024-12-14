import React, { useRef } from 'react'
import * as THREE from 'three'

import { default as directionalLightsConstants } from '@/constants/animations/home/hero/canvas/lights/directionalLightsConstants.json'

export default function DirectionalLights() {
  const directionalLightsGroupRef = useRef<THREE.Group>(null!)

  return (
    <group ref={directionalLightsGroupRef}>
      {directionalLightsConstants.ANIMATION['0_PERCENT'].POSITIONS.map((position, index) => {
        return (
          <directionalLight
            key={`greeting_canvas_directional_light_${index}`}
            position={[position.X, position.Y, position.Z]}
            target={new THREE.Object3D()}
            intensity={directionalLightsConstants.ANIMATION['0_PERCENT'].INTENSITY}
            shadow-mapSize={directionalLightsConstants.ANIMATION['0_PERCENT'].MAP_SIZE}
            shadow-camera-far={directionalLightsConstants.ANIMATION['0_PERCENT'].SHADOW_CAMERA_FAR}
            shadow-camera-left={
              directionalLightsConstants.ANIMATION['0_PERCENT'].SHADOW_CAMERA_LEFT
            }
            shadow-camera-right={
              directionalLightsConstants.ANIMATION['0_PERCENT'].SHADOW_CAMERA_RIGHT
            }
            shadow-camera-top={directionalLightsConstants.ANIMATION['0_PERCENT'].SHADOW_CAMERA_TOP}
            shadow-camera-bottom={
              directionalLightsConstants.ANIMATION['0_PERCENT'].SHADOW_CAMERA_BOTTOM
            }
            shadow-radius={directionalLightsConstants.ANIMATION['0_PERCENT'].SHADOW_RADIUS}
            shadow-bias={directionalLightsConstants.ANIMATION['0_PERCENT'].SHADOW_BIAS}
            castShadow
          />
        )
      })}
    </group>
  )
}
