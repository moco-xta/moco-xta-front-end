import React, { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { Box } from '@react-three/drei'
import * as RAPIER from '@dimforge/rapier3d-compat'
import {
  CapsuleCollider,
  RapierRigidBody,
  RigidBody,
  useRapier,
} from '@react-three/rapier'

import { usePlayer } from '@/hooks/new/usePlayer'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import { setIsPlaying } from '@/redux/slice/snakeGameSlice'

const MOVE_SPEED = 5
const direction = new THREE.Vector3()
const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()
const rotation = new THREE.Vector3()

export default function Player() {
  const { forward, backward, left, right, jump } = usePlayer()

  const playerRef = useRef<RapierRigidBody>(null!)
  const objectInHandRef = useRef<THREE.Group>(null!)

  const rapier = useRapier()

  const dispatch = useDispatch<AppDispatch>()
  const isPlaying = useSelector((state: RootState) => state.snakeGame.isPlaying)

  useFrame((state) => {
    if (!playerRef.current) return

    // moving player0
    const velocity = playerRef.current.linvel()

    frontVector.set(0, 0, Number(backward) - Number(forward))
    sideVector.set(Number(left) - Number(right), 0, 0)
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(MOVE_SPEED)
      .applyEuler(state.camera.rotation)

    playerRef.current.wakeUp()
    playerRef.current.setLinvel(
      {
        x: direction.x,
        y: velocity.y,
        z: direction.z,
      },
      true,
    )

    // jumping
    /* const world = rapier.world
    const ray = world.castRay(
      new RAPIER.Ray(playerRef.current.translation(), { x: 0, y: -1, z: 0 }),
    )
    const grounded = ray && ray.collider && Math.abs(ray.toi) <= 1.5

    if (jump && grounded) doJump() */

    // moving camera
    const { x, y, z } = playerRef.current.translation()
    state.camera.position.set(x, y, z)

    // moving object in hand for the player
    objectInHandRef.current.rotation.copy(state.camera.rotation)
    objectInHandRef.current.position
      .copy(state.camera.position)
      .add(state.camera.getWorldDirection(rotation))
  })

  const doJump = () => {
    if (playerRef.current)
      playerRef.current.setLinvel({ x: 0, y: 8, z: 0 }, true)
  }

  const handleOnClick = () => {
    dispatch(setIsPlaying())
  }

  return (
    <>
      <RigidBody
        ref={playerRef}
        colliders={false}
        mass={1}
        type='dynamic'
        lockRotations
        position={[20, 15, 2]}
      >
        <mesh castShadow>
          <capsuleGeometry args={[0.5, 0.5]} />
          <CapsuleCollider args={[0.75, 0.5]} />
        </mesh>
      </RigidBody>
      <group ref={objectInHandRef}>
        <Box
          args={[0.3, 0.3, 0.3]}
          position={[0, -0.4, 0.1]}
          scale={0.3}
          onClick={handleOnClick}
        >
          <meshBasicMaterial
            attach='material'
            color={isPlaying ? 0xff0000 : 0x00ffff}
          />
        </Box>
      </group>
    </>
  )
}
