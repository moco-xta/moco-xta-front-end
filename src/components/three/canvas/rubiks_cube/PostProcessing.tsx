import React, { MutableRefObject, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { OrbitControls as DreiOrbitControls, OrbitControlsProps } from '@react-three/drei'
import { Bloom, DepthOfField, EffectComposer } from '@react-three/postprocessing'
import { KernelSize, Resolution } from 'postprocessing'
import { useGSAP } from '@gsap/react'

import { RootState } from '@/redux/store'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import {
  findIntersectionWithCube,
  getDofFocalLength,
  getDofTargetPosition,
} from '@/helpers/rubiksCubeHelpers'

import { postProcessingData } from '@/data/skills/rubiks_cube/three/postProcessingData'
import { cameraDefaultValues } from '@/data/skills/rubiks_cube/three/cameraData'
import { rubiksCubeData } from '@/data/skills/rubiks_cube/three/rubiksCubeData'

export type TPostProcessing = {
  perspectiveCameraRef: MutableRefObject<THREE.PerspectiveCamera>
}

export default function PostProcessing(/* { perspectiveCameraRef }: TPostProcessing */) {
  const { timeline } = useGSAPTimelineContext()
  const { camera } = useThree()
  const rubiksCubeIsLocked = useSelector(
    (state: RootState) => state.rubiksCubeState.rubiksCubeIsLocked,
  )

  const controlsRef = useRef<any>(null!)
  const dofRef = useRef<{ target: THREE.Vector3 }>({
    target: new THREE.Vector3(),
  })
  const focalLengthRef = useRef<number>(0.1)

  const [focalLength, setFocalLength] = useState<number>(0.1)

  // const controls = new OrbitControls(camera, gl.domElement)
  // controls.target.set(0, 0, 0)

  useFrame(({ camera }) => {
    controlsRef.current.target.set(0, 0, 0)
    controlsRef.current.update()
    dofRef.current.target = findIntersectionWithCube(
      camera.position,
      rubiksCubeData.width * 2,
      new THREE.Vector3(0, 0, 0),
    )!

    /* if (findIntersectionWithCube(new THREE.Vector3(0, 0, 0), rubiksCubeData.width, camera.position)) */ focalLengthRef.current =
      getDofFocalLength(
        findIntersectionWithCube(
          camera.position,
          rubiksCubeData.width * 2,
          new THREE.Vector3(0, 0, 0),
        )!,
        { x: 8, y: 8, z: 8 },
        camera.position,
      )
    setFocalLength(focalLengthRef.current)
  })

  function updateControls() {
    controlsRef.current.update()
    /* const { x, y, z } = getDofTargetPosition(camera.position, { x: 0, y: 0, z: 0 }, 6)!
    focalLengthRef.current = getDofFocalLength(
      { x: x, y: y, z: z },
      { x: 8, y: 8, z: 8 },
      camera.position,
    ) */
  }

  function handleGoTo(label: string) {
    // timeline.seek(label).pause()
  }

  useGSAP(
    () => {
      timeline
        .to(
          camera.position,
          {
            x: 8,
            y: 8,
            z: 8,
            duration: 2,
            ease: 'power1.out',
            delay: 1,
            onStart: () => {
              controlsRef.current.enabled = false
            },
            onUpdate: () => updateControls(),
            onComplete: () => {
              controlsRef.current.enabled = true
              handleGoTo('quit')
            },
          },
          'play',
        )
        .to(
          camera.position,
          {
            x: cameraDefaultValues.camera.position!.x,
            y: cameraDefaultValues.camera.position!.y,
            z: cameraDefaultValues.camera.position!.z,
            duration: 2,
            ease: 'power1.out',
            delay: 1,
            onStart: () => {
              controlsRef.current.enabled = false // Disable OrbitControls
            },
            onUpdate: () => updateControls(),
            onComplete: () => {
              controlsRef.current.enabled = true
              handleGoTo('play')
            },
          },
          'quit',
        )
    },
    /* { scope: rubiksCubeRef }, */
  )

  return (
    <>
      <DreiOrbitControls
        ref={controlsRef}
        enableZoom
        minDistance={7}
        maxDistance={15}
        target={new THREE.Vector3(0, 0, 0)}
        autoRotate={rubiksCubeIsLocked}
        autoRotateSpeed={0.5}
      />
      <EffectComposer>
        <DepthOfField
          // @ts-expect-error: Only used for target position
          ref={dofRef}
          focusDistance={postProcessingData.depthOfField.focusDistance}
          focalLength={focalLength}
          bokehScale={postProcessingData.depthOfField.bokehScale}
          // target={new THREE.Vector3(3, 3, 3)}
        />
        <Bloom
          intensity={postProcessingData.bloom.intensity}
          kernelSize={KernelSize.LARGE}
          luminanceThreshold={postProcessingData.bloom.luminanceThreshold}
          luminanceSmoothing={postProcessingData.bloom.luminanceSmoothing}
          mipmapBlur={postProcessingData.bloom.mipmapBlur}
          resolutionX={Resolution.AUTO_SIZE}
          resolutionY={Resolution.AUTO_SIZE}
        />
      </EffectComposer>
    </>
  )
}
