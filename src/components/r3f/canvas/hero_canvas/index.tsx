'use client'

import React, { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas, useThree } from '@react-three/fiber'
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei'
import { Physics } from '@react-three/rapier'

import Wrapper from './wrapper'
import MocoHelium from './moco_helium'
import PostProcessing from './post_processing'

import { default as heroConstants } from '@/constants/canvas/heroConstants.json'
import { default as imgConstants } from '@/constants/imgConstants.json'

function HeroScene() {
  const { gl } = useThree()
  gl.toneMapping = THREE.ACESFilmicToneMapping
  gl.toneMappingExposure = 4

  return (
    <group
      position={[0.55, 0, 0]}
    >
      <Wrapper />
      <MocoHelium />
    </group>
  )
}

function Striplight(props: any) {
  return (
    <mesh {...props}>
      <boxGeometry />
      <meshBasicMaterial color='white' />
    </mesh>
  )
}

export default function HeroCanvas() {
  return (
    <Canvas
      dpr={heroConstants.CANVAS.DPR}
      shadows
      legacy={heroConstants.CANVAS.LEGACY}
      linear
      flat
      gl={{
        antialias: heroConstants.CANVAS.GL.ANTIALIAS,
        alpha: heroConstants.CANVAS.GL.ALPHA,
        powerPreference: heroConstants.CANVAS.GL.POWER_PREFERENCE,
      }}
    >
      <PerspectiveCamera
        makeDefault
        position={[
          heroConstants.PERSPECTIVE_CAMERA.POSITION.X,
          heroConstants.PERSPECTIVE_CAMERA.POSITION.Y,
          heroConstants.PERSPECTIVE_CAMERA.POSITION.Z,
        ]}
        fov={heroConstants.PERSPECTIVE_CAMERA.FOV}
      />
      {/* <OrbitControls /> */}
      <ambientLight />
      <Suspense>
        <Physics
          /* debug */ gravity={[
            heroConstants.PHYSICS.GRAVITY.X,
            heroConstants.PHYSICS.GRAVITY.Y,
            heroConstants.PHYSICS.GRAVITY.Z,
          ]}
        >
          <HeroScene />
          <Environment
            files={imgConstants.HDRS.HERO_ENVIRONMENT}
          />
          <PostProcessing />
        </Physics>
      </Suspense>
    </Canvas>
  )
}
