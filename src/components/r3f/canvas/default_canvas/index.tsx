'use client'

import React from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'

import vertexShader from '@/components/r3f/shaders/default_shaders/vertexShader.glsl'
import fragmentShader from '@/components/r3f/shaders/default_shaders/fragmentShader.glsl'

const shaderMaterial = {
  uniforms: {
    u_time: { type: 'f', value: 0 },
  },
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
}

export default function Defaultcanvas() {
  return (
    <Canvas onCreated={(state) => state.gl.setClearColor('pink')}>
      <mesh>
        <planeGeometry />
        <shaderMaterial
          attach='material'
          args={[shaderMaterial]}
        />
      </mesh>
    </Canvas>
  )
}
