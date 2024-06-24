import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { useSphere } from '@react-three/cannon'

import { useMinecraftKeyboard } from '@/hooks/new/useMinecraftKeyboard'

const JUMP_FORCE = 4;

export const CannonPlayer = () => {
  const { camera } = useThree()

  const { moveBackward, moveForward, moveRight, moveLeft, jump } = useMinecraftKeyboard()

  const [ref, api] = useSphere<THREE.Mesh>(() => ({
    mass: 1,
    type: 'Dynamic',
    position: [50, 1, 0],
  }))

  const playerPosition = useRef([50, 1, 0])
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

    /* api.velocity.set(0, 0, 0) */

		if (jump && Math.abs(playerVelocity.current[1]) < 0.05) {
			api.velocity.set(playerVelocity.current[0], JUMP_FORCE, playerVelocity.current[2])
		}
  })

  return <mesh ref={ref}></mesh>
}
