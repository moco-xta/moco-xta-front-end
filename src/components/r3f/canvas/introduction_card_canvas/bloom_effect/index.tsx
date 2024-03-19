import React from 'react'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { KernelSize, Resolution } from 'postprocessing'

import { default as introductionConstants } from '@/constants/introductionConstants.json'

export default function BloomEffect() {
  return (
    <EffectComposer>
      <Bloom
        intensity={introductionConstants.SCENE.BLOOM.INTENSITY}
        blurPass={undefined}
        kernelSize={KernelSize.LARGE}
        luminanceThreshold={
          introductionConstants.SCENE.BLOOM.LUMINANCE_THRESHOLD
        }
        luminanceSmoothing={
          introductionConstants.SCENE.BLOOM.LUMINANCE_SMOOTHING
        }
        mipmapBlur={introductionConstants.SCENE.BLOOM.MIPMAP_BLUR}
        resolutionX={Resolution.AUTO_SIZE}
        resolutionY={Resolution.AUTO_SIZE}
      />
    </EffectComposer>
  )
}
