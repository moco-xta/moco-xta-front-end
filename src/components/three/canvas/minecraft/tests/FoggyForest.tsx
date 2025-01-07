import React from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei'

function FoggyForest() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 5, 10], fov: 75 }}
      onCreated={({ scene }) => {
        // Add fog to the scene
        scene.fog = new THREE.FogExp2(0x1a1a1a, 0.05) // Dark gray fog with exponential density
        scene.background = new THREE.Color(0x1a1a1a) // Match background to fog
      }}
    >
      {/* Ambient Light */}
      <ambientLight
        intensity={0.3}
        color='#4A4A6A'
      />{' '}
      {/* Cold, dim moonlight */}
      {/* Directional Light (Moonlight effect) */}
      <directionalLight
        intensity={0.5}
        color='#7A7A9A' // Soft bluish moonlight
        position={[10, 20, -10]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={1}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      {/* Spotlights for mysterious glowing effects */}
      <spotLight
        intensity={0.3}
        position={[0, 10, 0]}
        angle={0.5}
        penumbra={1}
        color='#9A9AC5' // Faint bluish light
        castShadow
      />
      {/* Ground */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color='#2A2A2A' />
      </mesh>
      <OrbitControls />
      {/* Example Trees */}
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh
          key={i}
          position={[Math.random() * 50 - 25, 0, Math.random() * 50 - 25]}
          castShadow
        >
          <cylinderGeometry args={[0.5, 1, 10, 16]} />
          <meshStandardMaterial color='#4A4A4A' />
        </mesh>
      ))}
      {/* Example Eerie Orbs */}
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh
          key={i}
          position={[Math.random() * 50 - 25, 2, Math.random() * 50 - 25]}
        >
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial
            emissive='#B0E0E6'
            emissiveIntensity={2}
          />
        </mesh>
      ))}
    </Canvas>
  )
}

export default FoggyForest
