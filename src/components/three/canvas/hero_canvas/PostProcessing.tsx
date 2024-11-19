import React from 'react'
import { Bloom, DepthOfField, EffectComposer } from '@react-three/postprocessing'
import { KernelSize, Resolution } from 'postprocessing'

export default function PostProcessing() {
  return (
    <EffectComposer>
      <Bloom
        intensity={1}
        kernelSize={KernelSize.LARGE}
        luminanceThreshold={0.05}
        luminanceSmoothing={0.025}
        mipmapBlur={false}
        resolutionX={Resolution.AUTO_SIZE}
        resolutionY={Resolution.AUTO_SIZE}
      />
    </EffectComposer>
  )
}
