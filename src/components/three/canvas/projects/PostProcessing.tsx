import React from 'react'
import { DepthOfField, EffectComposer } from '@react-three/postprocessing'
import { Bloom } from '@react-three/postprocessing'
import { KernelSize, Resolution } from 'postprocessing'

import { default as rubiksCubeConstants } from '@/constants/three/rubiksCubeConstants.json'

export default function PostProcessing() {
  return (
    <EffectComposer>
      <DepthOfField
        focusDistance={0.125}
        focalLength={0.15}
        bokehScale={15}
      />
      <Bloom
        intensity={1}
        kernelSize={KernelSize.LARGE}
        luminanceThreshold={0.9}
        luminanceSmoothing={0.9}
        mipmapBlur={false}
        resolutionX={Resolution.AUTO_SIZE}
        resolutionY={Resolution.AUTO_SIZE}
      />
    </EffectComposer>
  )
}
