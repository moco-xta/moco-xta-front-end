import React from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

import MontmartreScene from './MontmartreScene'

import { canvasDefaultValues } from '@/data/montmartre/three/canvasData'

export default function MontmartreCanvas() {
  return (
    <Canvas
      {...canvasDefaultValues}
      /* shadows={{
        type: 'PCFSoft', 
        size: 4096,
        frames: Infinity
      }} */
    >
      <PerspectiveCamera
        makeDefault
        position={new THREE.Vector3(-65, 10, 0)}
        fov={45}
        near={0.1}
        far={1000}
      />
      <directionalLight
        position={[5, 10, 5]} // Moon position in sky
        intensity={2} // Full moon brightness
        color='#D0D0D0' // Cool moonlit color
        castShadow
        shadow-mapSize={[2048, 2048]} // Soft shadows
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-camera-near={0.5}
        shadow-camera-far={20}
        shadow-bias={-0.0001} // Fix shadow artifacts
      />
      <ambientLight intensity={5} />
      {/* <OrbitControls /> */}
      <MontmartreScene />
    </Canvas>
  )
}
