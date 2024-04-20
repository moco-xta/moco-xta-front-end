import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'

import { MHeliumBalloon } from '@/components/r3f/models/hero/MHeliumBalloon'
import { OHeliumBalloon } from '@/components/r3f/models/hero/OHeliumBalloon'
import { CHeliumBalloon } from '@/components/r3f/models/hero/CHeliumBalloon'
import { Smiley } from '@/components/r3f/models/hero/Smiley'
import { OwlSticker } from '@/components/r3f/models/hero/OwlSticker'

export default function MocoHelium() {
  const mRef = useRef(null!)
  const o1Ref = useRef(null!)
  const cRef = useRef(null!)
  const o2Ref = useRef(null!)

  const timeRef = useRef(0)
  const xRef = useRef(0)
  const yRef = useRef(0)
  const zRef = useRef(0)

  useFrame((state, delta, xrFrame) => {
    timeRef.current += delta
    xRef.current = Math.cos(timeRef.current)
    yRef.current = Math.sin(timeRef.current)
    zRef.current = Math.tan(timeRef.current)
    // @ts-ignore
    mRef.current.applyImpulse({
      x: xRef.current * 0.002,
      y: yRef.current * 0.002,
      z: zRef.current * 0.001,
    })
    // @ts-ignore
    o1Ref.current.applyImpulse({
      x: -xRef.current * 0.002,
      y: -yRef.current * 0.002,
      z: -zRef.current * 0.001,
    })
    // @ts-ignore
    cRef.current.applyImpulse({
      x: -xRef.current * 0.002,
      y: yRef.current * 0.002,
      z: zRef.current * 0.001,
    })
    // @ts-ignore
    o2Ref.current.applyImpulse({
      x: xRef.current * 0.002,
      y: -yRef.current * 0.002,
      z: -zRef.current * 0.001,
    })
  })

  const rotation = 33

  return (
    <group>
      <RigidBody
        ref={mRef}
        colliders='hull'
      >
        <MHeliumBalloon
          position={[-0.96, 0, 0]}
          rotation={[0, THREE.MathUtils.degToRad(rotation), 0]}
        />
      </RigidBody>
      <RigidBody
        ref={o1Ref}
        colliders='hull'
      >
        <OHeliumBalloon
          position={[-0.32, 0, 0]}
          rotation={[0, THREE.MathUtils.degToRad(rotation), 0]}
        />
      </RigidBody>
      <RigidBody
        ref={cRef}
        colliders='hull'
      >
        <CHeliumBalloon
          position={[0.32, 0, 0]}
          rotation={[0, THREE.MathUtils.degToRad(rotation), 0]}
        />
      </RigidBody>
      <RigidBody
        ref={o2Ref}
        colliders='hull'
      >
        <group
          position={[0.96, 0, 0]}
          rotation={[0, THREE.MathUtils.degToRad(rotation), 0]}
        >
          <OHeliumBalloon />
          <Smiley />
        </group>
      </RigidBody>
    </group>
  )
}
