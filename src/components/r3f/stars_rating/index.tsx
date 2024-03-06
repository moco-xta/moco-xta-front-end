import React from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

import { StarsRatingInterface } from '@/interfaces/components/r3f/starsRatingInterface'

import { RatingStar } from '@/components/r3f/models/icons/RatingStar'

export default function StarsRating({ rating }: StarsRatingInterface) {
  return (
    <Canvas
      dpr={1}
      shadows
      legacy
      gl={{
        antialias: true,
        alpha: true,
        /* powerPreference: 'high-performance', */
        preserveDrawingBuffer: true,
      }}
    >
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 20]}
        fov={10}
      />
      <pointLight
        position={[5, 5, 5]}
        intensity={20}
        castShadow
      />
      <pointLight
        position={[-5, 5, 5]}
        intensity={20}
        castShadow
      />
      <OrbitControls />
      <group position={new THREE.Vector3(-5, 0, 0)}>
        {[...Array(5)].map((_, index) => (
          <RatingStar key={`rating_star_${index}`} position={new THREE.Vector3(index * 2.5, 0, 0)} color={new THREE.Color(0xffff00)} />
        ))}
      </group>
    </Canvas>
  )
}
