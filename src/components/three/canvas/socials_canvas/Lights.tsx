import React, { useRef } from 'react'
import * as THREE from 'three'
import { useHelper } from '@react-three/drei'

const INTENSITY = 1.25
const MAP_SIZE = [4096, 4096]
const SHADOW_CAMERA_FAR = 500
const SHADOW_CAMERA_LEFT = -10
const SHADOW_CAMERA_RIGHT = 10
const SHADOW_CAMERA_TOP = 10
const SHADOW_CAMERA_BOTTOM = -10
const SHADOW_RADIUS = 3
const SHADOW_BIAS = 0.0001

export default function Lights() {
  const directionalLightTLRef = useRef<THREE.DirectionalLight>(null!)
  const directionalLightTRRef = useRef<THREE.DirectionalLight>(null!)
  const directionalLightFRef = useRef<THREE.DirectionalLight>(null!)
  /* useHelper(directionalLightTLRef, THREE.DirectionalLightHelper, 1, 'red')
  useHelper(directionalLightTRRef, THREE.DirectionalLightHelper, 1, 'red')
  useHelper(directionalLightFRef, THREE.DirectionalLightHelper, 1, 'red') */

  const directionalLightTarget = new THREE.Vector3(0, 0, 0)

  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight
        ref={directionalLightTLRef}
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
        ref={directionalLightTRRef}
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
        ref={directionalLightFRef}
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
