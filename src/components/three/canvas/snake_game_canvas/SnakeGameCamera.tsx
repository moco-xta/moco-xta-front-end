import React, { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { useSelector } from 'react-redux'

import { RootState } from '@/redux/store'

import { updateCamera } from '@/helpers/snake_game'

import { default as snakeGameConstants } from '@/constants/canvas/snakeGameConstants.json'

export default function SnakeGamePerspectiveCamera() {
  const perspectiveCameraGroupRef = useRef<THREE.Group>(null!)

  const snakeGameState = useSelector((state: RootState) => state.snakeGame)

  useFrame((state) => {
    if (perspectiveCameraGroupRef.current) {
      const { newGroupPosition, newGroupRotation, newCameraRotation } = updateCamera(
        snakeGameState.snake[0],
        snakeGameState.direction,
      )
      perspectiveCameraGroupRef.current.position.set(
        newGroupPosition.x,
        newGroupPosition.y,
        newGroupPosition.z,
      )
      perspectiveCameraGroupRef.current.rotation.set(
        newGroupRotation.x,
        newGroupRotation.y,
        newGroupRotation.z,
      )
      state.camera.rotation.set(newCameraRotation.x, newCameraRotation.y, newCameraRotation.z)
    }
  })

  return (
    <group
      ref={perspectiveCameraGroupRef}
      rotation={[
        THREE.MathUtils.degToRad(0),
        THREE.MathUtils.degToRad(0),
        THREE.MathUtils.degToRad(0),
      ]}
    >
      <PerspectiveCamera
        makeDefault
        fov={snakeGameConstants.PERSPECTIVE_CAMERA.FOV}
      />
    </group>
  )
}
