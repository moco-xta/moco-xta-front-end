'use client'

import React from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

import { WebPage } from '../../models/hero/WebPage'

export default function HeroCanvas() {
  return (
    <Canvas>
      <pointLight position={new THREE.Vector3(4, 4, 4)} intensity={10} />
      <pointLight position={new THREE.Vector3(-4, 4, 4)} intensity={10} />
      <pointLight position={new THREE.Vector3(0, 0, 4)} intensity={10} />
      <WebPage />
      <Stars
        radius={100}
        depth={10}
        count={1000}
        factor={2}
        saturation={0}
        fade
        speed={1}
      />
    </Canvas>
  )
}
