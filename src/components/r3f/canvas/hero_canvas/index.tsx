'use client'

import React from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Stars } from '@react-three/drei'

import { WebPage } from '../../models/hero/WebPage'
import { degreesToRadians } from '@/helpers/r3fHelpers'

export default function HeroCanvas() {
  return (
    <Canvas
      dpr={1}
      shadows
      legacy
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
        preserveDrawingBuffer: true,
      }}
    >
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 15]}
        fov={30}
        near={0.1}
        far={70}
      />
      <group
        position={new THREE.Vector3(3, 0, 0)}
        rotation={new THREE.Euler(0, degreesToRadians(-33), 0)}
      >
        <pointLight
          position={new THREE.Vector3(4, 4, 4)}
          intensity={10}
        />
        <pointLight
          position={new THREE.Vector3(-4, 4, 4)}
          intensity={10}
        />
        <pointLight
          position={new THREE.Vector3(0, 0, 4)}
          intensity={10}
        />
        <WebPage />
      </group>
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
