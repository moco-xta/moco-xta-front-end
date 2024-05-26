import React, { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { Box } from '@react-three/drei'
import * as RAPIER from "@dimforge/rapier3d-compat"
import { CapsuleCollider, RapierRigidBody, RigidBody, useRapier } from '@react-three/rapier'

import { usePlayer } from '@/hooks/new/usePlayer'

const MOVE_SPEED = 5;
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();
const rotation = new THREE.Vector3();

export default function Player() {
  const { forward, backward, left, right, jump } = usePlayer()

  const playerRef = useRef<RapierRigidBody>(null!)
  const objectInHandRef = useRef<THREE.Group>(null!)

  const rapier = useRapier()

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
    playerRef.current.setLinvel({
      x: direction.x,
      y: velocity.y,
      z: direction.z,
    }, true)

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
    if (playerRef.current) playerRef.current.setLinvel({ x: 0, y: 8, z: 0 }, true)
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
          position={[0.3, -0.1, 0.3]}
          scale={0.3}
        />
      </group>
    </>
  )
}
