import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'

import useMouseMove from '@/hooks/useMouseMove'

import { MHeliumBalloon } from '@/components/r3f/models/hero/MHeliumBalloon'
import { OHeliumBalloon } from '@/components/r3f/models/hero/OHeliumBalloon'
import { CHeliumBalloon } from '@/components/r3f/models/hero/CHeliumBalloon'
import { Smiley } from '@/components/r3f/models/hero/Smiley'

export default function MocoHelium() {
  const mRef = useRef(null!)
  const o1Ref = useRef(null!)
  const cRef = useRef(null!)
  const o2Ref = useRef(null!)

  const rotation = 33

  const { deltaX, deltaY } = useMouseMove()

  useEffect(() => {
    if (mRef.current) {
      if (deltaX > 0)
        // @ts-ignore
        mRef.current.applyImpulse({ x: deltaX * 0.01, y: -deltaY * 0.01, z: 0 })
      if (deltaX < 0)
        // @ts-ignore
        o2Ref.current.applyImpulse({
          x: deltaX * 0.01,
          y: -deltaY * 0.01,
          z: 0,
        })
    }
  }, [deltaX, deltaY])

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

{
  /* <MHeliumBalloon position={[-0.96, -1.5, 0]} rotation={[0, degreesToRadians(rotation), 0]} />
<OHeliumBalloon position={[-0.32, -1.5, 0]} rotation={[0, degreesToRadians(rotation), 0]} />
<CHeliumBalloon position={[0.32, -1.5, 0]} rotation={[0, degreesToRadians(rotation), 0]} />
<OHeliumBalloon position={[0.96, -1.5, 0]} rotation={[0, degreesToRadians(rotation), 0]} /> */
}
