import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { RapierRigidBody, RigidBody } from '@react-three/rapier'

import useIsMobile from '@/hooks/useIsMobile'

import { MHeliumBalloon } from '@/components/r3f/models/hero/MHeliumBalloon'
import { OHeliumBalloon } from '@/components/r3f/models/hero/OHeliumBalloon'
import { CHeliumBalloon } from '@/components/r3f/models/hero/CHeliumBalloon'
import { Smiley } from '@/components/r3f/models/hero/Smiley'
import useMouseMove from '@/hooks/useMouseMove'

import { default as heroConstants } from '@/constants/canvas/heroConstants.json'
import { addForce, applyImpulse } from '@/helpers/heroCanvasHelpers'

export default function HeliumBalloons() {
  const { dimensionsType } = useIsMobile()
  const { deltaX, deltaY } = useMouseMove()

  const timeRef = useRef<number>(0)
  const xRef = useRef<number>(0)
  const yRef = useRef<number>(0)
  const zRef = useRef<number>(0)

  const mRef = useRef<RapierRigidBody>(null!)
  const o1Ref = useRef<RapierRigidBody>(null!)
  const cRef = useRef<RapierRigidBody>(null!)
  const o2Ref = useRef<RapierRigidBody>(null!)

  useFrame((state, delta, xrFrame) => {
    addForce(timeRef, delta, xRef, yRef, zRef, mRef, o1Ref, cRef, o2Ref)
  })

  useEffect(() => {
    applyImpulse(deltaX, deltaY, mRef, o1Ref, cRef, o2Ref)
  }, [deltaX, deltaY])

  if (!dimensionsType) return null

  return (
    <group>
      <RigidBody
        ref={mRef}
        position={[
          heroConstants.HELIUM_BALLOONS.BALLOONS.POSITION.M[dimensionsType].X,
          heroConstants.HELIUM_BALLOONS.BALLOONS.POSITION.M[dimensionsType].Y,
          heroConstants.HELIUM_BALLOONS.BALLOONS.POSITION.M[dimensionsType].Z,
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
          heroConstants.HELIUM_BALLOONS.BALLOONS.POSITION.O1[dimensionsType].X,
          heroConstants.HELIUM_BALLOONS.BALLOONS.POSITION.O1[dimensionsType].Y,
          heroConstants.HELIUM_BALLOONS.BALLOONS.POSITION.O1[dimensionsType].Z,
        ]}
        colliders='hull'
        restitution={heroConstants.HELIUM_BALLOONS.BALLOONS.PHYSICS.RESTITUTION}
      >
        <OHeliumBalloon
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
          heroConstants.HELIUM_BALLOONS.BALLOONS.POSITION.C[dimensionsType].X,
          heroConstants.HELIUM_BALLOONS.BALLOONS.POSITION.C[dimensionsType].Y,
          heroConstants.HELIUM_BALLOONS.BALLOONS.POSITION.C[dimensionsType].Z,
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
          heroConstants.HELIUM_BALLOONS.BALLOONS.POSITION.O2[dimensionsType].X,
          heroConstants.HELIUM_BALLOONS.BALLOONS.POSITION.O2[dimensionsType].Y,
          heroConstants.HELIUM_BALLOONS.BALLOONS.POSITION.O2[dimensionsType].Z,
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
          <OHeliumBalloon />
          <Smiley />
        </group>
      </RigidBody>
    </group>
  )
}
