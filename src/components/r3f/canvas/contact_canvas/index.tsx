import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import {
  GradientTexture,
  MeshDistortMaterial,
  useCursor,
} from '@react-three/drei'
import { getUvMousePositionOnWindow } from '@/helpers/cssHelpers'

function ContactScene() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const ref = useRef(null!)

  const colorMap = useLoader(THREE.TextureLoader, '/img/jpg/portrait_test.jpg')

  const [hovered, hover] = useState(false)

  useFrame(() => {
    // @ts-ignore
    if (ref.current)
      ref.current.distort = THREE.MathUtils.lerp(
        ref.current.distort,
        hovered ? 0.4 : 0,
        hovered ? 0.05 : 0.01,
      )
  })

  function handleMouseMove(e: MouseEvent) {
    /* console.log('e', e) */
    const { x, y } = getUvMousePositionOnWindow(e)
    console.log(x, y)
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
    /* console.log(e.clientX, e.clientY) */
    /* console.log(`movement: ${e.movementX}, ${e.movementY}`) */
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

export default function ContactCanvas() {
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
      <ContactScene />
    </Canvas>
  )
}
