import React, { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Lightning from './lighting/Lightning'
import Camera from './Camera'
import ContactScene from './ContactScene'
// import PostProcessing from './PostProcessing'

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
      <OrbitControls
        minDistance={4}
        maxDistance={10}
        minAzimuthAngle={-Math.PI / 3}
        maxAzimuthAngle={Math.PI / 3}
      />
      <Suspense fallback={null}>
        <ContactScene />
      </Suspense>
      {/* <PostProcessing /> */}
    </Canvas>
  )
}
