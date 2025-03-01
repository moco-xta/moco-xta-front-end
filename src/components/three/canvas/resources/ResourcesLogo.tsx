import React, { Suspense, lazy, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { BallCollider, RapierRigidBody, RigidBody } from '@react-three/rapier'

import type { TResourcesLogo } from '@/types/components/three/types'

// Dynamic component loader
export const ResourcesLogo = ({ pathToModel, componentName }: TResourcesLogo) => {
  const Logo = lazy(() => import(`@/components/three/models/${pathToModel}${componentName}`))

  const rigidBodyRef = useRef<RapierRigidBody>(null!)
  const logoRef = useRef<THREE.Group>(null!)
  const vec = new THREE.Vector3()
  const scale = 1
  const r = THREE.MathUtils.randFloatSpread

  useFrame((_, delta) => {
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

  return (
    <Suspense fallback={null}>
      <RigidBody
        ref={rigidBodyRef}
        linearDamping={0.75}
        angularDamping={0.15}
        friction={0.2}
        position={[r(20), r(20) - 25, r(20) - 10]}
        // colliders='hull'
      >
        <BallCollider
          args={[1]}
          scale={[1, 1, 0.5]}
        />
        <Logo
          ref={logoRef}
          /* roughness={0.25}
          metalness={0.5} */
        />
      </RigidBody>
    </Suspense>
  )
}
