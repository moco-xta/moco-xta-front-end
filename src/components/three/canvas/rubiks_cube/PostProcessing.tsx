import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Bloom, DepthOfField, EffectComposer, ToneMapping } from '@react-three/postprocessing'
import { BlendFunction, KernelSize, Resolution } from 'postprocessing'
import { useGSAP } from '@gsap/react'

import { RootState } from '@/redux/store'

import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'

import { getDofFocalLength, getDofTargetPosition } from '@/helpers/rubiksCubeHelpers'

import { postProcessingData } from '@/data/skills/rubiks_cube/three/postProcessingData'
import { cameraDefaultValues } from '@/data/skills/rubiks_cube/three/cameraData'
import { rubiksCubeData } from '@/data/skills/rubiks_cube/three/rubiksCubeData'

export default function PostProcessing() {
  const { timeline } = useGSAPTimelineContext()
  const { camera } = useThree()
  const rubiksCubeIsLocked = useSelector(
    (state: RootState) => state.rubiksCubeState.rubiksCubeIsLocked,
  )

  const controlsRef = useRef<any>(null!)
  const dofRef = useRef<{ target: THREE.Vector3; focalLength: number }>({
    target: new THREE.Vector3(),
    focalLength: getDofFocalLength(
      getDofTargetPosition(
        new THREE.Vector3(0, 0, 0),
        camera.position as THREE.Vector3,
        rubiksCubeData.width,
      )!,
      { x: 6, y: 6, z: 6 },
      camera.position,
    ),
  })

  const [focalLength, setFocalLength] = useState<number>(dofRef.current.focalLength)

  useFrame(({ camera }) => {
    controlsRef.current.update()
    dofRef.current.target = getDofTargetPosition(
      new THREE.Vector3(0, 0, 0),
      camera.position as THREE.Vector3,
      rubiksCubeData.width,
    )!

    if (!rubiksCubeIsLocked) {
      dofRef.current.focalLength = getDofFocalLength(
        getDofTargetPosition(
          new THREE.Vector3(0, 0, 0),
          camera.position as THREE.Vector3,
          rubiksCubeData.width,
        )!,
        { x: 6, y: 6, z: 6 },
        camera.position,
      )
      setFocalLength(dofRef.current.focalLength)
    }
  })

  function handleGoTo(label: string) {
    timeline.seek(label).pause()
  }

  useGSAP(() => {
    timeline
      .to(
        camera.position,
        {
          x: 6,
          y: 6,
          z: 6,
          duration: 2,
          ease: 'power1.out',
          onStart: () => {
            controlsRef.current.enabled = false
          },
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
          onStart: () => {
            controlsRef.current.enabled = false
          },
          onComplete: () => {
            controlsRef.current.enabled = true
            handleGoTo('play')
          },
        },
        'quit',
      )
  })

  return (
    <>
      <OrbitControls
        ref={controlsRef}
        enableZoom
        minDistance={7}
        maxDistance={12}
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
        <ToneMapping
          blendFunction={BlendFunction.NORMAL} // blend mode
          adaptive={true} // toggle adaptive luminance map usage
          resolution={2048} // texture resolution of the luminance map
          middleGrey={0.5} // middle grey factor
          maxLuminance={20.0} // maximum luminance
          averageLuminance={5.0} // average luminance
          adaptationRate={1.0} // luminance adaptation rate
        />
      </EffectComposer>
    </>
  )
}
