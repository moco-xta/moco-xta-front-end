import React, { useRef } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'

import Lights from './lights/Lights'
import Fog from './Fog'
import Pointer from './Pointer'
import { ResourcesLogos } from './ResourcesLogos'
import PostProcessing from './PostProcessing'

export default function ResourcesCanvas() {
  const pointerRef = useRef<THREE.Vector3>(new THREE.Vector3())

  return (
    <Canvas
      shadows
      gl={{ alpha: true, stencil: false, antialias: false }}
      camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
      // onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
    >
      <Lights />
      <Fog />
      <Physics
        // debug
        gravity={[0, 0, 0]}
      >
        <Pointer pointerRef={pointerRef} />
        <ResourcesLogos />
      </Physics>
      <PostProcessing />
    </Canvas>
  )
}
