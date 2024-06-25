import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { useSphere } from '@react-three/cannon'

import { CannonPlayerInterface } from '@/interfaces/new/threeInterfaces'

import { useMinecraftKeyboard } from '@/hooks/new/useMinecraftKeyboard'
import { PointerLockControls } from '@react-three/drei'

const JUMP_FORCE = 4
const SPEED = 4

export const CannonPlayer = ({
  pointerLockControlsSelector,
}: CannonPlayerInterface) => {
  const { camera, gl } = useThree()

  const { moveBackward, moveForward, moveRight, moveLeft, jump } =
    useMinecraftKeyboard()

  const [ref, api] = useSphere<THREE.Mesh>(() => ({
    mass: 1,
    type: 'Dynamic',
    position: [0, 1, 0],
  }))

  const playerPosition = useRef([0, 1, 0])
  const playerVelocity = useRef([0, 0, 0])

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
        playerPosition.current[1],
        playerPosition.current[2],
      ),
    )

    const direction = new THREE.Vector3()

    const frontVector = new THREE.Vector3(
      0,
      0,
      (moveBackward ? 1 : 0) - (moveForward ? 1 : 0),
    )

    const sideVector = new THREE.Vector3(
      (moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
      0,
      0,
    )

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation)

    api.velocity.set(direction.x, playerVelocity.current[1], direction.z)

    if (jump && Math.abs(playerVelocity.current[1]) < 0.05) {
      api.velocity.set(
        playerVelocity.current[0],
        JUMP_FORCE,
        playerVelocity.current[2],
      )
    }
  })

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
