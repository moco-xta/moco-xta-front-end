import React, { Suspense, useMemo } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import {
  Box,
  KeyboardControls,
  MeshTransmissionMaterial,
  PerspectiveCamera,
  Plane,
  PointerLockControls,
} from '@react-three/drei'
import { Physics, RigidBody } from '@react-three/rapier'

import Player from '../../controls/Player'

import { Parquet, Trestle } from '../../models/about'

import { default as controlsConstants } from '@/constants/controlsConstants.json'
import { degreesToRadians } from '@/helpers/r3fHelpers'
import { MacBookPro } from '../../models/about/MacBookPro'

function AboutScene() {
  const { gl } = useThree()
  gl.toneMappingExposure = 1.5

  return (
    <>
      <MacBookPro />
      <Box
        args={[16, 0.1, 8]}
        position={[0, 6.07, 10]}
        receiveShadow
        castShadow
      >
        <MeshTransmissionMaterial
          backside
          backsideThickness={0.2}
          thickness={0.1}
        />
      </Box>
      <Trestle position={[6, 0.06, 10]} />
      <Trestle
        position={[-6, 0.06, 10]}
        rotation={[0, degreesToRadians(180), 0]}
      />
      <Parquet />
      <RigidBody colliders='hull'>
        <Plane
          args={[50, 50, 20, 20]}
          rotation={[degreesToRadians(90), 0, 0]}
        />
      </RigidBody>
    </>
  )
}

export default function AboutCanvas() {
  const keyboardControlsMap = useMemo(
    () => [
      { name: controlsConstants.FORWARD, keys: controlsConstants.FORWARD_KEYS },
      {
        name: controlsConstants.BACKWARD,
        keys: controlsConstants.BACKWARD_KEYS,
      },
      { name: controlsConstants.LEFT, keys: controlsConstants.LEFT_KEYS },
      { name: controlsConstants.RIGHT, keys: controlsConstants.RIGHT_KEYS },
      { name: controlsConstants.JUMP, keys: controlsConstants.JUMP_KEY },
    ],
    [],
  )

  return (
    <KeyboardControls map={keyboardControlsMap}>
      <Canvas
        shadows
        legacy
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          /* shadowMapEnabled: true */
        }}
      >
        <PerspectiveCamera
          makeDefault
          aspect={1200 / 600}
          fov={80}
          position={[0, 0, 0]}
          onUpdate={(self) => self.updateProjectionMatrix()}
        />
        <PointerLockControls selector='#button' />
        <ambientLight intensity={0.5} />
        <pointLight
          position={[10, 10, 10]}
          intensity={20}
          castShadow
        />
        <Suspense fallback={null}>
          <Physics debug>
            <Player />
            <AboutScene />
          </Physics>
        </Suspense>
      </Canvas>
    </KeyboardControls>
  )
}
