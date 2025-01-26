import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
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
  const dofRef = useRef<{ target: THREE.Vector3/* , focalLength: number */ }>({
    target: new THREE.Vector3(),
    // focalLength: 0.1,
  })
  const focalLengthRef = useRef<number>(0.1)
  const [focalLength, setFocalLength] = useState<number>(0.1)
  const { camera, gl } = useThree()

  const rubiksCubeIsLocked = useSelector(
    (state: RootState) => state.rubiksCubeState.rubiksCubeIsLocked,
  )

  // const movingCamera = 

  const controls = new OrbitControls(camera, gl.domElement)
  controls.target.set(0, 0, 0)
  // controls.autoRotate = true
  // controls.autoRotateSpeed = 0.5

  /* useEffect(() => {
      controls.autoRotate = !rubiksCubeIsLocked
    }, [rubiksCubeIsLocked]) */

  useFrame(({ camera }) => {
    controls.target.set(0, 0, 0)
    controls.update()
    dofRef.current.target = getDofTargetPosition(camera.position, { x: 0, y: 0, z: 0 }, 6)!
    setFocalLength(focalLengthRef.current)
    /* const { x, y, z } = dofRef.current.target
    focalLengthRef.current = getDofFocalLength(
      { x: x, y: y, z: z },
      { x: 8, y: 8, z: 8 },
      camera.position,
    ) */
    //setFocalLength(focalLengthRef.current)
    // if (dofRef.current.target) {
          /* const { x, y, z } = dofRef.current.target
          dofRef.current.focalLength = getDofFocalLength(
            { x: x, y: y, z: z },
            { x: 8, y: 8, z: 8 },
            camera.position,
          ) */
        // }
  })

  function updateControls() {
    // console.log('test updateControls')
    // controls.target.set(0, 0, 0);
    // controls.update()
    // dofRef.current.target = getDofTargetPosition(camera.position, { x: 0, y: 0, z: 0 }, 6)!
    const { x, y, z } = getDofTargetPosition(camera.position, { x: 0, y: 0, z: 0 }, 6)!
    focalLengthRef.current = getDofFocalLength(
      { x: x, y: y, z: z },
      { x: 8, y: 8, z: 8 },
      camera.position,
    )
  }

  /* gsap.to(focalLengthRef, {
    current: 0.6,
    duration: 10,
    ease: 'power1.out',
    delay: 3,
    onUpdate: () => console.log('test'),
  }) */

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
            onStart: () => {
              controls.enabled = false;
            },
            onUpdate: () => updateControls(),
            onComplete: () => {
              controls.enabled = true;
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
              controls.enabled = false; // Disable OrbitControls
            },
            onUpdate: () => updateControls(),
            onComplete: () => {
              controls.enabled = true; 
              handleGoTo('play')
            },
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
  )
}
