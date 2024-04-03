'use client'

import React, {
  Ref,
  Suspense,
  createRef,
  useEffect,
  useMemo,
  useRef,
} from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {
  OrbitControls,
  PerspectiveCamera,
  SoftShadows,
} from '@react-three/drei'

import { IconsDataInterface } from '@/interfaces/dataInterfaces'
import { skillsData } from '@/data/skillsData'
import { performedWithData } from '@/data/performedWithData'
import { ForwardRefGltfGroupInterface } from '@/interfaces/r3fInterfaces'

export type LogoRefType = THREE.Mesh & {
  width: number
}

function PerformedWithScene() {
  const logosGroupRef = useRef<THREE.Group>(null!)
  const logosRefs = useMemo(
    () =>
      performedWithData.map(() => ({
        ref: createRef<ForwardRefGltfGroupInterface>(),
      })),
    [],
  )

  const { gl } = useThree()
  gl.toneMapping = THREE.ACESFilmicToneMapping
  gl.toneMappingExposure = 6

  const logosData: IconsDataInterface = {
    totalLength: 0,
    widths: [],
  }

  useEffect(() => {
    logosRefs.forEach(({ ref }, index) => {
      if (ref.current) {
        logosData.widths.push(
          ref.current.width * performedWithData[index].logo.scale.x,
        )
      }
    })
    let sum = 0
    logosRefs.forEach(({ ref }, index) => {
      if (ref.current) {
        if (index === 0) {
          ref.current.position.x = sum
          sum += logosData.widths[index] / 2
        } else {
          ref.current.position.x =
            sum + logosData.widths[index] / 2 + index * 0.8
          sum += logosData.widths[index]
        }
      }
    })
    logosData.widths.forEach((width) => {
      logosData.totalLength += width + 0.8
    })
  }, [])

  useFrame((state, delta, xrFrame) => {
    logosRefs.forEach(({ ref }) => {
      if (ref.current) {
        ref.current.position.x += delta
        if (ref.current.position.x > logosData.totalLength / 2)
          ref.current.position.x -= logosData.totalLength
      }
    })
  })

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 90]}
        fov={3}
      />
      <directionalLight
        position={[10, 10, 5]}
        intensity={2}
        castShadow
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-mapSize-height={2048}
        shadow-mapSize-width={2048}
        shadow-radius={10}
        shadow-bias={-0.01}
      />
      <directionalLight
        position={[-10, 10, 5]}
        intensity={2}
        castShadow
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-mapSize-height={2048}
        shadow-mapSize-width={2048}
        shadow-radius={10}
        shadow-bias={-0.01}
      />
      <directionalLight
        position={[0, 10, -5]}
        intensity={2}
        castShadow
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-mapSize-height={2048}
        shadow-mapSize-width={2048}
        shadow-radius={10}
        shadow-bias={-0.01}
      />
      <group ref={logosGroupRef}>
        {logosRefs.map(({ ref }, index) => {
          const Logo = performedWithData[index].logo.component
          return (
            <Logo
              key={`performed_with_logo_${index}`}
              ref={ref}
              rotation={performedWithData[index].logo.rotation}
              scale={performedWithData[index].logo.scale}
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
      dpr={1}
      shadows
      legacy={false}
      linear
      flat
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      }}
    >
      <OrbitControls />
      <Suspense fallback={null}>
        <PerformedWithScene />
      </Suspense>
    </Canvas>
  )
}
