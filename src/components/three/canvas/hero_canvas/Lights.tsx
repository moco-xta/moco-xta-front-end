import React, { useRef } from 'react'
import * as THREE from 'three'
import { useHelper } from '@react-three/drei'

import { default as heroConstants } from '@/constants/canvas/heroConstants.json'

export default function Lights() {
  const ref = useRef<THREE.DirectionalLight>(null!)
  /* useHelper(ref, THREE.DirectionalLightHelper) */

  return (
    <>
      <ambientLight intensity={heroConstants.LIGHTS.AMBIENT_LIGHT.INTENSITY} />
      <directionalLight
        ref={ref}
        position={[
          heroConstants.LIGHTS.DIRECTIONAL_LIGHT.POSITION.X,
          heroConstants.LIGHTS.DIRECTIONAL_LIGHT.POSITION.Y,
          heroConstants.LIGHTS.DIRECTIONAL_LIGHT.POSITION.Z,
        ]}
        intensity={heroConstants.LIGHTS.DIRECTIONAL_LIGHT.INTENSITY}
        shadow-mapSize={heroConstants.LIGHTS.DIRECTIONAL_LIGHT.MAP_SIZE}
        shadow-camera-far={heroConstants.LIGHTS.DIRECTIONAL_LIGHT.SHADOW_CAMERA_FAR}
        shadow-camera-left={heroConstants.LIGHTS.DIRECTIONAL_LIGHT.SHADOW_CAMERA_LEFT}
        shadow-camera-right={heroConstants.LIGHTS.DIRECTIONAL_LIGHT.SHADOW_CAMERA_RIGHT}
        shadow-camera-top={heroConstants.LIGHTS.DIRECTIONAL_LIGHT.SHADOW_CAMERA_TOP}
        shadow-camera-bottom={heroConstants.LIGHTS.DIRECTIONAL_LIGHT.SHADOW_CAMERA_BOTTOM}
        shadow-radius={heroConstants.LIGHTS.DIRECTIONAL_LIGHT.SHADOW_RADIUS}
        shadow-bias={heroConstants.LIGHTS.DIRECTIONAL_LIGHT.SHADOW_BIAS}
        castShadow
      />
    </>
  )
}
