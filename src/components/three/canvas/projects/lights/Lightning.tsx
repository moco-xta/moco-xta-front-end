import React from 'react'
import { Sky } from '@react-three/drei'

export default function Lightning() {
  return (
    <>
      <ambientLight
        intensity={0.2}
        color='#FFDAB9'
      />
      <hemisphereLight
        color='#FFD1DC'
        groundColor='#D0D0C8'
        intensity={0.15}
      />
      <directionalLight
        intensity={0.4}
        color='#FFB347'
        position={[10, 20, 10]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={1}
        shadow-camera-far={50}
        shadow-camera-left={-15}
        shadow-camera-right={15}
        shadow-camera-top={15}
        shadow-camera-bottom={-15}
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
