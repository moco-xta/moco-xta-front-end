'use client'

import React, { Suspense, createRef, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, ThreeEvent } from '@react-three/fiber'
import { Box, PerspectiveCamera, RoundedBox, SoftShadows } from '@react-three/drei'

import { IntroductionCardCanvasInterface, IntroductionCardSceneInterface } from '@/interfaces/components/r3f/introductionCardInterfaces'

import { getUvMousePositionOnMesh } from '@/helpers/r3fHelpers'
import { LogoRefType } from 'types/logoRefType'

function IntroducitonCardScene({ content }: IntroductionCardSceneInterface) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!)
  const introductionCardRef = useRef<THREE.Group>(null!)
  const introductionSkillCardRef = createRef<LogoRefType>()

  function handleOnPointerMove(event: ThreeEvent<PointerEvent>) {
    const { x, y } = getUvMousePositionOnMesh(event, 'introduction_card')

    if (introductionCardRef.current) {
      introductionCardRef.current!.rotation.x = -y * 0.003
      introductionCardRef.current!.rotation.y = -x * 0.003
      introductionCardRef.current!.scale.x = 1.2
      introductionCardRef.current!.scale.y = 1.2
      introductionCardRef.current!.scale.z = 1.2
    }
  }

  function handleOnPointerLeave(event: ThreeEvent<PointerEvent>) {
    if (introductionCardRef.current) {
      introductionCardRef.current!.rotation.x = 0
      introductionCardRef.current!.rotation.y = 0
      introductionCardRef.current!.scale.x = 1
      introductionCardRef.current!.scale.y = 1
      introductionCardRef.current!.scale.z = 1
    }
  }

  return (
    <>
      {/* <SoftShadows size={56} focus={2} samples={20} /> */}
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[0, 0, 15]}
      />
      <pointLight
        position={[5, 5, 5]}
        intensity={20}
        castShadow
      />
      <pointLight
        position={[-5, 5, 5]}
        intensity={20}
        castShadow
      />
      <pointLight
        position={[0, 0, 5]}
        intensity={20}
        castShadow
      />
      <group ref={introductionCardRef}>
        <RoundedBox
          name='introduction_card'
          args={[6 * 1.2, 8 * 1.2, 0.2]}
          radius={0.5}
          onPointerMove={handleOnPointerMove}
          onPointerOut={handleOnPointerLeave}
          receiveShadow
          castShadow
        >
          <meshStandardMaterial
            attach='material'
            color={'#0b0831'}
          />
        </RoundedBox>
        <content.logo
          key={`introduction_skill_card_${content.name}`}
          ref={introductionSkillCardRef}
        />
      </group>
    </>
  )
}

export default function IntroductionCardCanvas({ content }: IntroductionCardCanvasInterface) {
  return (
    <Canvas
      shadows
      legacy
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      }}
    >
      <Suspense fallback={null}>
        <IntroducitonCardScene content={content} />
      </Suspense>
    </Canvas>
  )
}
