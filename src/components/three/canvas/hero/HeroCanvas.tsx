import React, { Suspense, useRef } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { SoftShadows } from '@react-three/drei'
import { Physics } from '@react-three/rapier'

import CustomCamera from '../../lib/custom_camera/CustomCamera'
import Lights from './Lights'
import Fog from './Fog'
import Pointer from './Pointer'
import { HeroLogos } from './HeroLogos'

import { canvasDefaultValues } from '@/data/canvas/hero/canvasData'
import { cameraDefaultValues } from '@/data/canvas/hero/cameraData'
import { softShadowsDefaultValues } from '@/data/canvas/hero/softShadowsData'

export default function HeroCanvas() {
  const pointerRef = useRef<THREE.Vector3>(new THREE.Vector3())

  return (
    <Canvas {...canvasDefaultValues}>
      <CustomCamera defaultValues={cameraDefaultValues} />
      <Lights />
      <SoftShadows {...softShadowsDefaultValues} />
      <Fog />
      <Suspense fallback={null}>
        <Physics
          // debug
          gravity={[0, 0, 0]}
        >
          <Pointer pointerRef={pointerRef} />
          <HeroLogos />
        </Physics>
      </Suspense>
    </Canvas>
  )
}
