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
    xRef.current = Math.cos(timeRef.current) * 0.0005
    yRef.current = Math.sin(timeRef.current) * 0.0005
    zRef.current = Math.tan(timeRef.current) * 0.0005
    // @ts-ignore
    if(mRef.current) mRef.current.applyImpulse({
      x: xRef.current,
      y: yRef.current,
      z: zRef.current,
    })
    // @ts-ignore
    if(o1Ref.current) o1Ref.current.applyImpulse({
      x: xRef.current,
      y: yRef.current,
      z: zRef.current,
    })
    // @ts-ignore
    if(cRef.current) cRef.current.applyImpulse({
      x: xRef.current,
      y: yRef.current,
      z: zRef.current,
    })
    // @ts-ignore
    if(o2Ref.current) o2Ref.current.applyImpulse({
      x: xRef.current,
      y: yRef.current,
      z: zRef.current,
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
