import { useCallback, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { useCylinder, useSphere } from '@react-three/cannon'
import { isMobile } from 'react-device-detect'

import { CannonPlayerInterface } from '@/interfaces/new/threeInterfaces'

import { useMinecraftKeyboard } from '@/hooks/new/useMinecraftKeyboard'
import { PointerLockControls } from '@react-three/drei'

import { default as aboutConstants } from '@/constants/new/canvas/about/aboutConstants.json'

export const CannonPlayer = ({ pointerLockControlsSelector }: CannonPlayerInterface) => {
  const { camera, gl } = useThree()

  const { moveBackward, moveForward, moveRight, moveLeft, jump } = useMinecraftKeyboard()

  const [ref, api] = useCylinder<THREE.Mesh>(() => ({
    mass: 1,
    type: 'Dynamic',
    position: [
      aboutConstants.PERSPECTIVE_CAMERA.POSITION.X,
      aboutConstants.PERSPECTIVE_CAMERA.POSITION.Y + 1,
      aboutConstants.PERSPECTIVE_CAMERA.POSITION.Z,
    ],
  }))

  const playerPosition = useRef([
    aboutConstants.PERSPECTIVE_CAMERA.POSITION.X,
    1,
    aboutConstants.PERSPECTIVE_CAMERA.POSITION.Z,
  ])
  const playerVelocity = useRef([0, 0, 0])

  useEffect(() => {
    camera.rotation.set(
      THREE.MathUtils.degToRad(aboutConstants.PERSPECTIVE_CAMERA.ROTATION.X),
      THREE.MathUtils.degToRad(aboutConstants.PERSPECTIVE_CAMERA.ROTATION.Y),
      THREE.MathUtils.degToRad(aboutConstants.PERSPECTIVE_CAMERA.ROTATION.Z),
      'YXZ',
    )
  }, [camera.rotation])

  useEffect(() => {
    api.position.subscribe((p) => (playerPosition.current = p))
  }, [api.position])

  useEffect(() => {
    api.velocity.subscribe((v) => (playerVelocity.current = v))
  }, [api.velocity])

  useFrame(() => {
      camera.position.copy(
        new THREE.Vector3(
          playerPosition.current[0],
          playerPosition.current[1] + aboutConstants.PERSPECTIVE_CAMERA.POSITION.Y,
          playerPosition.current[2],
        ),
      )

      const direction = new THREE.Vector3()

      const frontVector = new THREE.Vector3(0, 0, (moveBackward ? 1 : 0) - (moveForward ? 1 : 0))

      const sideVector = new THREE.Vector3((moveLeft ? 1 : 0) - (moveRight ? 1 : 0), 0, 0)

      direction
        .subVectors(frontVector, sideVector)
        .normalize()
        .multiplyScalar(aboutConstants.PLAYER.SPEED)
        .applyEuler(camera.rotation)

      api.velocity.set(direction.x, playerVelocity.current[1], direction.z)

      if (jump && Math.abs(playerVelocity.current[1]) < 0.05) {
        api.velocity.set(playerVelocity.current[0], aboutConstants.PLAYER.JUMP_FORCE, playerVelocity.current[2])
      }
  })

  const handleDevicemotion = useCallback((e: any) => {
    /* api.velocity.set(e.acceleration.x * 1000000, e.acceleration.y * 1000000, e.acceleration.z * 1000000) */
    camera.position.set(e.acceleration.x * 1000, e.acceleration.y * 1000, e.acceleration.z * 1000)
  }, [])

  useEffect(() => {
    window.addEventListener('devicemotion', handleDevicemotion)
    return () => {
      window.removeEventListener('devicemotion', handleDevicemotion)
    }
  }, [handleDevicemotion])

  return (
    <>
      <mesh ref={ref}></mesh>
      <PointerLockControls
        selector={pointerLockControlsSelector}
        args={[camera, gl.domElement]}
      />
    </>
  )
}
