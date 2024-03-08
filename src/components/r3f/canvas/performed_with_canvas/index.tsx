'use client'

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

import { iconsDataInterface } from '@/interfaces/components/r3f/iconsDataInterface'

import LogoSass from '../../models/logos/LogoSass'

function PerformedWithScene() {
  const logoSassRef = useRef<THREE.Mesh>(new THREE.Mesh())

  const refs = [
    logoSassRef,
  ]

  const logosData: iconsDataInterface = {
    total_length: 0,
    widths: [],
  }

  useEffect(() => {
    refs.forEach((ref) => {
      // @ts-ignore
      logosData.widths.push(ref.current.width)
    })
    let sum = 0
    refs.forEach((ref, index) => {
      if (index === 0) {
        ref.current.position.x = sum
        sum += logosData.widths[index] / 2
      } else {
        ref.current.position.x = sum + logosData.widths[index] / 2 + index * 0.5
        sum += logosData.widths[index]
      }
    })
    logosData.widths.forEach((width) => {
      logosData.total_length += width + 0.5
    })
  }, [])

  useFrame((state, delta, xrFrame) => {
    refs.forEach((ref) => {
      ref.current.position.x += delta
      if (ref.current.position.x > logosData.total_length / 2)
        ref.current.position.x -= logosData.total_length
    })
  })

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 40]}
        fov={5}
      />
      <directionalLight
        position={[5, 5, 5]}
        castShadow
      />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
      />
      <LogoSass ref={logoSassRef} />
    </>
  )
}

export default function PerformedWithCanvas() {
  return (
    <Canvas
      shadows
      legacy
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      }}
    >
      <PerformedWithScene />
    </Canvas>
  )
}
