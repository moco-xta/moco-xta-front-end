import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { Bloom, DepthOfField, EffectComposer } from '@react-three/postprocessing'
import { KernelSize, Resolution } from 'postprocessing'
import { CapsuleCollider, type RapierRigidBody, RigidBody, useRapier } from '@react-three/rapier'
import * as RAPIER from '@dimforge/rapier3d-compat'

import type { TPlayer } from '@/types/components/three/types'

import { RootState } from '@/redux/store'

import { useKeyboard } from '@/hooks/three/useKeyboard'

import PlayerCamera from './PlayerCamera'
import PlayerPointerLockControls from './PlayerPointerLockControls'

const SPEED = 10
const JUMP_FORCE = 8
const GROUNDED_DISTANCE = 0.25

export default function Player({
  cameraDefaultValues,
  speed = SPEED,
  jumpForce = JUMP_FORCE,
}: TPlayer) {
  const { pointerLockControlsSelector, dopTargetPosition } = useSelector(
    (state: RootState) => state.playerPageState,
  )
  const { camera } = useThree()
  const rapier = useRapier()

  const { actions } = useKeyboard()
  const { moveBackward, moveForward, moveRight, moveLeft, jump } = actions

  const rigidBodyRef = useRef<RapierRigidBody>(null!)
  const velocityRef = useRef<THREE.Vector3>(new THREE.Vector3())
  const directionRef = useRef<THREE.Vector3>(new THREE.Vector3())
  const frontVectorRef = useRef<THREE.Vector3>(new THREE.Vector3())
  const sideVectorRef = useRef<THREE.Vector3>(new THREE.Vector3())

  const dofRef = useRef<{ target: THREE.Vector3 }>(null!)

  useEffect(() => {
    const rotation = cameraDefaultValues.rotation

    if (rotation) {
      const { x, y, z } = rotation
      camera.rotation.set(x, y, z, 'YXZ')
    }
  }, [camera.rotation, cameraDefaultValues.rotation])

  useFrame(() => {
    if (!rigidBodyRef.current) return

    const velocityVector = rigidBodyRef.current.linvel()
    velocityRef.current.set(velocityVector.x, velocityVector.y, velocityVector.z)

    frontVectorRef.current.set(0, 0, Number(moveBackward) - Number(moveForward))
    sideVectorRef.current.set(Number(moveLeft) - Number(moveRight), 0, 0)

    directionRef.current
      .subVectors(frontVectorRef.current, sideVectorRef.current)
      .normalize()
      .multiplyScalar(speed)
      .applyEuler(camera.rotation)

    rigidBodyRef.current.wakeUp()
    rigidBodyRef.current.setLinvel(
      {
        x: directionRef.current.x,
        y: velocityRef.current.y,
        z: directionRef.current.z,
      },
      true,
    )

    const world = rapier.world
    const ray = world.castRay(
      new RAPIER.Ray(rigidBodyRef.current.translation(), { x: 0, y: -1, z: 0 }),
      jumpForce,
      true,
    )
    // @ts-expect-error: ray.collider may be null or undefined
    const grounded = ray && ray.collider && Math.abs(ray.toi) <= GROUNDED_DISTANCE

    if (jump && grounded) doJump()

    const { x, y, z } = rigidBodyRef.current.translation()
    rigidBodyRef.current.setTranslation({ x, y, z }, true)

    dofRef.current.target = new THREE.Vector3(
      dopTargetPosition.x,
      dopTargetPosition.y,
      dopTargetPosition.z,
    )
  })

  const doJump = () => {
    if (rigidBodyRef.current)
      rigidBodyRef.current.setLinvel(
        {
          x: 0,
          y: JUMP_FORCE,
          z: 0,
        },
        true,
      )
  }

  return (
    <>
      <RigidBody
        ref={rigidBodyRef}
        colliders={false}
        mass={1}
        type='dynamic'
        position={new THREE.Vector3(0, 15, 20)}
        enabledRotations={[false, false, false]}
      >
        <PlayerCamera cameraDefaultValues={cameraDefaultValues} />
        <CapsuleCollider args={[0.75, 0.5]} />
        <EffectComposer
          enableNormalPass
          multisampling={4}
        >
          <DepthOfField
            // @ts-expect-error: dofRef does not match the expected type
            ref={dofRef}
            focalLength={0.3}
            bokehScale={2}
          />
          <Bloom
            intensity={1}
            kernelSize={KernelSize.LARGE}
            luminanceThreshold={0.9}
            luminanceSmoothing={0.9}
            mipmapBlur={false}
            resolutionX={Resolution.AUTO_SIZE}
            resolutionY={Resolution.AUTO_SIZE}
          />
        </EffectComposer>
      </RigidBody>
      <PlayerPointerLockControls pointerLockControlsSelector={`#${pointerLockControlsSelector}`} />
    </>
  )
}
