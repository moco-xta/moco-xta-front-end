import React, { Suspense, useRef } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import Controls from './Controls'
import Lights from './Lights'
import Fog from './Fog'
import RubiksCube from './RubiksCube'
import PostProcessing from './PostProcessing'

import { canvasDefaultValues } from '@/data/skills/rubiks_cube/three/canvasData'
import { cameraDefaultValues } from '@/data/skills/rubiks_cube/three/cameraData'

export default function RubiksCubeCanvas() {
  const { timeline } = useGSAPTimelineContext()

  /* const perspectiveCameraRef = useRef<THREE.PerspectiveCamera>(new THREE.PerspectiveCamera())

  function handleGoTo(label: string) {
    timeline.seek(label).pause()
  }

  useGSAP(
    () => {
      timeline
        .to(
          perspectiveCameraRef.current.position,
          {
            x: 10,
            y: 10,
            z: 10,
            duration: 2,
            ease: 'power1.out',
            delay: 1,
            onComplete: () => handleGoTo('quit'),
          },
          'play',
        )
        .to(
          perspectiveCameraRef.current.position,
          {
            x: cameraDefaultValues.camera.position!.x,
            y: cameraDefaultValues.camera.position!.y,
            z: cameraDefaultValues.camera.position!.z,
            duration: 2,
            ease: 'power1.out',
            delay: 1,
            onComplete: () => handleGoTo('play'),
          },
          'quit',
        )
    },
    { scope: perspectiveCameraRef },
  ) */

  return (
    <Canvas
      {...canvasDefaultValues}
      camera={cameraDefaultValues.camera}
    >
      {/* <PerspectiveCamera
        // ref={perspectiveCameraRef}
        {...cameraDefaultValues.camera}
      /> */}
      {/* <Controls /> */}
      <Lights />
      <Fog />
      <Suspense fallback={null}>
        <RubiksCube />
      </Suspense>
      <PostProcessing /* perspectiveCameraRef={perspectiveCameraRef} */ />
    </Canvas>
  )
}
