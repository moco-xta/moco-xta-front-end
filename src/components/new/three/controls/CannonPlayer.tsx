import { useCallback, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { useCylinder, useSphere } from '@react-three/cannon'
import { isMobile } from 'react-device-detect'

import { CannonPlayerInterface } from '@/interfaces/new/threeInterfaces'

import { useAboutKeyboard } from '@/hooks/new/useAboutKeyboard'
import { PointerLockControls } from '@react-three/drei'

import { default as aboutConstants } from '@/constants/new/canvas/about/aboutConstants.json'

export const CannonPlayer = ({ pointerLockControlsSelector }: CannonPlayerInterface) => {
  const { camera, gl } = useThree()

  const { moveBackward, moveForward, moveRight, moveLeft, jump } = useAboutKeyboard()

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

  const findDistance = (acceleration: number, speed: number) => {
    return 0.5 * acceleration * speed ** 2
  }

  /* const handleDevicemotion = useCallback((e: any) => {
    const normalizedDistance = new THREE.Vector3()
    const currentPosition = new THREE.Vector3()
    const accX = findDistance(e.acceleration.x, 0.9) // m/s^2 convert to distance <=> 0.5 * acceleration * speed ** 2
    const accY = findDistance(e.acceleration.y, 0.9)
    const accZ = findDistance(e.acceleration.z, 0.9)

    normalizedDistance.copy(new THREE.Vector3(accX, accY, accZ))
    const angleRad = THREE.MathUtils.degToRad(0)

    currentPosition.copy(normalizedDistance.applyAxisAngle(new THREE.Vector3(0, 1, 0), angleRad))

    camera.position.copy(currentPosition)
  }, [camera.position])

  const handleDevicemotion = useCallback((e: any) => {
    camera.position.copy(
      new THREE.Vector3(
        playerPosition.current[0],
        playerPosition.current[1] + aboutConstants.PERSPECTIVE_CAMERA.POSITION.Y,
        playerPosition.current[2],
      ),
    )

    const direction = new THREE.Vector3()

    const frontVector = new THREE.Vector3(0, 0, (e.accelerationIncludingGravity.x > 0 ? 1 : 0) - (e.accelerationIncludingGravity.x < 0 ? 1 : 0))

    const sideVector = new THREE.Vector3((e.accelerationIncludingGravity.z < 0 ? 1 : 0) - (e.accelerationIncludingGravity.z > 0 ? 1 : 0), 0, 0)

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(aboutConstants.PLAYER.SPEED)
      .applyEuler(camera.rotation)

    api.velocity.set(direction.x, playerVelocity.current[1], direction.z)
  }, [api.velocity, camera.position, camera.rotation]) */

  /* useEffect(() => {
    window.addEventListener('devicemotion', handleDevicemotion)
    return () => {
      window.removeEventListener('devicemotion', handleDevicemotion)
    }
  }, [handleDevicemotion]) */

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
