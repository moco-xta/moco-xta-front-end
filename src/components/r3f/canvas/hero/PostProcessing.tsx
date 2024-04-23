import React from 'react'
import { DepthOfField, EffectComposer } from '@react-three/postprocessing'
import { Bloom } from '@react-three/postprocessing'
import { KernelSize, Resolution } from 'postprocessing'

export default function PostProcessing() {
  return (
    <EffectComposer>
      <DepthOfField
        focusDistance={0.15}
        focalLength={0.25}
        bokehScale={1}
      />
      <Bloom
        intensity={2.5}
        blurPass={undefined}
        kernelSize={KernelSize.LARGE}
        luminanceThreshold={0.9}
        luminanceSmoothing={0.025}
        mipmapBlur={true}
        resolutionX={Resolution.AUTO_SIZE}
        resolutionY={Resolution.AUTO_SIZE}
      />
    </EffectComposer>
  )
}
