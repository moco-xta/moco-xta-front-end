import React, { Ref, Suspense, createRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, ScrollControls, useScroll } from '@react-three/drei'
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'
import { getProject, val } from '@theatre/core'
import { PerspectiveCamera, SheetProvider, useCurrentSheet } from '@theatre/r3f'

import { SkillsPattern } from '@/components/r3f/models/skills/SkillsPattern'
import GraphicsText from '../../models/skills/GraphicsText'

import { default as SkillsConstants } from '@/constants/skillsConstants.json'
import { degreesToRadians } from '@/helpers/r3fHelpers'
import Test from '../../models/skills/Test'
import { skillsData } from '@/data/skillsData'
import { ForwardRefGltfInterface } from '@/interfaces/r3fInterfaces'

studio.extend(extension)
studio.initialize()

const position = { x: 30, y: 0, z: 1 }

function SkillsScene() {
  const sheet = useCurrentSheet()
  const scroll = useScroll()

  const logosRefs = useMemo(
    () =>
      skillsData.map(() => ({
        ref: createRef<THREE.Group<THREE.Object3DEventMap>>(),
      })),
    [],
  )

  useFrame(() => {
    const sequenceLength = val(sheet!.sequence.pointer.length)
    sheet!.sequence.position = scroll.offset * sequenceLength
  })

  return (
    <>
      <SkillsPattern />
      {logosRefs.map(({ ref }, index) => {
        const Logo = skillsData[index].logo.component
        return (
          <Logo
            key={`performed_with_logo_${index}`}
            ref={ref}
            scale={skillsData[index].logo.scale}
          />
        )
      })}
      {/* <Test /> */}
      {/*   <group
        position={[position.x, position.z, position.y]}
        rotation={[degreesToRadians(-30), 0, 0]}
      >
        <GraphicsText />
      </group> */}
    </>
  )
}

export default function SkillsCanvas() {
  const sheet = getProject('Skills scene').sheet('Scene')

  return (
    <Canvas
      dpr={SkillsConstants.SCENE.CANVAS.DPR}
      shadows
      linear
      flat
      gl={{
        antialias: SkillsConstants.SCENE.CANVAS.ANTIALIAS,
        powerPreference: SkillsConstants.SCENE.CANVAS.POWER_PREFERENCE,
        preserveDrawingBuffer:
          SkillsConstants.SCENE.CANVAS.PRESERVE_DRAWING_BUFFER,
      }}
    >
      <OrbitControls />
      <ScrollControls
        pages={5}
        damping={1}
        maxSpeed={1}
      >
        <SheetProvider sheet={sheet}>
          <PerspectiveCamera
            theatreKey='Camera'
            makeDefault
            position={[0, 0, -20]}
            fov={90}
            near={0.1}
            far={70}
          />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <SkillsScene />
          </Suspense>
        </SheetProvider>
      </ScrollControls>
    </Canvas>
  )
}
