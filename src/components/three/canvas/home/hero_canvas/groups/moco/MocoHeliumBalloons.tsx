import React, { useLayoutEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { useGSAP } from '@gsap/react'

import { HeliumBalloonM } from '@/components/three/models/home/hero/helium_balloons/HeliumBalloonM'
import { HeliumBalloonO } from '@/components/three/models/home/hero/helium_balloons/HeliumBalloonO'
import { HeliumBalloonC } from '@/components/three/models/home/hero/helium_balloons/HeliumBalloonC'
import { Smiley } from '@/components/three/models/home/hero/helium_balloons/Smiley'

import { default as mocoHeliumBalloonsConstants } from '@/constants/canvas/home/hero/mocoHeliumBalloonsConstants.json'
import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'
import { default as mocoHeliumBalloonsAnimationsConstants } from '@/constants/animations/home/hero/moco_helium_balloons/mocoHeliumBalloonsAnimationsConstants.json'

interface MocoHeliumBalloonsInterface {
  timeline: GSAPTimeline
}

export default function MocoHeliumBalloons({ timeline }: MocoHeliumBalloonsInterface) {
  const [duration] = useState<number>(
    mocoHeliumBalloonsAnimationsConstants.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    mocoHeliumBalloonsAnimationsConstants.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const mocoHeliumBalloonsGroupRef = useRef<THREE.Group>(null!)
  const heliumBalloonM = useRef<THREE.Mesh>(null!)
  const heliumBalloonO1 = useRef<THREE.Mesh>(null!)
  const heliumBalloonC = useRef<THREE.Mesh>(null!)
  const heliumBalloonO2 = useRef<THREE.Mesh>(null!)

  useLayoutEffect(() => {
    if (mocoHeliumBalloonsGroupRef.current) mocoHeliumBalloonsGroupRef.current.visible = false
  }, [mocoHeliumBalloonsGroupRef])

  useGSAP(
    () => {
      timeline.to(
        // VISIBILITY
        mocoHeliumBalloonsGroupRef.current,
        {
          keyframes: {
            '0%': {
              onComplete: () => {
                mocoHeliumBalloonsGroupRef.current.visible = true
              },
            },
            '100%': {
              onComplete: () => {
                mocoHeliumBalloonsGroupRef.current.visible = false
              },
            },
          },
          duration: duration,
        },
        delay,
      )
    },
    { scope: mocoHeliumBalloonsGroupRef },
  )

  return (
    <group ref={mocoHeliumBalloonsGroupRef}>
      <RigidBody
        position={[
          mocoHeliumBalloonsConstants.BALLOONS.POSITION.M.X,
          mocoHeliumBalloonsConstants.BALLOONS.POSITION.M.Y,
          mocoHeliumBalloonsConstants.BALLOONS.POSITION.M.Z,
        ]}
        rotation={[0, THREE.MathUtils.degToRad(mocoHeliumBalloonsConstants.BALLOONS.ROTATION), 0]}
        colliders='hull'
        restitution={mocoHeliumBalloonsConstants.BALLOONS.PHYSICS.RESTITUTION}
      >
        <HeliumBalloonM ref={heliumBalloonM} />
      </RigidBody>
      <RigidBody
        position={[
          mocoHeliumBalloonsConstants.BALLOONS.POSITION.O1.X,
          mocoHeliumBalloonsConstants.BALLOONS.POSITION.O1.Y,
          mocoHeliumBalloonsConstants.BALLOONS.POSITION.O1.Z,
        ]}
        rotation={[0, THREE.MathUtils.degToRad(mocoHeliumBalloonsConstants.BALLOONS.ROTATION), 0]}
        colliders='hull'
        restitution={mocoHeliumBalloonsConstants.BALLOONS.PHYSICS.RESTITUTION}
      >
        <HeliumBalloonO ref={heliumBalloonO1} />
      </RigidBody>
      <RigidBody
        position={[
          mocoHeliumBalloonsConstants.BALLOONS.POSITION.C.X,
          mocoHeliumBalloonsConstants.BALLOONS.POSITION.C.Y,
          mocoHeliumBalloonsConstants.BALLOONS.POSITION.C.Z,
        ]}
        rotation={[0, THREE.MathUtils.degToRad(mocoHeliumBalloonsConstants.BALLOONS.ROTATION), 0]}
        colliders='hull'
        restitution={mocoHeliumBalloonsConstants.BALLOONS.PHYSICS.RESTITUTION}
      >
        <HeliumBalloonC ref={heliumBalloonC} />
      </RigidBody>
      <RigidBody
        position={[
          mocoHeliumBalloonsConstants.BALLOONS.POSITION.O2.X,
          mocoHeliumBalloonsConstants.BALLOONS.POSITION.O2.Y,
          mocoHeliumBalloonsConstants.BALLOONS.POSITION.O2.Z,
        ]}
        rotation={[0, THREE.MathUtils.degToRad(mocoHeliumBalloonsConstants.BALLOONS.ROTATION), 0]}
        colliders='hull'
        restitution={mocoHeliumBalloonsConstants.BALLOONS.PHYSICS.RESTITUTION}
      >
        <HeliumBalloonO ref={heliumBalloonO2} />
        <Smiley />
      </RigidBody>
    </group>
  )
}
