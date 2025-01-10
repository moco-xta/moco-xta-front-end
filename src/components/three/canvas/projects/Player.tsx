import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import * as RAPIER from '@dimforge/rapier3d-compat'
import { Bloom, DepthOfField, EffectComposer } from '@react-three/postprocessing'
import { KernelSize, Resolution } from 'postprocessing'
import { CapsuleCollider, type RapierRigidBody, RigidBody, useRapier } from '@react-three/rapier'

import { RootState } from '@/redux/store'

import { useKeyboard } from '@/hooks/useKeyboard'

import Camera from './Camera'

type TPlayer = {
  cameraRotation?: THREE.Euler
  speed?: number
  jumpForce?: number
}

export default function Player({
  cameraRotation = new THREE.Euler(),
  speed = 10,
  jumpForce = 5,
}: TPlayer) {
  const { dopTargetPosition } = useSelector((state: RootState) => state.player)
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
    camera.rotation.set(cameraRotation.x, cameraRotation.y, cameraRotation.z, 'YXZ')
  }, [camera.rotation, cameraRotation.x, cameraRotation.y, cameraRotation.z])

  useEffect(() => {
    console.log('dopTargetPosition', dopTargetPosition.z)
  }, [dopTargetPosition])

  useFrame(({ camera }, delta) => {
    if (!rigidBodyRef.current) return

    const velocityVector = rigidBodyRef.current.linvel()
    velocityRef.current = new THREE.Vector3(velocityVector.x, velocityVector.y, velocityVector.z)

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
      new RAPIER.Ray(rigidBodyRef.current.translation(), {
        x: 0,
        y: -1,
        z: 0,
      }),
      jumpForce,
      true,
    )
    // @ts-ignore
    const grounded = ray && ray.collider && Math.abs(ray.toi) <= 1.5

    if (jump && grounded) doJump()

    const { x, y, z } = rigidBodyRef.current.translation()
    // state.camera.position.set(x, y, z)
    rigidBodyRef.current.setTranslation({ x, y, z }, true)

    /* objectInHandRef.current.rotation.copy(state.camera.rotation)
    objectInHandRef.current.position
      .copy(state.camera.position)
      .add(state.camera.getWorldDirection(rotation)) */

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
          y: 8,
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
        <Camera />
        <CapsuleCollider args={[0.75, 0.5]} />
        <EffectComposer
          enableNormalPass
          multisampling={4}
        >
          <DepthOfField
            // @ts-ignore
            ref={dofRef}
            focalLength={0.3}
            bokehScale={18}
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
    </>
  )
}
