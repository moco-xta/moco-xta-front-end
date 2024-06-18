import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import ContactTextScene from './ContactTextScene'

export default function ContactTextCanvas() {
  return (
    <Canvas
      style={{ zIndex: '0', position: 'absolute', top: '0px', left: '0px' }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        preserveDrawingBuffer: true,
      }}
      camera={{
        fov: 55,
        near: 0.1,
        far: 200,
      }}
    >
      <OrbitControls />
      <ContactTextScene />
    </Canvas>
  )
}
