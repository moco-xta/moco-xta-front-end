import React, { useRef } from 'react'
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
import { logosData } from '@/data/resources/logosData'
import PostProcessing from './PostProcessing'
import ResourcesText from './ResourcesText'

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef<RapierRigidBody>(null!)
  useFrame(({ mouse, viewport }) => {
    vec.lerp({ x: (mouse.x * viewport.width) / 2, y: (mouse.y * viewport.height) / 2, z: 0 }, 0.2)
    ref.current.setNextKinematicTranslation(vec)
  })
  return (
    <RigidBody
      position={[100, 100, 100]}
      type='kinematicPosition'
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  )
}

function Logos() {
  return (
    <>
      {logosData.map(({ name, component }, i) => {
        const rigidBodyRef = useRef<RapierRigidBody>(null!)
        const cuboidColliderRef = useRef<RapierCollider>(null!)
        const logoGroupRef = useRef<THREE.Group>(null!)
        const vec = new THREE.Vector3()
        const scale = 1
        const r = THREE.MathUtils.randFloatSpread

        useFrame((state, delta) => {
          delta = Math.min(0.1, delta)
          // @ts-ignore
          rigidBodyRef.current.applyImpulse(
            vec
              .copy(rigidBodyRef.current.translation())
              .normalize()
              .multiply({
                x: -50 * delta * scale,
                y: -150 * delta * scale,
                z: -50 * delta * scale,
              }),
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
            {/* <CuboidCollider
              ref={cuboidColliderRef}
              args={[1, 1, 0.4]} // args={getCuboidColliderArgs(logoGroupRef)}
            /> */}
            <Logo
              ref={logoGroupRef}
              key={i}
              // {...props}
            />
          </RigidBody>
        )
      })}
    </>
  )
}

export default function ResourcesCanvas() {
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
        <Pointer />
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
