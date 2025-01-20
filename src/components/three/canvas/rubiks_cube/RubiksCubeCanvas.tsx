import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { /* CameraControls, Fisheye,  */ PerspectiveCamera } from '@react-three/drei'

import Controls from './Controls'
import Lights from './Lights'
import Fog from './Fog'
import RubiksCube from './RubiksCube'
import PostProcessing from './PostProcessing'

import { canvasDefaultValues } from '@/data/skills/rubiks_cube/three/canvasData'
import { cameraDefaultValues } from '@/data/skills/rubiks_cube/three/cameraData'

export default function RubiksCubeCanvas() {
  return (
    <Canvas {...canvasDefaultValues} /* flat */>
      <PerspectiveCamera {...cameraDefaultValues.camera} />
      {/* <Fisheye zoom={1}> */}
      <Controls />
      {/* <CameraControls
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 1.6}
      /> */}
      <Lights />
      <Fog />
      <Suspense fallback={null}>
        <RubiksCube />
      </Suspense>
      <PostProcessing />
      {/* <PerspectiveCamera makeDefault position={[3.75, 3.75, 3.75]} /> */}
      {/* </Fisheye> */}
    </Canvas>
  )
}
