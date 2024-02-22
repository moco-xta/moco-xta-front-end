'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { getProject } from '@theatre/core'
import { editable as e, PerspectiveCamera, SheetProvider } from '@theatre/r3f'
import studio from '@theatre/studio'

studio.initialize()

const demoSheet = getProject('Demo Project').sheet('Demo Sheet')

export default function SkillsScene() {
  return (
    <Canvas>
      <SheetProvider sheet={getProject('Demo Project').sheet('Demo Sheet')}>
        <PerspectiveCamera theatreKey="Camera" makeDefault position={[5, 5, -5]} fov={75} />
        <ambientLight />
        <e.pointLight theatreKey="Light" position={[10, 10, 10]} />
        <e.mesh theatreKey="Cube">
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </e.mesh>
      </SheetProvider>
      <OrbitControls />
    </Canvas>
  )
}
