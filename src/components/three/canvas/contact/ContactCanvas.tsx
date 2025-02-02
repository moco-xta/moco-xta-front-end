import React, { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'

import Lightning from './lightning/Lightning'
import Camera from './Camera'
import ContactScene from './ContactScene'
import PostProcessing from './PostProcessing'

import { canvasDefaultValues } from '@/data/contact/three/canvasData'

export default function ContactCanvas() {
  return (
    <Canvas
      {...canvasDefaultValues}
      onCreated={({ scene }) => {
        scene.fog = new THREE.Fog(0x334257, 9, 50)
      }}
    >
      <Lightning />
      <Camera />
      <Suspense fallback={null}>
        <ContactScene />
      </Suspense>
      <PostProcessing />
    </Canvas>
  )
}
