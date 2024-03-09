'use client'

import React, { Suspense, createRef, useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, SoftShadows } from '@react-three/drei'

import { iconsDataInterface } from '@/interfaces/components/r3f/iconsDataInterface'

import { performedWithData } from '@/data/performedWithData'

export type LogoRefType = THREE.Mesh & {
  width: number
}

function PerformedWithScene() {
  const logosGroupRef = useRef<THREE.Group>(null!)
  const logosCreateRefs = useMemo(
    () =>
      performedWithData.map(() => ({
        ref: createRef<LogoRefType>(),
      })),
    [],
  )

  const logosData: iconsDataInterface = {
    total_length: 0,
    widths: [],
  }

  useEffect(() => {
    logosCreateRefs.forEach(({ ref }, index) => {
      if (ref.current) {
        logosData.widths.push(
          ref.current.width * performedWithData[index].scale.x,
        )
      }
    })
    let sum = 0
    logosCreateRefs.forEach(({ ref }, index) => {
      if (ref.current) {
        if (index === 0) {
          ref.current.position.x = sum
          sum += logosData.widths[index] / 2
        } else {
          ref.current.position.x =
            sum + logosData.widths[index] / 2 + index * 0.5
          sum += logosData.widths[index]
        }
      }
    })
    logosData.widths.forEach((width) => {
      logosData.total_length += width + 0.5
    })
  }, [])

  useFrame((state, delta, xrFrame) => {
    logosCreateRefs.forEach(({ ref }) => {
      if (ref.current) {
        ref.current.position.x += delta
        if (ref.current.position.x > logosData.total_length / 2)
          ref.current.position.x -= logosData.total_length
      }
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
        position={[10, 10, 5]}
        intensity={2}
        castShadow
        /* shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-mapSize-height={2048}
        shadow-mapSize-width={2048}
        shadow-radius={10}
        shadow-bias={-0.01} */
      />
      <directionalLight
        position={[-10, 10, 5]}
        intensity={2}
        castShadow
        /* shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-mapSize-height={2048}
        shadow-mapSize-width={2048}
        shadow-radius={10}
        shadow-bias={-0.01} */
      />
      <directionalLight
        position={[0, 10, -5]}
        intensity={2}
        castShadow
        /* shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-mapSize-height={2048}
        shadow-mapSize-width={2048}
        shadow-radius={10}
        shadow-bias={-0.01} */
      />
      <group ref={logosGroupRef}>
        {logosCreateRefs.map(({ ref }, index) => {
          const Logo = performedWithData[index].logo
          return (
            <Logo
              key={`performed_with_logo_${index}`}
              ref={ref}
              scale={performedWithData[index].scale}
            />
          )
        })}
      </group>
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
      <SoftShadows
        size={20}
        samples={10}
      />
      <Suspense fallback={null}>
        <PerformedWithScene />
      </Suspense>
    </Canvas>
  )
}
