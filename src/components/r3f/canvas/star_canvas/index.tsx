import React, { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas, useThree } from '@react-three/fiber'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'

import { Star } from '../../models/reviews/Star'

function StarScene() {
  const { gl } = useThree()
  gl.toneMapping = THREE.ACESFilmicToneMapping
  gl.toneMappingExposure = 6

  return (
    <Star />
  )
}

export default function StarCanvas() {
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
        position={[-0.1, 0, 2.6]}
        fov={30}
        near={0.1}
        far={55}
      />
      <OrbitControls />
      <pointLight
        position={[2, 2, 2]}
        intensity={100}
        castShadow
      />
      <pointLight
        position={[-2, 2, 2]}
        intensity={100}
        castShadow
      />
      <pointLight
        position={[-0, -1.5, 2]}
        intensity={100}
        castShadow
      />
      <ambientLight />
      <Suspense>
        <Environment
          files='/img/hdr/gradient-fluid-liquid-wallpaper-1_1562-669.hdr'
          encoding={THREE.LinearEncoding}
        />
        <StarScene />
      </Suspense>
    </Canvas>
  )
}
