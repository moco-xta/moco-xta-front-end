import React, { useRef } from 'react'
import * as THREE from 'three'
import { useHelper } from '@react-three/drei'

const INTENSITY = 0.3
const MAP_SIZE = [4096, 4096]
const SHADOW_CAMERA_FAR = 100
const SHADOW_CAMERA_LEFT = -100
const SHADOW_CAMERA_RIGHT = 100
const SHADOW_CAMERA_TOP = 100
const SHADOW_CAMERA_BOTTOM = -100
const SHADOW_RADIUS = 3
const SHADOW_BIAS = 0.0001

export default function LaboratoireFinalRenderLights() {
  const directionalLightCeilingNWRef = useRef<THREE.DirectionalLight>(null!)
  const directionalLightCeilingNEtRef = useRef<THREE.DirectionalLight>(null!)
  const directionalLightCeilingSWtRef = useRef<THREE.DirectionalLight>(null!)
  const directionalLightCeilingSEtRef = useRef<THREE.DirectionalLight>(null!)
  useHelper(
    directionalLightCeilingNWRef,
    THREE.DirectionalLightHelper,
    1,
    'blue',
  )
  useHelper(
    directionalLightCeilingNEtRef,
    THREE.DirectionalLightHelper,
    1,
    'red',
  )
  useHelper(
    directionalLightCeilingSWtRef,
    THREE.DirectionalLightHelper,
    1,
    'hotpink',
  )
  useHelper(
    directionalLightCeilingSEtRef,
    THREE.DirectionalLightHelper,
    1,
    'green',
  )

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight
        ref={directionalLightCeilingNWRef}
        position={[-5, 28, -3]}
        intensity={INTENSITY}
        target-position={new THREE.Vector3(-15, 0, -13)}
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
        ref={directionalLightCeilingNEtRef}
        position={[5, 28, -3]}
        intensity={INTENSITY}
        target-position={new THREE.Vector3(15, 0, -13)}
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
        ref={directionalLightCeilingSWtRef}
        position={[-5, 28, 3]}
        intensity={INTENSITY}
        target-position={new THREE.Vector3(-15, 0, 13)}
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
        ref={directionalLightCeilingSEtRef}
        position={[5, 28, 3]}
        intensity={INTENSITY}
        target-position={new THREE.Vector3(15, 0, 13)}
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
