import React, { useRef } from 'react'
import * as THREE from 'three'
import { useHelper } from '@react-three/drei'

const INTENSITY = 1
const MAP_SIZE = [2048, 2048]
const SHADOW_CAMERA_FAR = 500
const SHADOW_CAMERA_LEFT = -10
const SHADOW_CAMERA_RIGHT = 10
const SHADOW_CAMERA_TOP = 10
const SHADOW_CAMERA_BOTTOM = -10
const SHADOW_RADIUS = 3
const SHADOW_BIAS = 0.0001

export default function Lights() {
  const directionalLightSWRef = useRef<THREE.DirectionalLight>(null!)
  useHelper(directionalLightSWRef, THREE.DirectionalLightHelper, 1, 'red')

  const directionalLightTarget = new THREE.Vector3(
    0,
    0,
    0,
  )

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight
        ref={directionalLightSWRef}
        position={[5, 5, 5]}
        intensity={INTENSITY}
        target-position={directionalLightTarget}
        castShadow
        shadow-mapSize={MAP_SIZE}
        shadow-camera-far={SHADOW_CAMERA_FAR}
        shadow-camera-left={SHADOW_CAMERA_LEFT}
        shadow-camera-right={SHADOW_CAMERA_RIGHT}
        shadow-camera-top={SHADOW_CAMERA_TOP}
        shadow-camera-bottom={SHADOW_CAMERA_BOTTOM}
        shadow-radius={SHADOW_RADIUS}
        shadow-bias={SHADOW_BIAS}
      />
      <directionalLight
        ref={directionalLightSWRef}
        position={[-5, 5, 5]}
        intensity={INTENSITY}
        target-position={directionalLightTarget}
        castShadow
        shadow-mapSize={MAP_SIZE}
        shadow-camera-far={SHADOW_CAMERA_FAR}
        shadow-camera-left={SHADOW_CAMERA_LEFT}
        shadow-camera-right={SHADOW_CAMERA_RIGHT}
        shadow-camera-top={SHADOW_CAMERA_TOP}
        shadow-camera-bottom={SHADOW_CAMERA_BOTTOM}
        shadow-radius={SHADOW_RADIUS}
        shadow-bias={SHADOW_BIAS}
      />
      <directionalLight
        ref={directionalLightSWRef}
        position={[0, 0, 5]}
        intensity={INTENSITY}
        target-position={directionalLightTarget}
        castShadow
        shadow-mapSize={MAP_SIZE}
        shadow-camera-far={SHADOW_CAMERA_FAR}
        shadow-camera-left={SHADOW_CAMERA_LEFT}
        shadow-camera-right={SHADOW_CAMERA_RIGHT}
        shadow-camera-top={SHADOW_CAMERA_TOP}
        shadow-camera-bottom={SHADOW_CAMERA_BOTTOM}
        shadow-radius={SHADOW_RADIUS}
        shadow-bias={SHADOW_BIAS}
      />
    </>
  )
}
