import React from 'react'
import { DepthOfField, EffectComposer } from '@react-three/postprocessing'
import { Bloom } from '@react-three/postprocessing'
import { KernelSize, Resolution } from 'postprocessing'

import { postProcessingData } from '@/data/skills/rubiks_cube/three/postProcessingData'

export default function PostProcessing() {
  return (
    <EffectComposer>
      <DepthOfField
        focusDistance={postProcessingData.depthOfField.focusDistance}
        focalLength={postProcessingData.depthOfField.focalLength}
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
    </EffectComposer>
  )
}
