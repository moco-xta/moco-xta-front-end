'use client'

import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'

import './index.scss'

interface BoxInterface {
  position: THREE.Vector3
}

function Box({ position }: BoxInterface) {
  const meshRef = useRef(null)
  
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // @ts-ignore
  useFrame((state, delta) => (meshRef.current.rotation.x += delta))

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default function Hero() {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box position={new THREE.Vector3(-1.2, 0, 0)} />
      <Box position={new THREE.Vector3(1.2, 0, 0)} />
    </Canvas>
  )
}
