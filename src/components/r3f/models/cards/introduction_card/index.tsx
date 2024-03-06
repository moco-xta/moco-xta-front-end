'use client'

import React, { useRef } from 'react'
import * as THREE from 'three'
import { Canvas, ThreeEvent } from '@react-three/fiber'
import { Box, PerspectiveCamera, RoundedBox } from '@react-three/drei'

import {
  IntroductionCardCanvasInterface,
  IntroductionCardSceneInterface,
} from '@/interfaces/components/r3f/introductionCardInterfaces'

import { getUvMousePositionOnMesh } from '@/helpers/r3fHelpers'

import './index.scss'
import { LogoNextjs } from '@/components/r3f/models/logos/LogoNextjs'

function IntroducitonCardScene({ content }: IntroductionCardSceneInterface) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!)
  const introductionCardRef = useRef<THREE.Group>(null!)

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
        {content.logo}
        {/* <Box /> */}
        <RoundedBox
          name='introduction_card'
          args={[6 * 1.2, 8 * 1.2, 0.2]}
          radius={0.5}
          onPointerMove={handleOnPointerMove}
          onPointerOut={handleOnPointerLeave}
          layers={1}
          receiveShadow
          castShadow
        >
          <meshBasicMaterial
            attach={'material'}
            color={'#0b0831'}
          ></meshBasicMaterial>
        </RoundedBox>
      </group>
    </>
  )
}

export default function IntroductionCardCanvas({
  content,
}: IntroductionCardCanvasInterface) {
  return (
    <div className='introduction_card_canvas_container'>
      <Canvas
        dpr={1}
        shadows
        legacy
        gl={{
          antialias: true,
          alpha: true,
          /* powerPreference: 'high-performance', */
          preserveDrawingBuffer: true,
        }}
        onCreated={(object) => {
          object.camera.layers.enableAll()
          object.raycaster.layers.set(1)
          console.log(object)
        }}
        /* style={{ background: "hotpink" }} */
      >
        <IntroducitonCardScene content={content} />
      </Canvas>
    </div>
  )
}
