import React, { useCallback, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
/* import { useDispatch } from 'react-redux' */
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { PerspectiveCamera, PointerLockControls } from '@react-three/drei'
import * as RAPIER from '@dimforge/rapier3d-compat'
import { CapsuleCollider, RapierRigidBody, RigidBody, useRapier } from '@react-three/rapier'
import { isMobile } from 'react-device-detect'

import { RapierPlayerInterface } from '@/interfaces/new/threeInterfaces'

import { AppDispatch } from '@/redux/store'
import { setLocation } from '@/redux/slice/aboutSlice'

import useLocation from '@/hooks/new/useLocation'

import { useAboutKeyboard } from '@/hooks/new/useAboutKeyboard'

const direction = new THREE.Vector3()
const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()
/* const rotation = new THREE.Vector3() */

export default function RapierPlayer({
  cameraRotation,
  fov,
  rigidBodyPosition,
  capsuleColliderArgs,
  speed,
  jumpForce,
  pointerLockControlsSelector,
}: RapierPlayerInterface) {
  const { camera, gl } = useThree()
  const rapier = useRapier()
  const dispatch = useDispatch<AppDispatch>()

  const { moveBackward, moveForward, moveRight, moveLeft, jump } = useAboutKeyboard()
  useLocation()

  const playerRef = useRef<RapierRigidBody>(null!)
  const velocity = useRef<THREE.Vector3>(new THREE.Vector3())
  /* const objectInHandRef = useRef<THREE.Group>(null!) */

  /* const dispatch = useDispatch<AppDispatch>() */

  useEffect(() => {
    camera.rotation.set(cameraRotation.x, cameraRotation.y, cameraRotation.z, 'YXZ')
  }, [camera.rotation, cameraRotation.x, cameraRotation.y, cameraRotation.z])

  const findDistance = (acceleration: number, speed: number) => {
    return 0.5 * acceleration * speed ** 2
  }

  const handleDevicemotion = useCallback((e: any) => {
    // m/s^2 convert to distance <=> 0.5 * acceleration * speed ** 2
    velocity.current = new THREE.Vector3(
      findDistance(-e.accelerationIncludingGravity.x, 5),
      findDistance(e.accelerationIncludingGravity.y, 5),
      findDistance(e.accelerationIncludingGravity.z, 5),
    )
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
        )
      })
    }
  }, [dispatch])

  useEffect(() => {
    window.addEventListener('devicemotion', handleDevicemotion)
    return () => {
      window.removeEventListener('devicemotion', handleDevicemotion)
    }
  }, [handleDevicemotion])

  useFrame((state) => {
    if (!playerRef.current) return

    if (!isMobile) {
      const velocityVector = playerRef.current.linvel()
      velocity.current = new THREE.Vector3(velocityVector.x, velocityVector.y, velocityVector.z)
    }

    frontVector.set(0, 0, Number(moveBackward) - Number(moveForward))
    sideVector.set(Number(moveLeft) - Number(moveRight), 0, 0)

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(speed)
      .applyEuler(state.camera.rotation)

    playerRef.current.wakeUp()
    playerRef.current.setLinvel(
      {
        x: !isMobile ? direction.x : velocity.current.x,
        y: velocity.current.y,
        z: !isMobile ? direction.z : velocity.current.z,
      },
      true,
    )

    const world = rapier.world
    const ray = world.castRay(
      new RAPIER.Ray(playerRef.current.translation(), {
        x: 0,
        y: -1,
        z: 0,
      }),
      jumpForce,
      true,
    )
    const grounded = ray && ray.collider && Math.abs(ray.toi) <= 1.5

    if (jump && grounded) doJump()

    const { x, y, z } = playerRef.current.translation()
    state.camera.position.set(x, y, z)

    /* objectInHandRef.current.rotation.copy(state.camera.rotation)
    objectInHandRef.current.position
      .copy(state.camera.position)
      .add(state.camera.getWorldDirection(rotation)) */
  })

  const doJump = () => {
    if (playerRef.current)
      playerRef.current.setLinvel(
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
      <PerspectiveCamera
        makeDefault
        fov={fov}
      />
      <RigidBody
        ref={playerRef}
        colliders={false}
        mass={1}
        type='dynamic'
        position={rigidBodyPosition}
        enabledRotations={[false, false, false]}
      >
        <CapsuleCollider args={capsuleColliderArgs} />
      </RigidBody>
      <PointerLockControls
        selector={pointerLockControlsSelector}
        args={[camera, gl.domElement]}
      />
      {/* <group ref={objectInHandRef}>
        <Box
          args={[0.3, 0.3, 0.3]}
          position={[0, -0.4, 0.1]}
          scale={0.3}
        >
          <meshBasicMaterial
            attach='material'
          />
        </Box>
      </group> */}
    </>
  )
}
