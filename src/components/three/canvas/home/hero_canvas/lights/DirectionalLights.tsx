import React, { useRef } from 'react'
import * as THREE from 'three'

import { default as heroCanvasConstants } from '@/constants/canvas/home/heroCanvasConstants.json'

interface DirectionalLightsInterface {
  timeline: GSAPTimeline
}

export default function DirectionalLights({ timeline }: DirectionalLightsInterface) {
  const directionalLightsGroupRef = useRef<THREE.Group>(null!)

  return (
    <group ref={directionalLightsGroupRef}>
      {heroCanvasConstants.LIGHTS.DIRECTIONAL_LIGHTS.POSITIONS.map((position, index) => {
        return (
          <directionalLight
            key={`greeting_canvas_directional_light_${index}`}
            position={[position.X, position.Y, position.Z]}
            target={new THREE.Object3D()}
            intensity={heroCanvasConstants.LIGHTS.DIRECTIONAL_LIGHTS.INTENSITY}
            shadow-mapSize={heroCanvasConstants.LIGHTS.DIRECTIONAL_LIGHTS.MAP_SIZE}
            shadow-camera-far={heroCanvasConstants.LIGHTS.DIRECTIONAL_LIGHTS.SHADOW_CAMERA_FAR}
            shadow-camera-left={heroCanvasConstants.LIGHTS.DIRECTIONAL_LIGHTS.SHADOW_CAMERA_LEFT}
            shadow-camera-right={heroCanvasConstants.LIGHTS.DIRECTIONAL_LIGHTS.SHADOW_CAMERA_RIGHT}
            shadow-camera-top={heroCanvasConstants.LIGHTS.DIRECTIONAL_LIGHTS.SHADOW_CAMERA_TOP}
            shadow-camera-bottom={
              heroCanvasConstants.LIGHTS.DIRECTIONAL_LIGHTS.SHADOW_CAMERA_BOTTOM
            }
            shadow-radius={heroCanvasConstants.LIGHTS.DIRECTIONAL_LIGHTS.SHADOW_RADIUS}
            shadow-bias={heroCanvasConstants.LIGHTS.DIRECTIONAL_LIGHTS.SHADOW_BIAS}
            castShadow
          />
        )
      })}
    </group>
  )
}
