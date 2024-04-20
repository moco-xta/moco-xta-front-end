'use client'

import React, { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas, useLoader, useThree } from '@react-three/fiber'
import {
  ContactShadows,
  Environment,
  Fisheye,
  Lightformer,
  OrbitControls,
  PerspectiveCamera,
  Plane,
} from '@react-three/drei'
import { Physics } from '@react-three/rapier'

import Wrapper from './wrapper'
import MocoHelium from './moco_helium'

import { default as heroConstants } from '@/constants/canvas/heroConstants.json'
import { default as imgConstants } from '@/constants/imgConstants.json'
import PostProcessing from './post_processing'
import { OwlSticker } from '../../models/hero/OwlSticker'
import { LayerMaterial, /* Base,  */ Depth, Noise } from 'lamina'

function HeroScene() {
  const { gl } = useThree()
  gl.toneMapping = THREE.ACESFilmicToneMapping
  gl.toneMappingExposure = 4

  return (
    <>
      <Wrapper />
      <MocoHelium />
    </>
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
      <OrbitControls />
      <ambientLight intensity={1} />
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
