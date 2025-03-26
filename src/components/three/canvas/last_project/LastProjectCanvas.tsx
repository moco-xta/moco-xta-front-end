import React from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

import LastProjectScene from './LastProjectScene'

import { canvasDefaultValues } from '@/data/projects/three/last_project/canvasData'

export default function LastProjectCanvas({
  index,
  textureUrl,
}: {
  index: number
  textureUrl: string
}) {
  return (
    <Canvas {...canvasDefaultValues}>
      <PerspectiveCamera
        makeDefault
        position={new THREE.Vector3(0, 0, 2.5)}
      />
      {/* <OrbitControls /> */}
      <LastProjectScene
        index={index}
        textureUrl={textureUrl}
      />
    </Canvas>
  )
}
