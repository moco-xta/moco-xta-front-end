'use client'

import React from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

import vertexShader from '@/components/r3f/shaders/default_shaders/vertexShader.glsl'
import fragmentShader from '@/components/r3f/shaders/default_shaders/fragmentShader.glsl'

const shaderMaterial = {
  uniforms: {
    u_time: { type: 'f', value: 0 },
  },
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
}

export default function HeroCanvas() {
  return (
    <Canvas>
      <mesh>
        <planeGeometry />
        <shaderMaterial
          attach='material'
          args={[shaderMaterial]}
        />
      </mesh>
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
