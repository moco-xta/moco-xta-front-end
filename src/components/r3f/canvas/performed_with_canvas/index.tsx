'use client'

import React, {
  Suspense,
  createRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

import { IconsDataInterface } from '@/interfaces/dataInterfaces'
import { performedWithData } from '@/data/performedWithData'
import { ForwardRefGltfGroupInterface } from '@/interfaces/r3fInterfaces'

export type LogoRefType = THREE.Mesh & {
  width: number
}

function PerformedWithScene() {
  const { gl } = useThree()
  gl.toneMapping = THREE.ACESFilmicToneMapping
  gl.toneMappingExposure = 6

  const [totalLengthState, setTotalLengthState] = useState(0)

  const logosGroupRef = useRef<THREE.Group>(null!)
  const logosRefs = useMemo(
    () =>
      performedWithData.map(() => ({
        ref: createRef<ForwardRefGltfGroupInterface>(),
      })),
    [],
  )

  useEffect(() => {
    let sum = 0
    let totalLength = 0
    performedWithData.forEach((logo, index) => {
      const { ref } = logosRefs[index]
      if (ref.current) {
        const width = ref.current.width * logo.logo.scale.x
        if (index === 0) {
          ref.current.position.x = sum
          sum += width / 2
        } else {
          ref.current.position.x = sum + width / 2 + index * 0.8
          sum += width
        }
        totalLength += width + 0.8
      }
    })
    setTotalLengthState(totalLength)
  }, [logosRefs])

  useFrame((state, delta, xrFrame) => {
    logosRefs.forEach(({ ref }) => {
      if (ref.current) {
        ref.current.position.x += delta
        if (ref.current.position.x > totalLengthState / 2)
          ref.current.position.x -= totalLengthState
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
