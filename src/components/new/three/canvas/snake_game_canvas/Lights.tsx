import React, { useRef } from 'react'
import * as THREE from 'three'
import { useHelper } from '@react-three/drei'

import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'

const INTENSITY = 1.8
const MAP_SIZE = [4096, 4096]
const SHADOW_CAMERA_FAR = 500
const SHADOW_CAMERA_LEFT = -500
const SHADOW_CAMERA_RIGHT = 500
const SHADOW_CAMERA_TOP = 500
const SHADOW_CAMERA_BOTTOM = -500
const SHADOW_RADIUS = 3
const SHADOW_BIAS = 0.0001

export default function Lights() {
  const directionalLightSWRef = useRef<THREE.DirectionalLight>(null!)
  const directionalLightSERef = useRef<THREE.DirectionalLight>(null!)
  const directionalLightNERef = useRef<THREE.DirectionalLight>(null!)
  const directionalLightNWRef = useRef<THREE.DirectionalLight>(null!)
  useHelper(directionalLightSWRef, THREE.DirectionalLightHelper, 1, 'red')
  useHelper(directionalLightSERef, THREE.DirectionalLightHelper, 1, 'red')
  useHelper(directionalLightNERef, THREE.DirectionalLightHelper, 1, 'red')
  useHelper(directionalLightNWRef, THREE.DirectionalLightHelper, 1, 'red')

  const directionalLightTarget = new THREE.Vector3(
    snakeGameConstants.SNAKE_GAME.BOARD.WIDTH / 2,
    0,
    snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT / 2,
  )

  return (
    <>
      <ambientLight intensity={1} />
      {/* <hemisphereLight intensity={0.2} castShadow /> */}
      <directionalLight
        ref={directionalLightSWRef}
        position={[0, 20, 0]}
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
        ref={directionalLightSERef}
        position={[snakeGameConstants.SNAKE_GAME.BOARD.WIDTH, 20, 0]}
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
        ref={directionalLightNERef}
        position={[
          snakeGameConstants.SNAKE_GAME.BOARD.WIDTH,
          20,
          snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT,
        ]}
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
        ref={directionalLightNWRef}
        position={[0, 20, snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT]}
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
