import React from 'react'
import { Sky } from '@react-three/drei'

export default function Lightning() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <hemisphereLight intensity={0.15} />
      <directionalLight
        intensity={4}
        position={[-10, 20, 10]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={1}
        shadow-camera-far={150}
        shadow-camera-left={-150}
        shadow-camera-right={150}
        shadow-camera-top={150}
        shadow-camera-bottom={-150}
      />
      <Sky
        turbidity={0.3}
        rayleigh={0}
        mieCoefficient={0.005}
        mieDirectionalG={0.7}
        azimuth={180}
      />
    </>
  )
}
