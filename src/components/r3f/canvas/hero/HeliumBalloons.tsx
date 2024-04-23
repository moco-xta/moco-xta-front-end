import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'

import useIsMobile from '@/hooks/useIsMobile'
import useMouseMove from '@/hooks/useMouseMove'

import { MHeliumBalloon } from '@/components/r3f/models/hero/MHeliumBalloon'
import { OHeliumBalloon } from '@/components/r3f/models/hero/OHeliumBalloon'
import { CHeliumBalloon } from '@/components/r3f/models/hero/CHeliumBalloon'
import { Smiley } from '@/components/r3f/models/hero/Smiley'

import { default as heroConstants } from '@/constants/canvas/heroConstants.json'

export default function HeliumBalloons() {
  const { dimensionsType } = useIsMobile()

  const mRef = useRef(null!)
  const o1Ref = useRef(null!)
  const cRef = useRef(null!)
  const o2Ref = useRef(null!)

  const timeRef = useRef(0)
  const xRef = useRef(0)
  const yRef = useRef(0)
  const zRef = useRef(0)

  useFrame((state, delta, xrFrame) => {
    timeRef.current += delta * 2
    xRef.current = Math.cos(timeRef.current) * 0.001
    yRef.current = Math.sin(timeRef.current) * 0.001
    zRef.current = -Math.cos(timeRef.current + 0.5) * 0.001
    if (mRef.current)
      // @ts-ignore
      mRef.current.addForce(
        {
          x: xRef.current,
          y: yRef.current,
          z: zRef.current,
        },
        true,
      )
    if (o1Ref.current)
      // @ts-ignore
      o1Ref.current.addForce(
        {
          x: xRef.current,
          y: yRef.current,
          z: zRef.current,
        },
        true,
      )
    if (cRef.current)
      // @ts-ignore
      cRef.current.addForce(
        {
          x: xRef.current,
          y: yRef.current,
          z: zRef.current,
        },
        true,
      )
    if (o2Ref.current)
      // @ts-ignore
      o2Ref.current.addForce(
        {
          x: xRef.current,
          y: yRef.current,
          z: zRef.current,
        },
        true,
      )
  })

  const { deltaX, deltaY } = useMouseMove()

  const MOUSE_INFLUENCE = 0.001

  useEffect(() => {
    if (mRef.current) {
      if (deltaX > 0)
        // @ts-ignore
        mRef.current.applyImpulse({
          x: deltaX * MOUSE_INFLUENCE,
          y: -deltaY * MOUSE_INFLUENCE,
          z: 0,
        })
      // @ts-ignore
      o1Ref.current.applyImpulse({
        x: deltaX * MOUSE_INFLUENCE,
        y: -deltaY * MOUSE_INFLUENCE,
        z: 0,
      })
      // @ts-ignore
      cRef.current.applyImpulse({
        x: deltaX * MOUSE_INFLUENCE,
        y: -deltaY * MOUSE_INFLUENCE,
        z: 0,
      })
      // @ts-ignore
      o2Ref.current.applyImpulse({
        x: deltaX * MOUSE_INFLUENCE,
        y: -deltaY * MOUSE_INFLUENCE,
        z: 0,
      })
      if (deltaX < 0)
        // @ts-ignore
        mRef.current.applyImpulse({
          x: deltaX * MOUSE_INFLUENCE,
          y: -deltaY * MOUSE_INFLUENCE,
          z: 0,
        })
      // @ts-ignore
      o1Ref.current.applyImpulse({
        x: deltaX * MOUSE_INFLUENCE,
        y: -deltaY * MOUSE_INFLUENCE,
        z: 0,
      })
      // @ts-ignore
      cRef.current.applyImpulse({
        x: deltaX * MOUSE_INFLUENCE,
        y: -deltaY * MOUSE_INFLUENCE,
        z: 0,
      })
      // @ts-ignore
      o2Ref.current.applyImpulse({
        x: deltaX * MOUSE_INFLUENCE,
        y: -deltaY * MOUSE_INFLUENCE,
        z: 0,
      })
    }
  }, [deltaX, deltaY])

  const rotation = 33

  if(!dimensionsType) return null

  return (
    <group>
      <RigidBody
        ref={mRef}
        position={[
          heroConstants.MOCO_HELIUM.BALLOONS.POSITION.M[dimensionsType].X,
          heroConstants.MOCO_HELIUM.BALLOONS.POSITION.M[dimensionsType].Y,
          heroConstants.MOCO_HELIUM.BALLOONS.POSITION.M[dimensionsType].Z,
        ]}
        colliders='hull'
        restitution={0.2}
      >
        <MHeliumBalloon rotation={[0, THREE.MathUtils.degToRad(rotation), 0]} />
      </RigidBody>
      <RigidBody
        ref={o1Ref}
        position={[
          heroConstants.MOCO_HELIUM.BALLOONS.POSITION.O1[dimensionsType].X,
          heroConstants.MOCO_HELIUM.BALLOONS.POSITION.O1[dimensionsType].Y,
          heroConstants.MOCO_HELIUM.BALLOONS.POSITION.O1[dimensionsType].Z,
        ]}
        colliders='hull'
        restitution={0.2}
      >
        <OHeliumBalloon rotation={[0, THREE.MathUtils.degToRad(rotation), 0]} />
      </RigidBody>
      {/* <RigidBody
        ref={cRef}
        position={[
          heroConstants.MOCO_HELIUM.BALLOONS.POSITION.C[dimensionsType].X,
          heroConstants.MOCO_HELIUM.BALLOONS.POSITION.C[dimensionsType].Y,
          heroConstants.MOCO_HELIUM.BALLOONS.POSITION.C[dimensionsType].Z,
        ]}
        colliders='hull'
        restitution={0.2}
      >
        <CHeliumBalloon rotation={[0, THREE.MathUtils.degToRad(rotation), 0]} />
      </RigidBody>
      <RigidBody
        ref={o2Ref}
        position={[
          heroConstants.MOCO_HELIUM.BALLOONS.POSITION.O2[dimensionsType].X,
          heroConstants.MOCO_HELIUM.BALLOONS.POSITION.O2[dimensionsType].Y,
          heroConstants.MOCO_HELIUM.BALLOONS.POSITION.O2[dimensionsType].Z,
        ]}
        colliders='hull'
        restitution={0.2}
      >
        <group rotation={[0, THREE.MathUtils.degToRad(rotation), 0]}>
          <OHeliumBalloon />
          <Smiley />
        </group>
      </RigidBody> */}
    </group>
  )
}
