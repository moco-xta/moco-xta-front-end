import React, { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Text3D,
} from '@react-three/drei'

function IntroductionScene() {

  return (
    <>
      <Text3D
        letterSpacing={-0.06}
        size={0.5}
        font='/fonts/json/Inter_Bold.json'
        scale={[5, 5, 5]}
        position={[-10, 0, 0]}
        curveSegments={36}
        /* bevelEnabled={true}
        bevelThickness={0.5}
        bevelSize={0.3}
        bevelOffset={0}
        bevelSegments={10} */
      >
        Introduction
        <meshStandardMaterial />
      </Text3D>
    </>
  )
}

export default function IntroductionCanvas() {
  return (
    <Canvas
      dpr={1}
      shadows
      legacy
      gl={{
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true,
      }}
    >
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 10]}
        fov={65}
      />
      <OrbitControls />
      <Suspense>
        <IntroductionScene />
      </Suspense>
    </Canvas>
  )
}
