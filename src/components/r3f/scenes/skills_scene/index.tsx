'use client'

import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { getProject } from '@theatre/core'
import studio from '@theatre/studio'
import { editable as e, PerspectiveCamera, SheetProvider } from '@theatre/r3f'
import extension from '@theatre/r3f/dist/extension'

import demoProjectState from '@/components/r3f/animations/skills/state.json'

studio.initialize()
studio.extend(extension)

getProject('Demo Project', { state: demoProjectState })

const demoSheet = getProject('Demo Project', { state: demoProjectState }).sheet(
  'Demo Sheet',
)

export default function SkillsScene() {
  useEffect(() => {
    demoSheet.project.ready.then(() =>
      demoSheet.sequence.play({ iterationCount: Infinity, range: [0, 1] }),
    )
  }, [])
  return (
    <Canvas>
      <SheetProvider sheet={demoSheet}>
        <PerspectiveCamera
          theatreKey='Camera'
          makeDefault
          position={[5, 5, -5]}
          fov={75}
        />
        <ambientLight />
        <e.pointLight
          theatreKey='Light'
          position={[10, 10, 10]}
        />
        <e.mesh theatreKey='Cube'>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color='orange' />
        </e.mesh>
      </SheetProvider>
      <OrbitControls />
    </Canvas>
  )
}
