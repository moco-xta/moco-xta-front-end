import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'
import { getUvMousePositionOnWindow } from '@/helpers/cssHelpers'

function ContactPictureScene() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const ref = useRef(null!)

  const colorMap = useLoader(THREE.TextureLoader, '/img/test/portrait_test.jpg')

  const [hovered, hover] = useState(false)

  useFrame(() => {
    if (ref.current)
      // @ts-ignore
      ref.current.distort = THREE.MathUtils.lerp(
        // @ts-ignore
        ref.current.distort,
        hovered ? 0.4 : 0,
        hovered ? 0.05 : 0.01,
      )
  })

  function handleMouseMove(e: MouseEvent) {
    const { x, y } = getUvMousePositionOnWindow(e)
    if (meshRef.current) {
      meshRef.current.position.x = 6 * x
      meshRef.current.position.y = 4 * -y
      if (x < 0) {
        // @ts-ignore
        meshRef.current.material.opacity = 1
      } else if (x < 0.2) {
        // @ts-ignore
        meshRef.current.material.opacity = 1 - x * 5
      } else {
        // @ts-ignore
        meshRef.current.material.opacity = 0
      }
    }
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <directionalLight
        position={[5, 5, 5]}
        castShadow
      />
      <directionalLight
        position={[-5, 5, 5]}
        castShadow
      />
      <mesh
        ref={meshRef}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
        position={[-1.7, 0, 0]}
        scale={[3, 4, 1]}
      >
        <planeGeometry args={[1, 1, 32, 32]} />
        <MeshDistortMaterial
          ref={ref}
          speed={5}
          map={colorMap}
          transparent
        >
          <meshPhysicalMaterial attach='material' /* map={colorMap} */ />
        </MeshDistortMaterial>
      </mesh>
    </>
  )
}

export default function ContactPictureCanvas() {
  return (
    <Canvas
      dpr={1}
      shadows
      legacy
      gl={{
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true,
      }}
    >
      <ContactPictureScene />
    </Canvas>
  )
}
