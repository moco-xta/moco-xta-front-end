import React, { useRef } from 'react'
import * as THREE from 'three'
import { useHelper } from '@react-three/drei'

const INTENSITY = 1
const MAP_SIZE = [4096, 4096]
const SHADOW_CAMERA_FAR = 500
const SHADOW_CAMERA_LEFT = -500
const SHADOW_CAMERA_RIGHT = 500
const SHADOW_CAMERA_TOP = 500
const SHADOW_CAMERA_BOTTOM = -500
const SHADOW_RADIUS = 3
const SHADOW_BIAS = 0.0001

export default function LaboratoireFinalRenderLights() {
  const directionalLightCeilingLeftRef = useRef<THREE.DirectionalLight>(null!)
  const directionalLightCeilingRightRef = useRef<THREE.DirectionalLight>(null!)
  useHelper(directionalLightCeilingLeftRef, THREE.DirectionalLightHelper, 1, 'blue')
  useHelper(directionalLightCeilingRightRef, THREE.DirectionalLightHelper, 1, 'red')

  return (
    <>
      <directionalLight
        ref={directionalLightCeilingLeftRef}
        position={[-5, 28.6, 0]}
        intensity={INTENSITY}
        target-position={new THREE.Vector3(-5, 0, 0)}
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
        ref={directionalLightCeilingRightRef}
        position={[5, 28.6, 0]}
        intensity={INTENSITY}
        target-position={new THREE.Vector3(5, 0, 0)}
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
