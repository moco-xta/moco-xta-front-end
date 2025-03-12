import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import CustomCamera from '../../lib/custom_camera/CustomCamera'
import Lights from './Lights'

import { canvasDefaultValues } from '@/data/skills/three/rubiks_cube/canvasData'
import { cameraDefaultValues } from '@/data/skills/three/rubiks_cube/cameraData'
import RubiksCube from './RubiksCube'
import PostProcessing from './PostProcessing'

export default function RubiksCubeCanvas() {
  return (
    <Canvas {...canvasDefaultValues}>
      <color attach="background" args={['#fff']} />
      <CustomCamera defaultValues={cameraDefaultValues} />
      <Lights />
      <OrbitControls />
      <Suspense fallback={null}>
        <RubiksCube />
      </Suspense>
      <PostProcessing />
    </Canvas>
  )
}
