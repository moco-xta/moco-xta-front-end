import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import CylenderWorkShowcaseScene from './CylenderWorkShowcaseScene'
import { Bloom, EffectComposer } from '@react-three/postprocessing'

export default function CylenderWorkShowcaseCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 30 }}
      shadows
    >
      <ambientLight />
      <directionalLight
        position={[10, 10, 10]}
        castShadow
      />
      <OrbitControls />
      <CylenderWorkShowcaseScene />

      <EffectComposer multisampling={2}>
        <Bloom
          mipmapBlur
          intensity={12}
          luminanceThreshold={0}
          luminanceSmoothing={0}
        />
      </EffectComposer>
    </Canvas>
  )
}
