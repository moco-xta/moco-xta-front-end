'use client'

import React, { Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'
import { ScrollControls, useScroll } from '@react-three/drei'
import { getProject, val } from '@theatre/core'
import { PerspectiveCamera, SheetProvider, useCurrentSheet } from '@theatre/r3f'

import { ProjectsMap } from '@/components/r3f/models/projects/ProjectsMap'

studio.extend(extension)
studio.initialize()

function ProjectsScene() {
  const sheet = useCurrentSheet()
  const scroll = useScroll()

  useFrame(() => {
    const sequenceLength = val(sheet!.sequence.pointer.length)
    sheet!.sequence.position = scroll.offset * sequenceLength
  })

  return (
    <>
      <PerspectiveCamera
        theatreKey='Camera'
        makeDefault
        position={[0, 0, 0]}
        fov={90}
        near={0.1}
        far={70}
      />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <ProjectsMap />
    </>
  )
}

export default function ProjectCanvas() {
  const sheet = getProject('Skills scene').sheet('Scene')

  return (
    <Canvas gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={null}>
        <ScrollControls
          pages={5}
          damping={1}
          maxSpeed={1}
        >
          <SheetProvider sheet={sheet}>
            <ProjectsScene />
          </SheetProvider>
        </ScrollControls>
      </Suspense>
    </Canvas>
  )
}
