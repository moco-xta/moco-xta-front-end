import React, { useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { HeliumBalloonM } from '@/components/three/models/home/hero/moco/HeliumBalloonM'
import { HeliumBalloonO } from '@/components/three/models/home/hero/moco/HeliumBalloonO'
import { HeliumBalloonC } from '@/components/three/models/home/hero/moco/HeliumBalloonC'
import { Smiley } from '@/components/three/models/home/hero/moco/Smiley'
import BalloonsWrapper from './BalloonsWrapper'

import { default as mocoGroupConstants } from '@/constants/animations/home/hero/canvas/groups/moco/mocoGroupConstants.json'

export default function MocoGroup() {
  const { timeline } = useGSAPTimelineContext()

  const mocoGroupRef = useRef<THREE.Group>(null!)

  useLayoutEffect(() => {
    if (mocoGroupRef.current) {
      mocoGroupRef.current.visible = mocoGroupConstants.DEFAULT.MOCO_GROUP.VISIBLE
      console.log('mocoGroupRef.current', mocoGroupRef.current)
    }
  }, [mocoGroupRef])

  useGSAP(
    () => {
      timeline.to(
        // VISIBILITY
        mocoGroupRef.current,
        {
          keyframes: {
            '0%': {
              onComplete: () => {
                mocoGroupRef.current.visible = true
              },
            },
            '100%': {
              onComplete: () => {
                mocoGroupRef.current.visible = false
              },
            },
          },
          duration: 1,
        },
        9,
      )
    },
    { scope: mocoGroupRef },
  )

  return (
    <group
      ref={mocoGroupRef}
      scale={mocoGroupConstants.DEFAULT.MOCO_GROUP.SCALE}
    >
      <RigidBody
        position={
          new THREE.Vector3(
            mocoGroupConstants.DEFAULT.LETTERS.GEOMETRY.POSITIONS.M.X,
            mocoGroupConstants.DEFAULT.LETTERS.GEOMETRY.POSITIONS.M.Y,
            mocoGroupConstants.DEFAULT.LETTERS.GEOMETRY.POSITIONS.M.Z,
          )
        }
        rotation={
          new THREE.Euler(
            THREE.MathUtils.degToRad(mocoGroupConstants.DEFAULT.LETTERS.GEOMETRY.ROTATION.X),
            THREE.MathUtils.degToRad(mocoGroupConstants.DEFAULT.LETTERS.GEOMETRY.ROTATION.Y),
            THREE.MathUtils.degToRad(mocoGroupConstants.DEFAULT.LETTERS.GEOMETRY.ROTATION.Z),
          )
        }
        colliders='hull'
        restitution={mocoGroupConstants.DEFAULT.LETTERS.PHYSICS.RESTITUTION}
      >
        <HeliumBalloonM />
      </RigidBody>
      <RigidBody
        position={
          new THREE.Vector3(
            mocoGroupConstants.DEFAULT.LETTERS.GEOMETRY.POSITIONS.O1.X,
            mocoGroupConstants.DEFAULT.LETTERS.GEOMETRY.POSITIONS.O1.Y,
            mocoGroupConstants.DEFAULT.LETTERS.GEOMETRY.POSITIONS.O1.Z,
          )
        }
        rotation={
          new THREE.Euler(
            THREE.MathUtils.degToRad(mocoGroupConstants.DEFAULT.LETTERS.GEOMETRY.ROTATION.X),
            THREE.MathUtils.degToRad(mocoGroupConstants.DEFAULT.LETTERS.GEOMETRY.ROTATION.Y),
            THREE.MathUtils.degToRad(mocoGroupConstants.DEFAULT.LETTERS.GEOMETRY.ROTATION.Z),
          )
        }
        colliders='hull'
        restitution={mocoGroupConstants.DEFAULT.LETTERS.PHYSICS.RESTITUTION}
      >
        <HeliumBalloonO />
      </RigidBody>
      <RigidBody
        position={
          new THREE.Vector3(
            mocoGroupConstants.DEFAULT.LETTERS.GEOMETRY.POSITIONS.C.X,
            mocoGroupConstants.DEFAULT.LETTERS.GEOMETRY.POSITIONS.C.Y,
            mocoGroupConstants.DEFAULT.LETTERS.GEOMETRY.POSITIONS.C.Z,
          )
        }
        rotation={
          new THREE.Euler(
            THREE.MathUtils.degToRad(mocoGroupConstants.DEFAULT.LETTERS.GEOMETRY.ROTATION.X),
            THREE.MathUtils.degToRad(mocoGroupConstants.DEFAULT.LETTERS.GEOMETRY.ROTATION.Y),
            THREE.MathUtils.degToRad(mocoGroupConstants.DEFAULT.LETTERS.GEOMETRY.ROTATION.Z),
          )
        }
        colliders='hull'
        restitution={mocoGroupConstants.DEFAULT.LETTERS.PHYSICS.RESTITUTION}
      >
        <HeliumBalloonC />
      </RigidBody>
      <RigidBody
        position={
          new THREE.Vector3(
            mocoGroupConstants.DEFAULT.LETTERS.GEOMETRY.POSITIONS.O2.X,
            mocoGroupConstants.DEFAULT.LETTERS.GEOMETRY.POSITIONS.O2.Y,
            mocoGroupConstants.DEFAULT.LETTERS.GEOMETRY.POSITIONS.O2.Z,
          )
        }
        rotation={
          new THREE.Euler(
            THREE.MathUtils.degToRad(mocoGroupConstants.DEFAULT.LETTERS.GEOMETRY.ROTATION.X),
            THREE.MathUtils.degToRad(mocoGroupConstants.DEFAULT.LETTERS.GEOMETRY.ROTATION.Y),
            THREE.MathUtils.degToRad(mocoGroupConstants.DEFAULT.LETTERS.GEOMETRY.ROTATION.Z),
          )
        }
        colliders='hull'
        restitution={mocoGroupConstants.DEFAULT.LETTERS.PHYSICS.RESTITUTION}
      >
        <HeliumBalloonO />
        <Smiley />
      </RigidBody>
      <BalloonsWrapper />
    </group>
  )
}
