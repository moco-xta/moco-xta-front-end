import React, { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { Bloom, DepthOfField, EffectComposer } from '@react-three/postprocessing'
import { KernelSize, Resolution } from 'postprocessing'

import { getDofTargetPosition } from '@/helpers/rubiksCubeHelpers'

import { postProcessingData } from '@/data/skills/rubiks_cube/three/postProcessingData'

export default function PostProcessing() {
  const dofRef = useRef<{ target: THREE.Vector3 }>({ target: new THREE.Vector3() })

  useFrame(({ camera }) => {
    dofRef.current.target = getDofTargetPosition(camera.position, { x: 0, y: 0, z: 0 }, 5.5)!
  })

  return (
    <EffectComposer>
      <DepthOfField
        // @ts-ignore
        ref={dofRef}
        focusDistance={postProcessingData.depthOfField.focusDistance}
        focalLength={postProcessingData.depthOfField.focalLength}
        bokehScale={postProcessingData.depthOfField.bokehScale}
        target={new THREE.Vector3(3, 3, 3)}
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
