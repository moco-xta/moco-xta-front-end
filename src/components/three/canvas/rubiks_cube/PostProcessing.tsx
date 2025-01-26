import React, { MutableRefObject, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { useFrame, useThree } from '@react-three/fiber'
import { Bloom, DepthOfField, EffectComposer } from '@react-three/postprocessing'
import { KernelSize, Resolution } from 'postprocessing'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import { getDofFocalLength, getDofTargetPosition } from '@/helpers/rubiksCubeHelpers'

import { postProcessingData } from '@/data/skills/rubiks_cube/three/postProcessingData'
import { cameraDefaultValues } from '@/data/skills/rubiks_cube/three/cameraData'
import { useGSAPTimelineContext } from '@/hooks/animation/useGSAPTimelineContext'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

export type TPostProcessing = {
  perspectiveCameraRef: MutableRefObject<THREE.PerspectiveCamera>
}

export default function PostProcessing(/* { perspectiveCameraRef }: TPostProcessing */) {
  const { timeline } = useGSAPTimelineContext()
  const dofRef = useRef<{ target: THREE.Vector3; focalLength: number }>({
    target: new THREE.Vector3(),
    focalLength: 0.1,
  })
  const { camera, gl } = useThree()

  const rubiksCubeIsLocked = useSelector(
    (state: RootState) => state.rubiksCubeState.rubiksCubeIsLocked,
  )

  const controls = new OrbitControls(camera, gl.domElement)
  controls.target.set(0, 0, 0)
  controls.autoRotate = true
  controls.autoRotateSpeed = 0.5

  /* useEffect(() => {
      controls.autoRotate = !rubiksCubeIsLocked
    }, [rubiksCubeIsLocked]) */

  useFrame(({ camera }) => {
    controls.target.set(0, 0, 0)
    controls.update()
    dofRef.current.target = getDofTargetPosition(camera.position, { x: 0, y: 0, z: 0 }, 6)!
    /* if (dofRef.current.target) {
          const { x, y, z } = dofRef.current.target
          dofRef.current.focalLength = getDofFocalLength(
            { x: x, y: y, z: z },
            { x: 8, y: 8, z: 8 },
            camera.position,
          )
        } */
  })

  function updateControls() {
    /* console.log('test updateControls')
    controls.target.set(0, 0, 0);
    controls.update() */
    dofRef.current.target = getDofTargetPosition(camera.position, { x: 0, y: 0, z: 0 }, 6)!
  }

  function handleGoTo(label: string) {
    timeline.seek(label).pause()
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
            onUpdate: () => updateControls(),
            onComplete: () => {
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
            // onUpdate: () => updateControls(),
            onComplete: () => handleGoTo('play'),
          },
          'quit',
        )
    },
    /* { scope: rubiksCubeRef }, */
  )

  return (
    <EffectComposer>
      <DepthOfField
        // @ts-expect-error: Only used for target position
        ref={dofRef}
        focusDistance={postProcessingData.depthOfField.focusDistance}
        // focalLength={postProcessingData.depthOfField.focalLength}
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
  )
}
