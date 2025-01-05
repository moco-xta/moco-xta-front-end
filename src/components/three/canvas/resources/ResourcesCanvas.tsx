import React, { MutableRefObject, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RapierCollider,
  RapierRigidBody,
  RigidBody,
} from '@react-three/rapier'

import Lights from './lights/Lights'
import { ResourcesLogo } from './ResourcesLogo'
import PostProcessing from './PostProcessing'
import ResourcesText from './ResourcesText'
import useMouseMove from '@/hooks/useMouseMove'

import { default as logosConstants } from '@/constants/resources/three/logosConstants.json'

type TPointer = {
  pointerRef: MutableRefObject<THREE.Vector3>
}

function Pointer({ pointerRef }: TPointer) {
  const ref = useRef<RapierRigidBody>(null!)

  const { uvX, uvY } = useMouseMove()

  useFrame(({ viewport }) => {
    if (ref.current) {
      pointerRef.current.lerp(
        { x: (uvX * viewport.width) / 2, y: (uvY * viewport.height) / 2, z: 0 },
        0.2,
      )
      ref.current.setNextKinematicTranslation(pointerRef.current)
    }
  })
  return (
    <RigidBody
      type='kinematicPosition'
      colliders={'ball'}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  )
}

function Logos() {
  return (
    <>
      {Array(logosConstants.modelsMultiplier)
        .fill(logosConstants.models)
        .flat()
        .map((componentName, index) => {
          return (
            <ResourcesLogo
              key={index}
              pathToModel={logosConstants.pathToModel}
              componentName={componentName}
            />
          )
        })}
      {/* {logosData.map(({ name, component }, i) => {
        const rigidBodyRef = useRef<RapierRigidBody>(null!)
        const cuboidColliderRef = useRef<RapierCollider>(null!)
        const logoGroupRef = useRef<THREE.Group>(null!)
        const vec = new THREE.Vector3()
        const scale = 1
        const r = THREE.MathUtils.randFloatSpread

        useFrame((state, delta) => {
          delta = Math.min(0.1, delta)
          if (rigidBodyRef.current)
            rigidBodyRef.current.applyImpulse(
              vec
                .copy(rigidBodyRef.current.translation())
                .normalize()
                .multiply({
                  x: -50 * delta * scale,
                  y: -150 * delta * scale,
                  z: -50 * delta * scale,
                }),
              true,
            )
        })

        const Logo = component
        return (
          <RigidBody
            ref={rigidBodyRef}
            linearDamping={0.75}
            angularDamping={0.15}
            friction={0.2}
            position={[r(20), r(20) - 25, r(20) - 10]}
            colliders={'cuboid'}
          >
            <Logo
              ref={logoGroupRef}
              key={i}
              // {...props}
            />
          </RigidBody>
        )
      })} */}
    </>
  )
}

export default function ResourcesCanvas() {
  const vecRef = useRef<THREE.Vector3>(new THREE.Vector3())

  return (
    <Canvas
      shadows
      gl={{ alpha: true, stencil: false, antialias: false }}
      camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
      // onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
    >
      <Lights />
      <Physics
        // debug
        gravity={[0, 0, 0]}
      >
        <Pointer pointerRef={vecRef} />
        <Logos />
        <ResourcesText />
      </Physics>
      {/* <Environment files={imgConstants.HDRS.HERO_ENVIRONMENT} /> */}

      <fogExp2
        attach='fog'
        color='black'
        density={0.1}
      />
      <PostProcessing />
    </Canvas>
  )
}
