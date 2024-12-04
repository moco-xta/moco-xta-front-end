import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useHelper } from '@react-three/drei'

import { default as greetingCanvasConstants } from '@/constants/canvas/home/greetingCanvasConstants.json'

import variables from '@/styles/variables.module.scss'

export default function Lights() {
  const ref = useRef<THREE.DirectionalLight>(null!)
  /* useHelper(ref, THREE.DirectionalLightHelper) */
  const spotLightRef = useRef<THREE.SpotLight>(null!)

  // useHelper(spotLightRef, THREE.SpotLightHelper, 'cyan')

  useEffect(() => {
    if (spotLightRef.current) {
      spotLightRef.current.target.position.set(6, 0, 0)
      spotLightRef.current.target.updateMatrixWorld()
    }
  }, [spotLightRef])

  return (
    <>
      <ambientLight
        color={variables.white}
        intensity={greetingCanvasConstants.LIGHTS.AMBIENT_LIGHT.INTENSITY}
      />
      <directionalLight
        ref={ref}
        position={[
          greetingCanvasConstants.LIGHTS.DIRECTIONAL_LIGHT.POSITION.X,
          greetingCanvasConstants.LIGHTS.DIRECTIONAL_LIGHT.POSITION.Y,
          greetingCanvasConstants.LIGHTS.DIRECTIONAL_LIGHT.POSITION.Z,
        ]}
        target={new THREE.Object3D()}
        intensity={greetingCanvasConstants.LIGHTS.DIRECTIONAL_LIGHT.INTENSITY}
        shadow-mapSize={greetingCanvasConstants.LIGHTS.DIRECTIONAL_LIGHT.MAP_SIZE}
        shadow-camera-far={greetingCanvasConstants.LIGHTS.DIRECTIONAL_LIGHT.SHADOW_CAMERA_FAR}
        shadow-camera-left={greetingCanvasConstants.LIGHTS.DIRECTIONAL_LIGHT.SHADOW_CAMERA_LEFT}
        shadow-camera-right={greetingCanvasConstants.LIGHTS.DIRECTIONAL_LIGHT.SHADOW_CAMERA_RIGHT}
        shadow-camera-top={greetingCanvasConstants.LIGHTS.DIRECTIONAL_LIGHT.SHADOW_CAMERA_TOP}
        shadow-camera-bottom={greetingCanvasConstants.LIGHTS.DIRECTIONAL_LIGHT.SHADOW_CAMERA_BOTTOM}
        shadow-radius={greetingCanvasConstants.LIGHTS.DIRECTIONAL_LIGHT.SHADOW_RADIUS}
        shadow-bias={greetingCanvasConstants.LIGHTS.DIRECTIONAL_LIGHT.SHADOW_BIAS}
        castShadow
      />
      <directionalLight
        ref={ref}
        position={[
          -greetingCanvasConstants.LIGHTS.DIRECTIONAL_LIGHT.POSITION.X,
          greetingCanvasConstants.LIGHTS.DIRECTIONAL_LIGHT.POSITION.Y,
          greetingCanvasConstants.LIGHTS.DIRECTIONAL_LIGHT.POSITION.Z,
        ]}
        target={new THREE.Object3D()}
        intensity={greetingCanvasConstants.LIGHTS.DIRECTIONAL_LIGHT.INTENSITY}
        shadow-mapSize={greetingCanvasConstants.LIGHTS.DIRECTIONAL_LIGHT.MAP_SIZE}
        shadow-camera-far={greetingCanvasConstants.LIGHTS.DIRECTIONAL_LIGHT.SHADOW_CAMERA_FAR}
        shadow-camera-left={greetingCanvasConstants.LIGHTS.DIRECTIONAL_LIGHT.SHADOW_CAMERA_LEFT}
        shadow-camera-right={greetingCanvasConstants.LIGHTS.DIRECTIONAL_LIGHT.SHADOW_CAMERA_RIGHT}
        shadow-camera-top={greetingCanvasConstants.LIGHTS.DIRECTIONAL_LIGHT.SHADOW_CAMERA_TOP}
        shadow-camera-bottom={greetingCanvasConstants.LIGHTS.DIRECTIONAL_LIGHT.SHADOW_CAMERA_BOTTOM}
        shadow-radius={greetingCanvasConstants.LIGHTS.DIRECTIONAL_LIGHT.SHADOW_RADIUS}
        shadow-bias={greetingCanvasConstants.LIGHTS.DIRECTIONAL_LIGHT.SHADOW_BIAS}
        castShadow
      />
      <directionalLight
        ref={ref}
        position={[0, 0, 5]}
        target={new THREE.Object3D()}
        intensity={greetingCanvasConstants.LIGHTS.DIRECTIONAL_LIGHT.INTENSITY}
        shadow-mapSize={greetingCanvasConstants.LIGHTS.DIRECTIONAL_LIGHT.MAP_SIZE}
        shadow-camera-far={greetingCanvasConstants.LIGHTS.DIRECTIONAL_LIGHT.SHADOW_CAMERA_FAR}
        shadow-camera-left={greetingCanvasConstants.LIGHTS.DIRECTIONAL_LIGHT.SHADOW_CAMERA_LEFT}
        shadow-camera-right={greetingCanvasConstants.LIGHTS.DIRECTIONAL_LIGHT.SHADOW_CAMERA_RIGHT}
        shadow-camera-top={greetingCanvasConstants.LIGHTS.DIRECTIONAL_LIGHT.SHADOW_CAMERA_TOP}
        shadow-camera-bottom={greetingCanvasConstants.LIGHTS.DIRECTIONAL_LIGHT.SHADOW_CAMERA_BOTTOM}
        shadow-radius={greetingCanvasConstants.LIGHTS.DIRECTIONAL_LIGHT.SHADOW_RADIUS}
        shadow-bias={greetingCanvasConstants.LIGHTS.DIRECTIONAL_LIGHT.SHADOW_BIAS}
        castShadow
      />
      {/* <spotLight
        ref={spotLightRef}
        position={[6.25, 9, 1]}
        intensity={30}
        distance={9}
        angle={THREE.MathUtils.degToRad(30)}
        penumbra={0.1}
        decay={0.5}
        castShadow
      /> */}
    </>
  )
}
