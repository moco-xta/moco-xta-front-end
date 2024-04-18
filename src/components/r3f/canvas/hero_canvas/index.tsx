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
import { LayerMaterial, /* Base,  */Depth, Noise } from 'lamina'

function HeroScene() {
  const { gl } = useThree()
  gl.toneMapping = THREE.ACESFilmicToneMapping
  gl.toneMappingExposure = 4

  return (
    <>
      <Wrapper />
      <MocoHelium />
      {/* <Plane>
        <meshStandardMaterial
          attach='material'
          color={'violet'}
          metalness={0.1}
          roughness={0.3}
          
          normalMap={normalMap}
        />
      </Plane> */}
      {/* <OwlSticker /> */}
    </>
  )
}

function Striplight(props: any) {
  return (
    <mesh {...props}>
      <boxGeometry />
      <meshBasicMaterial color="white" />
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
      {/* <Environment background resolution={64}>
        <Striplight position={[10, 2, 0]} scale={[1, 3, 10]} />
        <Striplight position={[-10, 2, 0]} scale={[1, 3, 10]} />
        <mesh scale={100}>
          <sphereGeometry args={[1, 64, 64]} />
          <LayerMaterial side={THREE.BackSide}>
            <Base color="blue" alpha={1} mode="normal" />
            <Depth colorA="#00ffff" colorB="#ff8f00" alpha={0.5} mode="normal" near={0} far={300} origin={[100, 100, 100]} />
            <Noise mapping="local" type="cell" scale={0.5} mode="softlight" />
          </LayerMaterial>
        </mesh>
      </Environment> */}

{/* <Environment resolution={512}>
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -6]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -3]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[100, 2, 1]} />
        <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} />
        <Lightformer form="ring" color="red" intensity={10} scale={2} position={[10, 5, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
      </Environment> */}

{/* <Fisheye resolution={768} zoom={0.25}>
        <Environment files={imgConstants.HDRS.HERO_ENVIRONMENT} ground={{ height: 35, radius: 100, scale: 200 }} />
        <ContactShadows renderOrder={2} frames={1} resolution={1024} scale={120} blur={2} opacity={0.6} far={100} />
        <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={0} maxPolarAngle={Math.PI / 2.25} makeDefault />
        <PerspectiveCamera makeDefault position={[45, 45, 10]} fov={50} />
          <HeroScene />
      </Fisheye> */}
          <Environment
            files={imgConstants.HDRS.HERO_ENVIRONMENT}
            /* backgroundIntensity={3} */
            /* backgroundRotation={new THREE.Vector3(0, Math.PI / 2, 0)} */
          />
          <PostProcessing />
        </Physics>
      </Suspense>
    </Canvas>
  )
}
