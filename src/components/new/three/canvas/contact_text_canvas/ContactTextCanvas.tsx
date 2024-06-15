import React from 'react'
import { Canvas } from '@react-three/fiber'

import ContactTextScene from './ContactTextScene'
import { OrbitControls } from '@react-three/drei'
import { Lights } from './Lights'

export default function ContactTextCanvas() {
  return (
    <Canvas
      style={{ position: 'absolute' }}
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
      <Lights />
      <ContactTextScene />
    </Canvas>
  )
}
