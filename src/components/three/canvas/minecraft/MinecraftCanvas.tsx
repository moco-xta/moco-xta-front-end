import React, { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Cylinder, OrbitControls, Sky } from '@react-three/drei'

import Camera from './Camera'
import MinecraftScene from './MinecraftScene'

import { canvasDefaultValues } from '@/data/minecraft/three/canvasData'
import PostProcessing from './PostProcessing'
import { getRandomInt } from '@/helpers/mathHelpers'

export default function MinecraftCanvas() {
  return (
    <Canvas
      {...canvasDefaultValues}
      // onCreated={(state) => (state.gl.toneMappingExposure = 0.5)}
      onCreated={({ scene }) => {
        // Add fog to the scene for a moody atmosphere
        scene.fog = new THREE.Fog(0x334257, 5, 30) // Dark blue-gray fog
      }}
    >
      <Camera />
      {/* Ambient Light */}
      <ambientLight
        intensity={0.4}
        color='#FFDAB9'
      />{' '}
      {/* Soft peach tone */}
      {/* Directional Light (Sun) */}
      <directionalLight
        intensity={0.8}
        color='#FFB347' // Soft orange light
        position={[10, 20, 10]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={1}
        shadow-camera-far={50}
        shadow-camera-left={-15}
        shadow-camera-right={15}
        shadow-camera-top={15}
        shadow-camera-bottom={-15}
      />
      {/* Hemisphere Light */}
      <hemisphereLight
        color='#FFD1DC'
        groundColor='#D0D0C8'
        intensity={0.5}
      />
      <pointLight
        position={new THREE.Vector3(-15, 2, 0)}
        intensity={100}
        color={'yellow'}
        castShadow
      />
      <OrbitControls target={new THREE.Vector3(-5, 2, 0)} />
      <group position={new THREE.Vector3(-5, 5, 25)}>
        {[...Array(100)].map((i) => (
          <Cylinder
            args={[0.35, 0.35, 24, 82]}
            position={
              new THREE.Vector3(
                -getRandomInt({ min: 0, max: 30 }),
                0,
                -getRandomInt({ min: 0, max: 50 }),
              )
            }
            receiveShadow
            castShadow
          >
            <meshStandardMaterial
              color={'#30221D'}
              roughness={1}
            />
          </Cylinder>
        ))}
      </group>
      <Suspense fallback={null}>
        <MinecraftScene />
      </Suspense>
      <Sky
        turbidity={0.3}
        rayleigh={0}
        mieCoefficient={0.005}
        mieDirectionalG={0.7}
        azimuth={180}
      />
      {/* <fogExp2
        attach='fog'
        color={0x15232E}
        density={0.15}
      /> */}
      <PostProcessing />
    </Canvas>
  )
}
