import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { RapierRigidBody, RigidBody } from '@react-three/rapier'

import useMouseMove from '@/hooks/useMouseMove'

import { default as heroConstants } from '@/constants/canvas/heroConstants.json'
import { addForce, applyImpulse } from '@/helpers/heroCanvasHelpers'
import { CHeliumBalloon, MHeliumBalloon, OHeliumBalloon, Smiley } from '../../../models/hero'

export default function HeliumBalloons() {
  /* const { deltaX, deltaY } = useMouseMove() */

  const timeRef = useRef<number>(0)
  const xRef = useRef<number>(1)
  const yRef = useRef<number>(0)
  const zRef = useRef<number>(1)

  const mRef = useRef<RapierRigidBody>(null!)
  const o1Ref = useRef<RapierRigidBody>(null!)
  const cRef = useRef<RapierRigidBody>(null!)
  const o2Ref = useRef<RapierRigidBody>(null!)

  useFrame((state, delta, xrFrame) => {
    addForce(timeRef, delta, xRef, yRef, zRef, mRef, o1Ref, cRef, o2Ref)
  })

  /* useEffect(() => {
    applyImpulse(deltaX, deltaY, mRef, o1Ref, cRef, o2Ref)
  }, [deltaX, deltaY]) */

  return (
    <group>
      <RigidBody
        ref={mRef}
        position={[
          heroConstants.HELIUM_BALLOONS.BALLOONS.POSITION.M.LARGE_SCREEN.X,
          heroConstants.HELIUM_BALLOONS.BALLOONS.POSITION.M.LARGE_SCREEN.Y,
          heroConstants.HELIUM_BALLOONS.BALLOONS.POSITION.M.LARGE_SCREEN.Z,
        ]}
        colliders='hull'
        restitution={heroConstants.HELIUM_BALLOONS.BALLOONS.PHYSICS.RESTITUTION}
      >
        <MHeliumBalloon
          rotation={[
            0,
            THREE.MathUtils.degToRad(heroConstants.HELIUM_BALLOONS.BALLOONS.ROTATION),
            0,
          ]}
        />
      </RigidBody>
      <RigidBody
        ref={o1Ref}
        position={[
          heroConstants.HELIUM_BALLOONS.BALLOONS.POSITION.O1.LARGE_SCREEN.X,
          heroConstants.HELIUM_BALLOONS.BALLOONS.POSITION.O1.LARGE_SCREEN.Y,
          heroConstants.HELIUM_BALLOONS.BALLOONS.POSITION.O1.LARGE_SCREEN.Z,
        ]}
        colliders='hull'
        restitution={heroConstants.HELIUM_BALLOONS.BALLOONS.PHYSICS.RESTITUTION}
      >
        <OHeliumBalloon
          name={'O1HeliumBalloon'}
          rotation={[
            0,
            THREE.MathUtils.degToRad(heroConstants.HELIUM_BALLOONS.BALLOONS.ROTATION),
            0,
          ]}
        />
      </RigidBody>
      <RigidBody
        ref={cRef}
        position={[
          heroConstants.HELIUM_BALLOONS.BALLOONS.POSITION.C.LARGE_SCREEN.X,
          heroConstants.HELIUM_BALLOONS.BALLOONS.POSITION.C.LARGE_SCREEN.Y,
          heroConstants.HELIUM_BALLOONS.BALLOONS.POSITION.C.LARGE_SCREEN.Z,
        ]}
        colliders='hull'
        restitution={heroConstants.HELIUM_BALLOONS.BALLOONS.PHYSICS.RESTITUTION}
      >
        <CHeliumBalloon
          rotation={[
            0,
            THREE.MathUtils.degToRad(heroConstants.HELIUM_BALLOONS.BALLOONS.ROTATION),
            0,
          ]}
        />
      </RigidBody>
      <RigidBody
        ref={o2Ref}
        position={[
          heroConstants.HELIUM_BALLOONS.BALLOONS.POSITION.O2.LARGE_SCREEN.X,
          heroConstants.HELIUM_BALLOONS.BALLOONS.POSITION.O2.LARGE_SCREEN.Y,
          heroConstants.HELIUM_BALLOONS.BALLOONS.POSITION.O2.LARGE_SCREEN.Z,
        ]}
        colliders='hull'
        restitution={heroConstants.HELIUM_BALLOONS.BALLOONS.PHYSICS.RESTITUTION}
      >
        <group
          rotation={[
            0,
            THREE.MathUtils.degToRad(heroConstants.HELIUM_BALLOONS.BALLOONS.ROTATION),
            0,
          ]}
        >
          <OHeliumBalloon name={'O2HeliumBalloon'} />
          <Smiley />
        </group>
      </RigidBody>
    </group>
  )
}
