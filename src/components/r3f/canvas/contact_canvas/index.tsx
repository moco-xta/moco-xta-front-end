import React, { Suspense, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useThree } from '@react-three/fiber'
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei'
import { Physics, RigidBody } from '@react-three/rapier'

import { HeartHeliumBalloon } from '../../models/contact/HeartHeliumBalloon'

function ContactScene() {
  const { gl } = useThree()
  gl.toneMapping = THREE.ACESFilmicToneMapping
  gl.toneMappingExposure = 6

  const heartRef = useRef(null!)

  return (
    <RigidBody
      ref={heartRef}
      colliders='hull'
    >
      <HeartHeliumBalloon />
    </RigidBody>
  )
}

export default function ContactCanvas() {
  return (
    <Canvas
      dpr={1}
      shadows
      legacy={false}
      linear
      flat
      gl={{
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true,
      }}
    >
      <PerspectiveCamera
        makeDefault
        position={[-0.1, 0, 6]}
        fov={30}
        near={0.1}
        far={55}
      />
      <OrbitControls />
      <pointLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
      />
      <pointLight
        position={[-5, 5, 5]}
        intensity={1}
        castShadow
      />
      <pointLight
        position={[-0, -3, 5]}
        intensity={1}
        castShadow
      />
      <Suspense>
        <Physics /* debug */ gravity={[0, 0.05, 0]}>
          <Environment
            files='/img/hdr/peppermint_powerplant_2_1k.hdr'
            encoding={THREE.LinearEncoding}
          />
          <ContactScene />
        </Physics>
      </Suspense>
    </Canvas>
  )
}
