import React, { useRef } from 'react'
import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'

import { HeliumBalloonM } from '@/components/three/models/home/HeliumBalloonM'
import { HeliumBalloonO } from '@/components/three/models/home/HeliumBalloonO'
import { HeliumBalloonC } from '@/components/three/models/home/HeliumBalloonC'
import { Smiley } from '@/components/three/models/home/Smiley'

import { default as mocoCanvasConstants } from '@/constants/canvas/home/mocoCanvasConstants.json'

export default function MocoScene() {
  const heliumBalloonsgroupRef = useRef<THREE.Group>(null!)

  const heliumBalloonM = useRef<THREE.Mesh>(null!)
  const heliumBalloonO1 = useRef<THREE.Mesh>(null!)
  const heliumBalloonC = useRef<THREE.Mesh>(null!)
  const heliumBalloonO2 = useRef<THREE.Mesh>(null!)

  return (
    <group ref={heliumBalloonsgroupRef}>
      <RigidBody
        position={[
          mocoCanvasConstants.HELIUM_BALLOONS.BALLOONS.POSITION.M.X,
          mocoCanvasConstants.HELIUM_BALLOONS.BALLOONS.POSITION.M.Y,
          mocoCanvasConstants.HELIUM_BALLOONS.BALLOONS.POSITION.M.Z,
        ]}
        colliders='hull'
        restitution={mocoCanvasConstants.HELIUM_BALLOONS.BALLOONS.PHYSICS.RESTITUTION}
      >
        <HeliumBalloonM
          ref={heliumBalloonM}
          rotation={[
            0,
            THREE.MathUtils.degToRad(mocoCanvasConstants.HELIUM_BALLOONS.BALLOONS.ROTATION),
            0,
          ]}
        />
      </RigidBody>
      <RigidBody
        position={[
          mocoCanvasConstants.HELIUM_BALLOONS.BALLOONS.POSITION.O1.X,
          mocoCanvasConstants.HELIUM_BALLOONS.BALLOONS.POSITION.O1.Y,
          mocoCanvasConstants.HELIUM_BALLOONS.BALLOONS.POSITION.O1.Z,
        ]}
        colliders='hull'
        restitution={mocoCanvasConstants.HELIUM_BALLOONS.BALLOONS.PHYSICS.RESTITUTION}
      >
        <HeliumBalloonO
          ref={heliumBalloonO1}
          rotation={[
            0,
            THREE.MathUtils.degToRad(mocoCanvasConstants.HELIUM_BALLOONS.BALLOONS.ROTATION),
            0,
          ]}
        />
      </RigidBody>
      <RigidBody
        position={[
          mocoCanvasConstants.HELIUM_BALLOONS.BALLOONS.POSITION.C.X,
          mocoCanvasConstants.HELIUM_BALLOONS.BALLOONS.POSITION.C.Y,
          mocoCanvasConstants.HELIUM_BALLOONS.BALLOONS.POSITION.C.Z,
        ]}
        colliders='hull'
        restitution={mocoCanvasConstants.HELIUM_BALLOONS.BALLOONS.PHYSICS.RESTITUTION}
      >
        <HeliumBalloonC
          ref={heliumBalloonC}
          rotation={[
            0,
            THREE.MathUtils.degToRad(mocoCanvasConstants.HELIUM_BALLOONS.BALLOONS.ROTATION),
            0,
          ]}
        />
      </RigidBody>
      <RigidBody
        position={[
          mocoCanvasConstants.HELIUM_BALLOONS.BALLOONS.POSITION.O2.X,
          mocoCanvasConstants.HELIUM_BALLOONS.BALLOONS.POSITION.O2.Y,
          mocoCanvasConstants.HELIUM_BALLOONS.BALLOONS.POSITION.O2.Z,
        ]}
        colliders='hull'
        restitution={mocoCanvasConstants.HELIUM_BALLOONS.BALLOONS.PHYSICS.RESTITUTION}
      >
        <HeliumBalloonO
          ref={heliumBalloonO2}
          rotation={[
            0,
            THREE.MathUtils.degToRad(mocoCanvasConstants.HELIUM_BALLOONS.BALLOONS.ROTATION),
            0,
          ]}
        />
        <Smiley />
      </RigidBody>
    </group>
  )
}
